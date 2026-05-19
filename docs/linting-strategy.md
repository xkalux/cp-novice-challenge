# Linting Strategy

## Purpose
รักษามาตรฐานโค้ดให้ตรงตามข้อกำหนดรายวิชาและลดข้อผิดพลาดพื้นฐาน

## Tools
1. TypeScript compiler checks
2. Student rule checker script

## Commands
- bun run lint
- bun run lint:student-rules
- bun run check

## Policy
- ทุกงานที่ส่งควรรัน bun run check ก่อนเสมอ
- ถ้ามี violation ในกฎห้ามใช้ feature ต้องแก้ก่อนส่ง
- โค้ดที่ไม่ผ่าน type check ถือว่ายังไม่พร้อมส่ง
