function getSumOfAnArray(numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}



function getOddNumbersOfAnArray(numbers) {
  const oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if(element %2 !== 0){
      console.log(i, element);
      oddNumbers.push(element);
    };
    

  }
  return oddNumbers;
}

const myNumbers =[12, 65, 45, 78, 32, 45, 91];
const oddNumbersArray = getOddNumbersOfAnArray(myNumbers);
console.log('oddNumbersArray: ', oddNumbersArray);
// getSumOfAnArray(myNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbersArray);
console.log('oddNumberSum: ', oddNumberSum);



