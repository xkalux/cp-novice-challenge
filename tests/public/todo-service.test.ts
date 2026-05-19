import { describe, expect, test } from "bun:test";
import { addTodo, completeTodo, listTodos, removeTodo } from "../../src/todo-service";
import type { TodoItem } from "../../src/todo-types";

describe("todo-service", function () {
  test("addTodo creates a pending task", function () {
    var list: TodoItem[] = [];
    var result: TodoItem[] = addTodo(list, "Read TypeScript basics");
    var first: TodoItem | undefined = result[0];

    expect(result.length).toBe(1);
    expect(first).toBeDefined();

    if (first === undefined) {
      throw new Error("Expected first todo to be defined");
    }

    expect(first.id).toBe(1);
    expect(first.status).toBe("pending");
  });

  test("addTodo trims spaces", function () {
    var list: TodoItem[] = [];
    var result: TodoItem[] = addTodo(list, "  Practice loops  ");
    var first: TodoItem | undefined = result[0];

    expect(first).toBeDefined();

    if (first === undefined) {
      throw new Error("Expected first todo to be defined");
    }

    expect(first.title).toBe("Practice loops");
  });

  test("completeTodo updates status", function () {
    var list: TodoItem[] = addTodo([], "Task A");
    var updated: TodoItem[] = completeTodo(list, 1);
    var first: TodoItem | undefined = updated[0];

    expect(first).toBeDefined();

    if (first === undefined) {
      throw new Error("Expected first todo to be defined");
    }

    expect(first.status).toBe("done");
  });

  test("removeTodo removes by id", function () {
    var list: TodoItem[] = addTodo([], "Task A");
    list = addTodo(list, "Task B");

    var updated: TodoItem[] = removeTodo(list, 1);
    var first: TodoItem | undefined = updated[0];

    expect(updated.length).toBe(1);
    expect(first).toBeDefined();

    if (first === undefined) {
      throw new Error("Expected first todo to be defined");
    }

    expect(first.id).toBe(2);
  });

  test("listTodos returns readable lines", function () {
    var list: TodoItem[] = addTodo([], "Task A");
    var output: string = listTodos(list);

    expect(output).toContain("[ ] 1. Task A");
  });
});
