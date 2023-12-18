// Dot notation 
const student = {
    name: 'kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

// Dot notation 
const marks = student.marks;
const math = student.marks.math;

// bracket notation
const chemistry = student['marks']['chemistry'];
console.log(chemistry);