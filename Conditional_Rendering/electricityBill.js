// calculate electricty bill as per unit price




// unit            price
// 0 - 100          4
// 100 - 200        6
// 200 - 400        8
// above 400        13

let unit = 300;
let amount = 0;

if(unit>400){
    amount = (unit-400) * 13
    unit = 400
}
if(unit>200 && unit<=400){
    amount += (unit-200) * 8
    unit = 200
}
if(unit>100 && unit<=200){
    amount += (unit-100) * 6
    unit = 100
}
amount += unit * 4 

console.log(amount);
