function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

// let nodes = 4 ;
// let min_wt = 2 ;
// let max_wt = 11;
// let test = 3 ;

class WeightedTree {
    constructor(nodes) {
        this.nodes = nodes;
        this.adj = Array.from({length: nodes}, () => []);
    }
    addEdge(n, w) {
        this.adj[n].push(w);
    }
    descendants(node) {
        let visited = new Set([node]);
        for (let node of visited) {
            for (let elem of this.adj[node]) {
                if (!visited.has(elem)) visited.add(elem);
            }
        }
        return visited;
    }
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randwtgen(nodes,min_weight,max_weight) {
    let string = "";
    let t = new WeightedTree(nodes);
    let [root, ...children] = shuffle([...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do {
            a = num(1,0, nodes-1); // make zero based
            a=Number(a) ;
        } while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b,num(1,min_weight,max_weight)]);
    }
    string+=edges.join("\n").replace(/,/g,'        ');
    return string
}

function WTree(test, tree_nodes,wt_min_weight,wt_max_weight) {
    tree_nodes = Number(tree_nodes);
    wt_min_weight = Number(wt_min_weight);
    wt_max_weight = Number(wt_max_weight);
    var result = "";
    for(let i=0;i<test;i++){
        result += randwtgen(tree_nodes,wt_min_weight,wt_max_weight) + '\n\n' ;
    }
    
    return result;
}


function wtgen(){
    let result1 = "Parent  Child Weight\n\n" ;
    let test = parseInt(document.getElementById('test').value) ;
    let nodes = parseInt(document.getElementById('nodes').value) ;
    let min_wt = parseInt(document.getElementById('min_wt').value) ;
    let max_wt = parseInt(document.getElementById('max_wt').value) ;

    if(!min_wt)
        min_wt = 0 ;
    if(!max_wt)
        max_wt = 0 ;

    console.log(test,nodes,min_wt,max_wt) ;
    result1 += WTree(test,nodes,min_wt,max_wt) ;
    
    console.log(result1) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result1 ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Number of Nodes: " + nodes);
// console.log("Minimum Weight: " + min_wt);
// console.log("Maximum Weight: " + max_wt);
// console.log("Output: ");

// console.log(WTree(test, nodes, min_wt, max_wt)) ;

// module.exports = WTree ;