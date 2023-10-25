/* 
1. template string (`${}`): 
    const numbers = [89, 35, 98, 12];
    const student = {
        name: "salib khan", 
        age: 32,
        movies: ['king', ,'khan']
    }

    const about = `My name ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
    console.log(about);

2. arrow function: 
    declare arrow function
        const getFiftyFive = () => 55;  //name = (empty para) => returnValue;
        const getSixtyFive = (num) => num + 65; //single parameter
        const isEven =(x) => x%2 === 0; //same-single parameter
        const addThree = (x, y, z) => x + y + z; //multiple parameter
        multiLine parameter: by default not return -> do return 
            const doMath = (num1, num2){
                const sum = num1 + num2;
                return sum;
            }

3. spread Operator(...)
    const numbers = [89, 35, 98, 12]; // declare before 
    // array is ref. type
    const newNumbers = [...numbers];//(numbers) or [numbers] it doesn't work
    numbers.push(99); 

    //create a new array from an older array and an element
    const currentNumbers = [...numbers, 55]; //add prev.array/element + 55

    console.log(numbers);
    console.log(newNumbers);
    console.log(currentNumbers); 
*/