Dijkstra's Algorithm:

- Extremely common in real-world
- Finds shortest path between two vertices on a graph
- requires WEIGHTED graph, with values for each edge

Applications:

- GPS
- Network Routing
- Biology and virus spread
- Airline Tickets: find cheapest route
- many more!

Approach:

- Every time we visit a new node, pick node with smallest known distance first
- Once we move there, look at each of the neighbors
- For each neighboring node, calculate distance by summing total edges that lead to the node FROM THE STARTING NODE
- If new total distance to node is less than previous total, we store the new shorter distance for that node
