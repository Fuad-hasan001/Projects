function isLeapYear(year) {
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Year is leap year', year);
        return true;
    }
    else{
        // console.log('Year is not leap year', year);
        return false;
    }
}

const myLeapYear = isLeapYear(1933);
console.log(myLeapYear);

const myLeapYear2 = isLeapYear(1960);
console.log(myLeapYear2);