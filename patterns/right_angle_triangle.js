var prompt = require('prompt-sync')();
var n = 5

// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i<=n; i++){

    for(let j = 1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();
}

console.log();


n = 5;

// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i <= n; i++) {

    for (let j = n; j >= i; j--) {
        process.stdout.write('* ')
    }
    console.log();
    
}

n = 5;

//         * 
//       * *
//     * * *
//   * * * *
// * * * * *

for (let i = 1; i <= n; i++) {

    for( let j = n-1; j>=i; j-- ){
        process.stdout.write('  ')
    }

    for(let j = 1; j<=i; j++ ){
        process.stdout.write('* ')
    }
    console.log();
    
}



// *        *
//   *    *
//     * 
//   *    *
// *        *