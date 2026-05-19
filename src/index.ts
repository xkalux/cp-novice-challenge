/*
TH: ไฟล์นี้เป็นตัวอย่างโครง CLI
- นักศึกษาควรอ่าน flow การรับคำสั่งจาก args
- นักศึกษาควรเชื่อมคำสั่งกับฟังก์ชันใน todo-service.ts
- สามารถขยายคำสั่งเพิ่มได้ เช่น stats, search, clear-done

EN: This file is the starter CLI flow
- Study how command arguments are parsed
- Connect each command to functions in todo-service.ts
- You may extend commands such as stats, search, clear-done
*/

import type { TodoItem } from "./todo-types";
import { addTodo, completeTodo, listTodos, removeTodo } from "./todo-service";

function printHelp(): void {
    console.log("todo-manager");
    console.log("Commands:");
    console.log("  add <title>");
    console.log("  list");
    console.log("  done <id>");
    console.log("  remove <id>");
}

function parseId(input: string | undefined): number {
    if (input === undefined) {
        throw new Error("ID is required");
    }

    var id: number = Number(input);

    if (!Number.isInteger(id) || id <= 0) {
        throw new Error("ID must be a positive integer");
    }

    return id;
}

function main(): void {
    var todos: TodoItem[] = [];
    var args: string[] = process.argv.slice(2);
    var command: string | undefined = args[0];

    if (command === undefined) {
        printHelp();
        return;
    }

    if (command === "add") {
        var title: string = args.slice(1).join(" ");
        todos = addTodo(todos, title);
        console.log("Added task");
        console.log(listTodos(todos));
        return;
    }

    if (command === "list") {
        console.log(listTodos(todos));
        return;
    }

    if (command === "done") {
        var doneId: number = parseId(args[1]);
        todos = completeTodo(todos, doneId);
        console.log("Updated task");
        console.log(listTodos(todos));
        return;
    }

    if (command === "remove") {
        var removeId: number = parseId(args[1]);
        todos = removeTodo(todos, removeId);
        console.log("Removed task");
        console.log(listTodos(todos));
        return;
    }

    printHelp();
}

main();
