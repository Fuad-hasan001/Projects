/**
 * 1. if ticket numbers is less than 100, per ticket price: 100
 * 1. if ticket numbers is more than 200, 1st 100 tickets will be 100/ticket and rest ticket will be 90 tk per piece
 * 3. if you purchase more than 200 tickets
 *  first 100 -----> 100tk
 * 101-200 -------90 TK
 * 200 ---------->78tk 
 */

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTitcketPrice = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate; 
        return price; 
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100*first100Rate;
        
    }
}
const price = ticketPrice(20);
console.log(price);