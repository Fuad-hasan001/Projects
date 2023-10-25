// class - syntactic sugar
class Instructor{
    name;
    designation = 'web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    // function(without keyword) / method
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please crrate quiz for module ${module}`)
    }
}

const amir = new Instructor('amir', 'mumbai')
console.log(amir);

// call method
amir.startSupportSession('9:00');
amir.createQuiz(60);

