Graphs:

Definition:

- A finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

Said Simple:

- Nodes + Connections
  - basic graphs don't have 'entry' points like special graphs like linked lists and trees

Special types of graphs:

- Linked lists
- Trees

Usage:

- Social Networks: Model huge networks of friends and all their connections. Also Wikipedia
- Location/Mapping: Cities/Locations are nodes, roads are the connections between them
- Recommendation Systems: Nodes as LABELS for e.g. movies. Movies with the same nodes/labels in common as something else will be recommended
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

Terminology:

- Vertex: a node
- Edge: connection between nodes

Types of Graphs:

- Tree: a graph with only ONE possible path to get from one node to another (without repeating vertices/edges)
- Undirected Graphs: there is no 'direction' associated with an edge. If A is connected to B, B is connected to A. 'Friends with'
- Directed Graphs: there is a direction assigned between vertices, through their edges. 'Follows'
- Weighted: Edges have VALUES associated with them. Length of a ROAD is a form of weighting
- Unweighted: Edges have no value associated with them
- Weighted vs. Unweighted and Directed vs. Undirected are INDEPENDENT dimensions

Storing a graph:

- Adjacency Matrix

  - Tables with nodes on X and Y axes. 1 if connection exists between those two nodes, 0 if not

- Adjacency List
  - Make a list (in an array or hash table). index or key corresponds to the value of node. arr[i] or hash[key] is an array containing the values of all the nodes that i points to

Time Complexity of Adjacency Matrix vs. Adjacency List:

Adjacency Matrix:

- must faster remove edge or run search query (O(1) vs O(v + e))

- Takes up more space (in sparse graphs)
- Slower to iterate over all edge
- Faster to lookup specific edge

Adjacency List:

- much faster to add vertex (O(1) vs O(v^2))

- can take up less space (in sparse graphs)
- faster to iterate over ALL edges
- slower to look up specific edges

In real world, data is SPARSE. Not that there aren't huge graphs, but that there are many many nodes with only few edges between them. Thus:
Adjacency List is often preferable!

You'll only use adjacency matrices in big robust networks with many many edges between vertices.
