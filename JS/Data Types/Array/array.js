var test = 3;
let dim = '3,3' ;
let min = 2 ;
let max = 4 ;

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

//console.log(array(test,dim,min,max)) ;

module.exports = array ;