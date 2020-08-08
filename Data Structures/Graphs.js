class Graph {
    constructor() {
        // this.nodes = [];
        this.edges = {};
    }
    addNode(node) {
        if(!this.edges[node]) {
            this.edges[node] = [];
        }
    }
    // use of below here:
    addBidirectionalEdge(n1, n2) {
        this.addEdge(n1, n2);
        this.addEdge(n2, n1);
    }
    // this one is limited
    addEdge(start, end) {
        this.edges[start].push(end);
    }
    getNeighbors(start) {
        return this.edges[start];
    }

}

const g = new Graph();
g.addNode("Washington");
g.addNode("Oregon");
g.addNode("Idaho");
g.addNode("Nevada");
g.addNode("California");

g.addBidirectionalEdge("Washington", "Oregon");
g.addBidirectionalEdge("Washington", "Idaho");
g.addBidirectionalEdge("Oregon", "Idaho");
g.addBidirectionalEdge("Oregon", "California");
g.addBidirectionalEdge("Oregon", "Nevada");
g.addBidirectionalEdge("California", "Nevada");

// console.log(g.getNeighbors("Washington"));
// console.log(g.getNeighbors("Oregon"));
// console.log(g.getNeighbors("Idaho"));
// console.log(g.getNeighbors("California"));
// console.log(g.getNeighbors("Nevada"));



// GRAPH TRAVERSAL:

// Breadth First Traversal:
function breadthFirstTraversal() {
    // pick a node to start with and add to queue: 
    let q = ["Washington"];
    // keep track of nodes we've visited:
    let visited = {}

    // dequeue one node at a time, 
    while (q.length > 0) {
        let node = q.shift();
        console.log(node);
        
        // mark it as visited,
        visited[node] = true;
        // get it's neighbors and add them to queue, 
        // only adding nodes that haven't been visited!
        for (let neighbor of g.getNeighbors(node)) {
            if(!visited[neighbor]) {
                q.push(neighbor);
                // mark it as visited here again to prevent from adding to queue twice
                visited[neighbor] = true;
            }
        }
    }
}
