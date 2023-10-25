// two ways we can remove duplicate item from an array
// 1. is : start from first-one and check and remove duplicate-items
// 2. is: creates new-array and check new-array contain the items or not . If new-array has not contained that item add the item otherwise ignore it.

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul' ];

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name);

        if(unique.includes(name) == false){
            unique.push(name);
        }        
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

