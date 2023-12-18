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
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Developer{
    name;
    designation = 'web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
        this.tech = tech
    }
    // function(without keyword) / method
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    provideFeedback(){
        console.log(`$(this.name) thank you for your feedback`)
    }
}

class JobPlacement{
    name;
    designation = 'jpb placement Commandos'
    team = 'web team' 
    location;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
        this.tech = tech
    }
    // function(without keyword) / method
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    provideFeedback(){
        console.log(`$(this.name) thank you for your feedback`)
    }
}