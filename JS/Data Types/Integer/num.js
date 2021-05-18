let min = 3 ;
let max = 10 ;
let test = 4 ;


function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

module.exports = num ;

//console.log(num(test,min,max)) ;