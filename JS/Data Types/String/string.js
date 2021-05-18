let size = 5;
let chars = 'rubtdyqlmn' ;
let test = 3 ;

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

// console.log(string(test,size,chars)) ;

module.exports = string ;