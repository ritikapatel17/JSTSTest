const students = [
    {name:"Tom",marks:75},
     {name:"Jerry",marks:90},
      {name:"Harry",marks:85},
       {name:"John",marks:60},
];

const result = students.filter((student) =>{
    return student.marks > 80;
})

console.log(result);
