// let min = 4 ;
// let max = 9 ;
// let test = 3 ;


function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

let result ;
function intgen(){
    let test = parseInt(document.getElementById('test').value) ;
    let min = parseInt(document.getElementById('min').value) ;
    let max = parseInt(document.getElementById('max').value) ;
    console.log(test,min,max) ;
    result = num(test,min,max) ;
    
    console.log(result) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result ;
}


module.exports = num ;

// console.log("No. of Test Cases: " + test);
// console.log("Minimum Value: " + min);
// console.log("Maximum Value: " + max);
// console.log("Output: ");

// console.log(num(test,min,max)) ;