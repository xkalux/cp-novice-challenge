import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

type Violation = {
    file: string;
    rule: string;
    match: string;
};

async function walk(dirPath: string): Promise<string[]> {
    var files: string[] = [];
    var entries = await readdir(dirPath, { withFileTypes: true });

    for (var i: number = 0; i < entries.length; i = i + 1) {
        var entry = entries[i];

        if (entry === undefined) {
            continue;
        }

        var nextPath: string = join(dirPath, entry.name);

        if (entry.isDirectory()) {
            var childFiles: string[] = await walk(nextPath);
            files = files.concat(childFiles);
            continue;
        }

        if (entry.isFile() && entry.name.endsWith(".ts")) {
            files.push(nextPath);
        }
    }

    return files;
}

function findViolations(content: string, filePath: string): Violation[] {
    var rules: Array<{ rule: string; pattern: RegExp }> = [
        { rule: "Do not use any", pattern: /\bany\b/g },
        { rule: "Do not use arrow function", pattern: /=>/g },
        { rule: "Do not use class", pattern: /\bclass\b/g },
        { rule: "Do not use map", pattern: /\.map\s*\(/g },
        { rule: "Do not use reduce", pattern: /\.reduce\s*\(/g },
        { rule: "Do not use filter", pattern: /\.filter\s*\(/g }
    ];

    var violations: Violation[] = [];

    for (var i: number = 0; i < rules.length; i = i + 1) {
        var rule = rules[i];

        if (rule === undefined) {
            continue;
        }

        rule.pattern.lastIndex = 0;
        var match = rule.pattern.exec(content);

        if (match !== null) {
            violations.push({
                file: filePath,
                rule: rule.rule,
                match: match[0]
            });
        }
    }

    return violations;
}

async function run(): Promise<void> {
    var targets: string[] = ["src"];
    var violations: Violation[] = [];

    for (var i: number = 0; i < targets.length; i = i + 1) {
        var target: string | undefined = targets[i];

        if (target === undefined) {
            continue;
        }

        var files: string[] = await walk(target);

        for (var j: number = 0; j < files.length; j = j + 1) {
            var filePath: string | undefined = files[j];

            if (filePath === undefined) {
                continue;
            }

            var content: string = await readFile(filePath, "utf8");
            violations = violations.concat(findViolations(content, filePath));
        }
    }

    if (violations.length === 0) {
        console.log("Student rule check passed");
        return;
    }

    console.error("Student rule check failed");

    for (var k: number = 0; k < violations.length; k = k + 1) {
        var violation: Violation | undefined = violations[k];

        if (violation === undefined) {
            continue;
        }

        console.error("- " + violation.file + ": " + violation.rule + " (" + violation.match + ")");
    }

    process.exit(1);
}

run();
