function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

// var edges = 6 ;
// var nodes = 4;
// var test = 2;

const randduggen=(nodes,edges)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = Number(num(1,1,nodes));
        var b = Number(num(1,1,nodes));
        var p = [a,b];
        while(container.has(`${p[0]},${p[1]}`)){
            var a = Number(num(1,1,nodes));
            var b = Number(num(1,1,nodes));
            var p = [a,b];
        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{string+=elem.replace(/,/g,'       ')+'\n'});
    return string;
};

function DUGraph(test,dug_nodes,dug_edges){
    dug_nodes = Number(dug_nodes);
    dug_edges = Number(dug_edges);
    var result = "";
    for(let i=0;i<test;i++){
        result+=randduggen(dug_nodes,dug_edges)+'\n\n';
    }
    
    return result;
};

let result1 = "Edge   Edge\nFrom   To\n" ;
function duggen(){
    let result1 = "Edge   Edge\nFrom   To\n" ;
    let test = parseInt(document.getElementById('test').value) ;
    let nodes = parseInt(document.getElementById('nodes').value) ;
    let edges = parseInt(document.getElementById('edges').value) ;

    console.log(test,nodes,edges) ;
    result1 += DUGraph(test,nodes,edges) ;
    
    console.log(result1) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result1 ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Number of Nodes: " + nodes);
// console.log("Number of Edges: " + edges);
// console.log("Output: ");

// console.log(DUGraph(test,nodes,edges));

// module.exports = DUGraph ;

