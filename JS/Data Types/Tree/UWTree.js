function num(test,min,max) {
    let result = '';
    for(let i=0;i<test;i++){
        result += Math.floor(Math.random() * (max - min + 1)) + min + '\n' ;
    }
    return result ;
}

// let nodes = 6;
// let test = 3 ;

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

function randtreegen(nodes) {
    let string = "";
    let t = new Tree(nodes);
    let [root, ...children] = shuffle([...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do {
            a = num(1,0, nodes-1); // make zero based
            a = Number(a) ;
        } while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b]);
    }
    string+=edges.join('\n').replace(/,/g,'        ');
    return string
}

function UWTree(test, tree_nodes) {
    tree_nodes = Number(tree_nodes);
    var result = "";
    for(let i=0;i<test;i++){
        result += randtreegen(tree_nodes) + '\n\n';
    }
        
    return result;
}


function uwtgen(){
    let result = "Parent  Child\n\n" ;
    let test = parseInt(document.getElementById('test').value) ;
    let nodes = parseInt(document.getElementById('nodes').value) ;
    console.log(test,nodes) ;
    result += UWTree(test,nodes) ;
    
    console.log(result) ;
    var txtar = document.getElementById('res') ;
    txtar.value = result ;
}

// console.log("No. of Test Cases: " + test);
// console.log("Number of Nodes: " + nodes);
// console.log("Output: ");

// console.log(UWTree(test,nodes));

// module.exports = UWTree ;