// 1. create object using object literals
const player = {} //empty object
player.name = 'Nirob';
player.speciality = 'batsman';
player.bat = function(){        //Method or any type of function
    console.log('Swing your bad');
}
console.log(player);
player.bat();

 
const student = {
    name: 'Pandey',
    job: 'Khai Ande',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 100000
}
// console.log(student);


//2. object Const-ructor: not use
const persons = new Object(null); //can use without new
// console.log(person);



// 3. Object create method
// const item = Object.create(student); //anything put in ()
// console.log(item);

const pupils = Object.create(student);
console.log(pupils);
console.log(pupils.name);
console.log(pupils.friend);

// 4. class
class person{
    name = 'abul';
    address = 'sodoe ghat'
    constructor(age){
        this.age = age;
    }
}
const person1 = new person(56);
console.log(person1);

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
const person2 = new Person('john', 'saheb');
console.log(person2);