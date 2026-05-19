# Starter CLI Architecture

## Overview
CLI นี้เป็นตัวอย่างโครงสร้างเริ่มต้นสำหรับ todo-manager โดยเน้นการแยก logic ออกจากการรับคำสั่ง

## Components
1. src/index.ts
- รับคำสั่งจาก command line
- route คำสั่งไปยังฟังก์ชันที่เกี่ยวข้อง

2. src/todo-service.ts
- เก็บ business logic ของ todo
- add/list/done/remove

3. src/todo-types.ts
- เก็บ type alias และสถานะข้อมูล

## Data Flow
1. ผู้ใช้พิมพ์คำสั่ง
2. index.ts parse arguments
3. เรียกฟังก์ชันใน todo-service.ts
4. ส่งผลลัพธ์กลับมาแสดงบน console

## Extension Points
- เพิ่มคำสั่ง search
- เพิ่มคำสั่ง clear-done
- เปลี่ยนจาก in-memory เป็น file-based storage (ทำใน phase ที่เหมาะสม)
