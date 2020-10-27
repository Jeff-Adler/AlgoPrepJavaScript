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

    DFSRecursive(vertex) {
        let results = []
        let visited = {}
        const adjacencyList = this.adjacencyList

        function DFS(vertex) {
            if (!vertex) return
            visited[vertex] = true
            results.push(vertex)
            for (let i = 0 ; i < adjacencyList[vertex].length ; i++) {
                if (!visited[adjacencyList[vertex][i]]) DFS(adjacencyList[vertex][i])
            }
        }

        DFS(vertex)
        return results
    }

    DFSIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

}

const graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("Yokohama")
graph.addVertex("Osaka")
graph.addVertex("Sapporo")
graph.addVertex("Kyoto")
graph.addVertex("Fukuoka")
graph.addEdge("Tokyo","Yokohama")
graph.addEdge("Tokyo","Osaka")
graph.addEdge("Tokyo","Sapporo")
graph.addEdge("Tokyo","Kyoto")
graph.addEdge("Tokyo","Fukuoka")
graph.addEdge("Osaka","Kyoto")
graph.addEdge("Osaka","Fukuoka")
graph.addEdge("Osaka","Sapporo")
graph.addEdge("Osaka","Yokohama")
graph.addEdge("Fukuoka","Yokohama")
console.log(graph.getAdjacencyList())
console.log(graph.DFSRecursive("Tokyo"))
console.log(graph.DFSIterative("Tokyo"))


const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.getAdjacencyList())
console.log(g.DFSRecursive("A"))
console.log(g.DFSIterative("A"))