// object can contains string, number, boolean, array, object, function
// object, object oriented programming work, 
const student ={
    name: 'Kodom ALi',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    // get & show or access
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return (this.name, 'is participating in an exam');
    },
    // one method call is another method
    improveExam: function(subjects){
        this.exam();
        return `${this.name} is taking improvement exam ${subjects}`
    },
    // set: 
    treatDay: function(amount, tips){
        this.money = this.money - amount-tips;
        return this.money;
    }
}
// student.exam(); 
const value = student.exam(); //return
console.log(value); 

//improve exam
const reexam = student.improveExam('algebra');
console.log(reexam);

// treatDay
const remaining = student.treatDay(900, 100);
console.log(remaining);

const mobileRemaining = student.treatDay(500, 50);
console.log(mobileRemaining);