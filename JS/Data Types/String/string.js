// let size = 5;
// let chars = 'rubtdyqlmn' ;
// let test = 3 ;

const randstrgen=(size,chars)=>{
    var string = "";
    for(var i=0;i<size;i++){
        string+=chars[Math.round(Math.random() * (chars.length - 1))];
    } 
    return string;
}

function string(test, size, chars){
    chars = chars===''? "qwertyuioplkjhgfdsazxcvbnm" : chars;
    var result="";
    for(let i=0;i<test;i++) {
        result+=randstrgen(size,chars)+'\n';
    }
    return result;
};

let result ;
function strgen(){
    let test = parseInt(document.getElementById('test').value) ;
    let size = parseInt(document.getElementById('size').value) ;
    let chars = document.getElementById('chars').value ;
    console.log(test,size,chars) ;
    result = string(test,size,chars) ;
    
    console.log(result) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Size of Output String: " + size);
// console.log("Characters included in Output String: " + chars);
// console.log("Output: ");

// console.log(string(test,size,chars)) ;

// module.exports = string ;