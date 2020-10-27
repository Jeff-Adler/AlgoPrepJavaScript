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
    removeEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2 )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1 )
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
           this.removeEdge(vertex, this.adjacencyList[vertex][0])
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("Yokohama")
graph.addVertex("Osaka")
graph.addEdge("Tokyo","Yokohama")
graph.addEdge("Tokyo","Osaka")
// graph.removeVertex("Tokyo")
console.log(graph.getAdjacencyList())