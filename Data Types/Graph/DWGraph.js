var randnumgen = require('../Integer/num');

let nodes = 4 ;
let edges = 6 ;
let min_wt = 2 ;
let max_wt = 8 ;
let test = 2 ;

const randdwggen=(nodes,edges,min_weight,max_weight)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = Number(randnumgen(1,1,nodes));
        var b = Number(randnumgen(1,1,nodes));
        var p = [a,b];
        while(container.has(`${p[0]},${p[1]}`)){
            var a = Number(randnumgen(1,1,nodes));
            var b = Number(randnumgen(1,1,nodes));
            var p = [a,b];

        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{string+=elem.replace(/,/g,' ')+" "+Number(randnumgen(1,min_weight,max_weight))+'\n'});
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

// console.log(DWGraph(test,nodes,edges,min_wt,max_wt));

module.exports = DWGraph ;