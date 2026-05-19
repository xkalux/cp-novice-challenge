/*
TH: โจทย์พื้นฐานด้าน type
1) อ่าน type ที่ให้และอธิบายความหมายของแต่ละ field
2) ใช้ TodoStatus และ TodoItem ให้ถูกต้องในทุกฟังก์ชัน
3) ฝึกใช้ union type และ type alias ให้คล่อง

EN: Core type tasks
1) Read the provided types and explain each field
2) Use TodoStatus and TodoItem correctly in every function
3) Practice union types and type aliases
*/

export type TodoStatus = "pending" | "done";

export type TodoItem = {
  id: number;
  title: string;
  status: TodoStatus;
};

export type TodoStats = {
  total: number;
  pending: number;
  done: number;
};
