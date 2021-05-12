var randnumgen = require('../Integer/num');

var edges = 6 ;
var nodes = 4;
var test = 2 ;

const randduggen=(nodes,edges)=>{

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

    container.forEach((elem)=>{string+=elem.replace(/,/g,' ')+'\n'});
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

// console.log(DUGraph(test,nodes,edges));

module.exports = DUGraph ;

