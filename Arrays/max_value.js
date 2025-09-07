
const arr = [51,65,60,25,116,52,60,88,223,820]

let max = arr[0];

for(let i = 1; i<arr.length; i++){

    if( arr[i] > max  ){
        max = arr[i]
    }

};

console.log(max)