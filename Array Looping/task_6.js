/* 
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected Output:
John scored 85
Alice scored 90
 */

const obj =
    [
        { name: "John", marks: 85 },
        { name: "Alice", marks: 90 }
    ]

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].name + ' scored ' + obj[i].marks)
}

