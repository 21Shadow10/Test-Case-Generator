function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

// let nodes = 5 ;
// let edges = 8 ;
// let min_wt = 5 ;
// let max_wt = 9 ;
// let test = 1 ;

const randdwggen=(nodes,edges,min_weight,max_weight)=>{

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

    container.forEach((elem)=>{string+=elem.replace(/,/g,'       ')+"       "+Number(num(1,min_weight,max_weight))+'\n'});
    return string;
};

function DWGraph(test,dwg_nodes,dwg_edges,dwg_min_weight,dwg_max_weight){
    dwg_nodes = Number(dwg_nodes);
    dwg_edges = Number(dwg_edges);
    dwg_min_weight = Number(dwg_min_weight);
    dwg_max_weight = Number(dwg_max_weight);
    var result = "";
    for(let i=0;i<test;i++){
        result+=randdwggen(dwg_nodes,dwg_edges,dwg_min_weight,dwg_max_weight)+'\n\n';
    }
    
    return result;
}


function dwggen(){
    let result2 = "Edge   Edge  Weight\nFrom   To\n" ;
    let test = parseInt(document.getElementById('test').value) ;
    let nodes = parseInt(document.getElementById('nodes').value) ;
    let edges = parseInt(document.getElementById('edges').value) ;
    let min_wt = parseInt(document.getElementById('min_wt').value) ;
    let max_wt = parseInt(document.getElementById('max_wt').value) ;

    if(!min_wt)
        min_wt = 0 ;
    if(!max_wt)
        max_wt = 0 ;

    console.log(test,nodes,edges,min_wt,max_wt) ;
    result2 += DWGraph(test,nodes,edges,min_wt,max_wt) ;
    
    console.log(result2) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result2 ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Number of Nodes: " + nodes);
// console.log("Number of Edges: " + edges);
// console.log("Minimum Weight: " + min_wt);
// console.log("Maximum Weight: " + max_wt);
// console.log("Output: ");


// console.log(DWGraph(test,nodes,edges,min_wt,max_wt));

// module.exports = DWGraph ;