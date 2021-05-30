// var test = 2;
// let dim = '3,3' ;
// let min = 3 ;
// let max = 7 ;

const randarrgen=(dim,min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    var string = "";
    const row = dim[0], col = dim[1];
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            const num = Math.floor(Math.random()*(max - min + 1))+min
            string+=num+' ';
        }
        string+='\n';
    }
    return string;
}

function array(test,dim,min,max){
    min = Number(min);
    max = Number(max);
    dim = dim.split(",");
    var result = "";
    for(let i=0;i<test;i++){
        result+=randarrgen(dim,min,max)+'\n';
    }
    return result;
}

let result ;
function arrgen(){
    let test = parseInt(document.getElementById('test').value) ;
    let dim = document.getElementById('dim').value ;
    let min = parseInt(document.getElementById('min').value) ;
    let max = parseInt(document.getElementById('max').value) ;
    console.log(test,dim,min,max) ;
    result = array(test,dim,min,max) ;
    
    console.log(result) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Dimensions of Array: " + dim)
// console.log("Minimum Value: " + min);
// console.log("Maximum Value: " + max);
// console.log("Output: ");

// console.log(array(test,dim,min,max)) ;

// module.exports = array ;