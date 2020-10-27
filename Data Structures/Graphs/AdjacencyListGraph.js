//undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    getAdjacencyList() {
        return this.adjacencyList
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
}

const graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("Yokohama")
graph.addVertex("Osaka")
graph.addEdge("Tokyo","Yokohama")
graph.addEdge("Tokyo","Osaka")
console.log(graph.getAdjacencyList())