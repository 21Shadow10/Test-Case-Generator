function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

// let nodes = 4;
// let edges = 7;
// let test = 2 ;

const randuuggen=(nodes,edges)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = Number(num(1,1,nodes));
        var b = Number(num(1,1,nodes));
        var p = [a,b];
        var rev_p = [b,a];

        while(container.has(`${p[0]},${p[1]}`) || container.has(`${rev_p[0]},${rev_p[1]}`)){
            var a = num(1,1,nodes);
            var b = num(1,1,nodes);
            a=Number(a);
            b=Number(b);
            var p = [a,b];
            var rev_p = [b,a];
            //console.log(p,rev_p) ;
        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{string+=elem.replace(/,/g,'       ')+'\n'});
    return string;
}

function UUGraph(test, uug_nodes,uug_edges){
    uug_nodes=Number(uug_nodes);
    uug_edges=Number(uug_edges);
    var result = "";
    for(let i=0;i<test;i++){
        result+=randuuggen(uug_nodes,uug_edges)+'\n\n';
    }
    
    return result;
}


function uuggen(){
    let result = "Edge   Edge\nFrom   To\n" ;
    let test = parseInt(document.getElementById('test').value) ;
    let nodes = parseInt(document.getElementById('nodes').value) ;
    let edges = parseInt(document.getElementById('edges').value) ;

    console.log(test,nodes,edges) ;
    result += UUGraph(test,nodes,edges) ;
    
    console.log(result) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Number of Nodes: " + nodes);
// console.log("Number of Edges: " + edges);
// console.log("Output: ");

// console.log(UUGraph(test,nodes,edges));

// module.exports = UUGraph ;