const arr = [60, 40, 86, 23, 76, 91, 16, 100, 96]


let max = arr[0]
let sMax = arr[1]


for (let i = 2; i < arr.length; i++) {

    if (arr[i] > max) {
        sMax = max;
        max = arr[i]
    } else if (arr[i] > sMax) {
        sMax = arr[i]
    }

};


console.log(max)
console.log(sMax)



// find second min value  

const arr1 = [60, 40, 86, 23, 76, 91, 16, 100, 96]

let min = arr[0]
let sMin = arr[1]


for (let i = 2; i < arr1.length; i++) {

    if (arr1[i] < min) {
        sMin = min;
        min = arr1[i]
    } else if (arr1[i] < sMin) {
        sMin = arr1[i]
    }

};


console.log(min)
console.log(sMin)