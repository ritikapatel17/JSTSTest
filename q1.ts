// q1
// Step1: npm init -y
// Step2: npm i typescript
// Step3: tsc filename.ts
// Step4: node filename.js

// q2
class Student {
    name;
    studentId;
    grade;
    address;

    constructor(name,studentId,grade,address) {
        this.name = name;
        this.studentId=studentId;
        this.grade=grade;
        this.address=address;
    }
    displayInfo() {
        console.log(this.name + "" + this.studentId+ ""+this.grade+ ""+this.address);
    }
}
const e = new Student("tom",123,"+A","Borivali");
e.displayInfo();
}

// q3
class School{
    static totalStudents
}


// q4



