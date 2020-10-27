Graph Traversal:

- Visiting/Updating/Checking EVERY vertex in a graph

Usage:

- Peer to peer networking
- Web crawlers
- Finding "closest" matches/recommendations
- Shortest path problems
  - GPS navigation
  - Solving mazes
  - AI (shortest path to win a game)

Traversal Types:

- DFS: keep following down a path of neighbors (maybe continually visit the neighbor with lowest value for all neighbors with higher vale), before backtracking (because e.g. the lowest value would be lower than the neighbor you're at)
- BFS: visit all neighbors of a vertex before moving on to other vertices

DFS:

- Traverse neighbors according to some value.
- Keep track of which vertices have been visited, so as not to revisit them!
- Backtrack once no neighbors left to visit
