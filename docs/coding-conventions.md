# Coding Conventions

## Core Style
- ใช้ procedural programming
- เขียนฟังก์ชันขนาดเล็กและรับผิดชอบชัดเจน
- ตั้งชื่อแปรและฟังก์ชันให้อ่านรู้เรื่อง

## Required Language Features
- for
- while
- for...in
- for...of
- if-else
- switch-case

## Forbidden Language Features
- any
- arrow functions
- class
- OOP patterns
- map
- reduce
- filter

## Type Safety
- เปิด strict mode
- หลีกเลี่ยง type assertion ที่ไม่จำเป็น
- ใช้ union type และ type alias ตามบริบท

## Function Design
- 1 ฟังก์ชันทำงานหลัก 1 อย่าง
- ส่งคืนค่าที่คาดเดาได้
- โยน error พร้อมข้อความที่เข้าใจได้เมื่อข้อมูลไม่ถูกต้อง
