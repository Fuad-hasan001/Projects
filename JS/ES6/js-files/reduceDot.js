// map, forEach, filter, find, 
// reduce
// operation -> on function -> return one value
// .reduce (accumulator Function(previous, current), initial value)
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0)


