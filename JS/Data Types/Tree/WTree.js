var randnumgen = require('../Integer/num');

let nodes = 4 ;
let min_wt = 2 ;
let max_wt = 11;
let test = 3 ;

class Tree {
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
    let t = new Tree(nodes);
    let [root, ...children] = shuffle([...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do {
            a = randnumgen(1,0, nodes-1); // make zero based
            a=Number(a) ;
        } while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b,randnumgen(1,min_weight,max_weight)]);
    }
    string+=edges.join("\n").replace(/,/g,' ');
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

console.log("No. of Test Cases: " + test);
console.log("Number of Nodes: " + nodes);
console.log("Minimum Weight: " + min_wt);
console.log("Maximum Weight: " + max_wt);
console.log("Output: ");

console.log(WTree(test, nodes, min_wt, max_wt)) ;

module.exports = WTree ;