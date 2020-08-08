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

console.log(g.getNeighbors("Washington"));
console.log(g.getNeighbors("Oregon"));
console.log(g.getNeighbors("Idaho"));
console.log(g.getNeighbors("California"));
console.log(g.getNeighbors("Nevada"));


