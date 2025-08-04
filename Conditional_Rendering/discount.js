// calculate the payable amount after discount 

// amount          discount
// 0 - 5000         0%
// 5001 - 7000      5%
// 7001 - 9000     10%
// above 9000      20%   


let amount = 10000;

const amountPayableAfterDiscount = (discountPercentage) => {
    const discountedValue = Math.floor((discountPercentage * amount) / 100)
    const finalAmount = amount - discountedValue
    console.log(finalAmount);
}

if (amount <= 5000) {
    amountPayableAfterDiscount(0)
}
else if (amount > 5000 && amount <= 7000) {
    amountPayableAfterDiscount(5)
}
else if (amount > 7000 && amount <= 9000) {
    amountPayableAfterDiscount(10)
}
else if (amount > 9000) {
    amountPayableAfterDiscount(20)

}