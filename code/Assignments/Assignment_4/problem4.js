// Problem 4: Finding Bad data
function findingBadData(number) {


    for (let check = 0; check < number.length; check++) {
        const value = number[check];

        if (typeof (value) === 'number') {

            countBadData = [];
            for (let i = 0; i < number.length; i++) {
                let element = number[i];
                // console.log('element: ', element);

                if (element < 0) {
                    countBadData.push(element);
                }
            }
            return countBadData.length;
        }
        else {
            return 'Enter a valid number of Array'
        }
    }

}
let arrayOfNumber = [1,2,5];
const result_4 = findingBadData(arrayOfNumber);
console.log(result_4);

// --------------------------------------------------------------------