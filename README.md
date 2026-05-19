# Todo Manager Assignment

## Installation
โปรเจกต์นี้ใช้ Bun และ TypeScript สำหรับวิชา Computer Programming 
ออกแบบให้ฝึกพื้นฐานการเขียนโปรแกรมเชิงกระบวนการ (procedural programming)

## Setup
1. ติดตั้ง Bun
2. ติดตั้ง dependencies
3. รันโปรแกรมด้วยคำสั่ง start

คำสั่งที่ใช้:
- bun install
- bun run start

## Bun Installation
ติดตั้ง Bun ตามระบบปฏิบัติการที่ใช้งาน
- Linux/macOS: curl -fsSL https://bun.sh/install | bash
- Windows: ดูวิธีติดตั้งจากเอกสารทางการของ Bun

ตรวจสอบว่าใช้งานได้:
- bun --version

## How to Run
รันโปรแกรมแบบ CLI:
- bun run start

ตัวอย่างคำสั่ง:
- bun run start add "Read chapter 1"
- bun run start list
- bun run start done 1
- bun run start remove 1

## How to Test
โปรเจกต์นี้มี public tests เท่านั้นในเฟสนี้
- bun run test

## How to Submit
1. แก้โค้ดใน src/
2. รันตรวจสอบด้วย bun run check
3. commit และ push ไปยัง repository ของ assignment ที่ GitHub Classroom สร้างให้

## Assignment Overview
เป้าหมายคือสร้างโปรแกรม todo-manager บน console ที่รองรับ:
- เพิ่มงาน
- ดูรายการงาน
- ทำเครื่องหมายว่างานเสร็จแล้ว
- ลบงาน

## AI Usage Policy
อนุญาตให้ใช้ AI เพื่อช่วยอธิบายแนวคิดหรือช่วย debug ได้
แต่ต้องเข้าใจโค้ดทุกบรรทัดที่ส่ง และต้องบันทึกการใช้งาน AI ใน OralDefenseSheet.md

## Rules
กติกาการเขียนโค้ดสำหรับรายวิชานี้:
- ใช้ TypeScript แบบ strict
- เน้น procedural programming
- ใช้โครงสร้างควบคุมพื้นฐาน: if-else, switch-case, loops
- ใช้ฟังก์ชันที่ตั้งชื่อชัดเจน

## Forbidden Behaviors
ห้ามใช้:
- any
- arrow functions
- class และ OOP patterns
- map, reduce, filter
- คัดลอกคำตอบทั้งไฟล์โดยไม่เข้าใจ

## Public vs Hidden Tests
ในเฟสนี้มีเฉพาะ public tests ที่นักศึกษาเห็นได้
ส่วน hidden tests จะอยู่ในระบบ private ของผู้สอน และ จะไม่เปิดเผยรายละเอียด test internals

## FAQ
Q: ถ้า test ผ่าน public tests แล้ว ได้คะแนนเต็มไหม?
A: ยังไม่การันตี เพราะภายหลังจะมี hidden tests ตรวจ edge cases

Q: ถ้าใช้ AI ได้ไหม?
A: ใช้ได้ในเชิงช่วยเรียนรู้ แต่ต้องบันทึกและอธิบายสิ่งที่เข้าใจด้วยตัวเอง

Q: ต้องใช้ OOP ไหม?
A: ไม่ต้อง และไม่ควรใช้ใน assignment นี้

## Troubleshooting
ปัญหา: bun command not found
วิธีแก้: ติดตั้ง Bun และเปิด terminal ใหม่

ปัญหา: TypeScript error ตอนรัน check
วิธีแก้: อ่านข้อความ error, แก้ type ให้ถูกต้อง แล้วรันใหม่

ปัญหา: test ไม่ผ่าน
วิธีแก้: เริ่มจากอ่าน expected behavior ใน tests/public และแก้ logic ใน src/
