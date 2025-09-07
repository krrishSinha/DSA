
// all zero to left side 
const arr = [0, 1, 1, 0, 1, 0, 0]

let j = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] == 0){
        let temp = arr[i];
        arr[j] = arr[i];
        arr[i] = temp;
        j++
    }

};

console.log(arr)
