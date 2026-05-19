import type { TodoItem, TodoStats } from "./todo-types";

/*
TH: โจทย์หลัก (ต้องทำ)
1) addTodo: เพิ่มงานใหม่, trim ช่องว่าง, ห้าม title ว่าง, id ต้องเพิ่มต่อจากค่าสูงสุดเดิม
2) listTodos: แสดงผลข้อความให้อ่านง่าย เช่น [ ] 1. Read book
3) completeTodo: เปลี่ยนสถานะงานที่ id ตรงกันเป็น done
4) removeTodo: ลบงานตาม id

TH: โจทย์เสริม (แนะนำ)
5) updateTodoTitle: แก้ชื่อ task ตาม id และ trim ช่องว่าง
6) getTodoStats: สรุป total/pending/done
7) searchTodosByKeyword: ค้นหา task จาก keyword แบบไม่สนตัวพิมพ์เล็กใหญ่
8) clearCompleted: ลบงานที่ done ออกทั้งหมด

EN: Main tasks (required)
1) addTodo: add a task, trim spaces, reject empty title, use next id
2) listTodos: render readable lines, for example [ ] 1. Read book
3) completeTodo: mark matching id as done
4) removeTodo: remove by id

EN: Extra tasks (recommended)
5) updateTodoTitle: edit task title by id and trim spaces
6) getTodoStats: return total/pending/done counts
7) searchTodosByKeyword: case-insensitive search
8) clearCompleted: remove all done tasks
*/

export function addTodo(list: TodoItem[], title: string): TodoItem[] {
  /*
  TH: รับ list เดิมและ title ใหม่ แล้วคืน list ใหม่ที่มี task เพิ่ม
  EN: Receive old list and title, then return a new list with one appended task
  */
  void list;
  void title;
  throw new Error("TODO: implement addTodo");
}

export function listTodos(list: TodoItem[]): string {
  /*
  TH: ถ้าไม่มีงานให้คืน No tasks, ถ้ามีให้แปลงเป็นหลายบรรทัด
  EN: Return No tasks for empty list, otherwise build multi-line text output
  */
  void list;
  throw new Error("TODO: implement listTodos");
}

export function completeTodo(list: TodoItem[], id: number): TodoItem[] {
  /*
  TH: หา id ให้เจอและเปลี่ยน status เป็น done, ถ้าไม่เจอให้ throw Error
  EN: Find matching id and set status to done, throw Error when missing
  */
  void list;
  void id;
  throw new Error("TODO: implement completeTodo");
}

export function removeTodo(list: TodoItem[], id: number): TodoItem[] {
  /*
  TH: ลบ task ตาม id และคืน list ใหม่, ถ้าไม่เจอให้ throw Error
  EN: Remove the task by id and return a new list, throw Error when missing
  */
  void list;
  void id;
  throw new Error("TODO: implement removeTodo");
}

export function updateTodoTitle(list: TodoItem[], id: number, newTitle: string): TodoItem[] {
  /*
  TH: โจทย์เสริม: แก้ชื่อ task ตาม id, trim ช่องว่าง, ชื่อห้ามว่าง
  EN: Extra task: update title by id, trim spaces, reject empty title
  */
  void list;
  void id;
  void newTitle;
  throw new Error("TODO: implement updateTodoTitle");
}

export function getTodoStats(list: TodoItem[]): TodoStats {
  /*
  TH: โจทย์เสริม: คืนผลสรุป total, pending, done
  EN: Extra task: return total, pending, and done statistics
  */
  void list;
  throw new Error("TODO: implement getTodoStats");
}

export function searchTodosByKeyword(list: TodoItem[], keyword: string): TodoItem[] {
  /*
  TH: โจทย์เสริม: คืนรายการที่ title มี keyword แบบไม่สนตัวพิมพ์เล็กใหญ่
  EN: Extra task: return todos with case-insensitive keyword match in title
  */
  void list;
  void keyword;
  throw new Error("TODO: implement searchTodosByKeyword");
}

export function clearCompleted(list: TodoItem[]): TodoItem[] {
  /*
  TH: โจทย์เสริม: ลบงานที่สถานะ done ทั้งหมด
  EN: Extra task: remove every task with done status
  */
  void list;
  throw new Error("TODO: implement clearCompleted");
}
