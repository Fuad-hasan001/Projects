// Problem 5: Convert your gems into diamond 
function gemsToDiamond(friend_1GemsNumber, friend_2GemsNumber, friend_3GemsNumber) {

    if (friend_1GemsNumber >= 0 && friend_2GemsNumber >= 0 && friend_3GemsNumber >= 0) {
        let friend_1GemsPower = 21;
        let friend_2GemsPower = 32;
        let friend_3GemsPower = 43;

        let friend_1Diamond = friend_1GemsPower * friend_1GemsNumber;

        let friend_2Diamond = friend_2GemsPower * friend_2GemsNumber;

        let friend_3Diamond = friend_3GemsPower * friend_3GemsNumber;

        let totalDiamond = friend_1Diamond + friend_2Diamond + friend_3Diamond;


        if (totalDiamond >= 1000 * 2) {
            totalDiamond = totalDiamond - 2000;
            return totalDiamond;
        }
        else {
            return totalDiamond;
        }
    }

    else {
        return 'Enter a valid numbers';
    }

}

const result_5 = gemsToDiamond(100, 5, 1);
console.log(result_5);
// ----------------------------------------------------------------_