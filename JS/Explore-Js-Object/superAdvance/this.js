const kodomAli ={
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    // get & show or access
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam';
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