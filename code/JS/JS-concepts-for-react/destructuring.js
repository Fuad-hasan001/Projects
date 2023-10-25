/* 
1. array destructuring: must [left array/object] = [right array/object]

    const numbers = [42, 65]; 
    const x = numbers[0]; //old way
    const y = numbers[1]; //old way
    console.log(x, y);

    const [x, y] = [42, 65]; ////way-1-new way: both side array

    const [x, y] = numbers; ////way-2-advance way: right-side: variable

    way-3: function: 
    const boxify(num1, num2){
        const nums = [num1, num2];
        returns nums; 
    }

    const [first, second] = [90, 34];
    const [first, second] = boxify(90, 34); //right-side:fn. call, return array

    console.log(x, y);
    // console.log(boxify(90, 34));

       const student = {
        name: "salib khan", 
        age: 32,
        movies: ['king', 'khan']
    }

    const [firstMovie, secondMovie] = student.movies;//right-side: object


    //**  right side e array/variable/function/object thakle left side same type diye korte hobe.

2. Object destructuring :
        const {name, age} = {name: 'alu', age: 14};
        const {name, age} = {id: 12, name: 'alu',salary:34000, age: 14};


        const employee = {
            id: 1
            name: 'VS code',
            designation: 'developer,
            machine: "mac",
            language: ['html', 'css', 'js'];
            specification: {
                height: 66,
                weight: 67, 
                address: 'kumarkhali',
                drink: 'water'
                watch: {
                    color:'black',
                    price: 500,
                    brand: 'gramin'
                }
            }
        }

        const {id, machine} = employee;
        const {height, address} = employee.specification;
        const {brand} = employee.specification.watch;
        const [first, second, third] = employee.language;

        // optional chaining(?)-means, if specification exist then executed else not ....
        const {brand} = employee?.specification?.watch;
*/