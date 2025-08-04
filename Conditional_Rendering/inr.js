// calculate the notes with the desired amount 

let amount = 4893

if(amount >= 500){
    console.log( `500 notes : ${  Math.floor(amount/500) }` );
    amount = amount%500;
    console.log(`balace ${amount}`);
}
if(amount >= 200){
    console.log( `200 notes : ${  Math.floor(amount/200) }` );
    amount = amount%200;
    console.log(`balace ${amount}`);

}
if(amount >= 100){
    console.log( `100 notes : ${  Math.floor(amount/100) }` );
    amount = amount%100;
    console.log(`balace ${amount}`);

}
if(amount >= 50){
    console.log( `50 notes : ${  Math.floor(amount/50) }` );
    amount = amount%50;
    console.log(`balace ${amount}`);

}
if(amount >= 20){
    console.log( `20 notes : ${  Math.floor(amount/20) }` );
    amount = amount%20;
    console.log(`balace ${amount}`);

}
if(amount >= 10){
    console.log( `10 notes : ${  Math.floor(amount/10) }` );
    amount = amount%10;
    console.log(`balace ${amount}`);

}
if(amount >= 5){
    console.log( `5 notes : ${  Math.floor(amount/5) }` );
    amount = amount%5;
    console.log(`balace ${amount}`);

}
if(amount >= 2){
    console.log( `2 notes : ${  Math.floor(amount/2) }` );
    amount = amount%2;
    console.log(`balace ${amount}`);

}
if(amount >= 1){
    console.log( `1 notes : ${  Math.floor(amount/1) }` );
    amount = amount%1;
    console.log(`balace ${amount}`);

}