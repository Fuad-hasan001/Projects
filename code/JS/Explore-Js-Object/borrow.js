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

const result = kodomAli.exam();
console.log(result);

/* const result2 = kodomAli.improveExam('algebra');
console.log(result2);

const result3 = kodomAli.treatDay(200, 50);
console.log(result3); */

// Purpose: (kodom ali obj )er vitor er method gulo (badam object) upor apply korbo
const badam ={
    name: 'kacha badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badam);
console.log(result2);

const badamMoney = kodomAli.treatDay.call(badam, 400, 40);
console.log('badamMoney',badamMoney);

const badamMoney2 = kodomAli.treatDay.apply(badam, [1000, 100]);
console.log('badamMoney2', badamMoney2);

const badmaAliTreat = kodomAli.treatDay.bind(badam);
const remaining = badmaAliTreat(1000, 100)
console.log(remaining);
