let min = 4 ;
let max = 9 ;
let test = 3 ;


function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

module.exports = num ;

// console.log("No. of Test Cases: " + test);
// console.log("Minimum Value: " + min);
// console.log("Maximum Value: " + max);
// console.log("Output: ");

// console.log(num(test,min,max)) ;