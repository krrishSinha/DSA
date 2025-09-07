const arr = [10,20,30,40,50];

let j = arr.length - 1

for (let i = 0; i != j; i++ ){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
    j--
};

console.log(arr)