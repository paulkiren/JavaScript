//dijkstra solve graph starting at s
function solve(graph, s) {
    var solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;
    
    while(true) {
      var parent = null;
      var nearest = null;
      var dist = Infinity;
      
      //for each existing solution
      for(var n in solutions) {
        if(!solutions[n])
          continue
        var ndist = solutions[n].dist;
        var adj = graph[n];
        //for each of its adjacent nodes...
        for(var a in adj) {
          //without a solution already...
          if(solutions[a])
            continue;
          //choose nearest node with lowest *total* cost
          var d = adj[a] + ndist;
          if(d < dist) {
            //reference parent
            parent = solutions[n];
            nearest = a;
            dist = d;
          }
        }
      }
      
      //no more solutions
      if(dist === Infinity) {
          break;
      }
      
      //extend parent's solution path
      solutions[nearest] = parent.concat(nearest);
      //extend parent's cost
      solutions[nearest].dist = dist;
    }
    
    return solutions;
  }
  //create graph
  var graph = {};
  
  var layout = {
    'R': ['2'],
    '2': ['3','4'],
    '3': ['4','6','13'],
    '4': ['5','8'],
    '5': ['7','11'],
    '6': ['13','15'],
    '7': ['10'],
    '8': ['11','13'],
    '9': ['14'],
    '10': [],
    '11': ['12'],
    '12': [],
    '13': ['14'],
    '14': [],
    '15': []
  }
  
  //convert uni-directional to bi-directional graph
  // needs to look like: where: { a: { b: cost of a->b }
  // var graph = {
  //     a: {e:1, b:1, g:3},
  //     b: {a:1, c:1},
  //     c: {b:1, d:1},
  //     d: {c:1, e:1},
  //     e: {d:1, a:1},
  //     f: {g:1, h:1},
  //     g: {a:3, f:1},
  //     h: {f:1}
  // };
  
  for(var id in layout) {
    if(!graph[id])
      graph[id] = {};
    layout[id].forEach(function(aid) {
      graph[id][aid] =Math.floor( Math.random(9))+1;
      if(!graph[aid])
        graph[aid] = {};
      graph[aid][id] = 1;
    });
  }

  console.log(graph);
  
  //choose start node
  var start = '11';
  //get all solutions
  var solutions = solve(graph, start);
  
  console.log("From '"+start+"' to");
  //display solutions
  for(var s in solutions) {
    if(!solutions[s]) continue;
    console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
  }
  
  // From '10' to
  //  -> 2: [7, 5, 4, 2]   (dist:4)
  //  -> 3: [7, 5, 4, 3]   (dist:4)
  //  -> 4: [7, 5, 4]   (dist:3)
  //  -> 5: [7, 5]   (dist:2)
  //  -> 6: [7, 5, 4, 3, 6]   (dist:5)
  //  -> 7: [7]   (dist:1)
  //  -> 8: [7, 5, 4, 8]   (dist:4)
  //  -> 9: [7, 5, 4, 3, 13, 14, 9]   (dist:7)
  //  -> 10: []   (dist:0)
  //  -> 11: [7, 5, 11]   (dist:3)
  //  -> 12: [7, 5, 11, 12]   (dist:4)
  //  -> 13: [7, 5, 4, 3, 13]   (dist:5)
  //  -> 14: [7, 5, 4, 3, 13, 14]   (dist:6)
  //  -> 15: [7, 5, 4, 3, 6, 15]   (dist:6)
  //  -> R: [7, 5, 4, 2, R]   (dist:5)




















// // Example routes.csv:
// const routes = [['A', 'B', 5],
// ['B', 'C', 5],
// ['C', 'D', 7],
// ['A', 'D', 15],
// ['E', 'F', 5],
// ['F', 'G', 5],
// ['G', 'H', 10],
// ['H', 'I', 10],
// ['I', 'J', 5],
// ['G', 'J', 20]];





// class Graph {

// }




















// // const readline = require("readline");
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question("What is your name ? ", function(name) {
// //     rl.question("Where do you live ? ", function(country) {
// //         console.log(`${name}, is a citizen of ${country}`);
// //         rl.close();
// //     });
// // });

// // rl.on("close", function() {
// //     console.log("\nBYE BYE !!!");
// //     process.exit(0);
// // });


// // class Graph {
// //     constructor() {
// //         this.rootNode = null;

// //     }
// // }



// // function djikstraAlgorithm(startNode) {
// //     let distances = {};

// //     // Stores the reference to previous nodes
// //     let prev = {};
// //     let pq = new PriorityQueue(this.nodes.length * this.nodes.length);

// //     // Set distances to all nodes to be infinite except startNode
// //     distances[startNode] = 0;
// //     pq.enqueue(startNode, 0);
// //     this.nodes.forEach(node => {
// //         if (node !== startNode) distances[node] = Infinity;
// //         prev[node] = null;
// //     });

// //     while (!pq.isEmpty()) {
// //         let minNode = pq.dequeue();
// //         let currNode = minNode.data;
// //         let weight = minNode.priority;
// //         this.edges[currNode].forEach(neighbor => {
// //             let alt = distances[currNode] + neighbor.weight;
// //             if (alt < distances[neighbor.node]) {
// //                 distances[neighbor.node] = alt;
// //                 prev[neighbor.node] = currNode;
// //                 pq.enqueue(neighbor.node, distances[neighbor.node]);
// //             }
// //         });
// //     }
// //     return distances;
// // }


// // let g = new Graph();
// // g.addNode("A");
// // g.addNode("B");
// // g.addNode("C");
// // g.addNode("D");
// // g.addNode("E");
// // g.addNode("F");
// // g.addNode("G");

// // g.addDirectedEdge("A", "C", 100);
// // g.addDirectedEdge("A", "B", 3);
// // g.addDirectedEdge("A", "D", 4);
// // g.addDirectedEdge("D", "C", 3);
// // g.addDirectedEdge("D", "E", 8);
// // g.addDirectedEdge("E", "F", 10);
// // g.addDirectedEdge("B", "G", 9);
// // g.addDirectedEdge("E", "G", 50);

// // console.log(g.djikstraAlgorithm("A"));
// // The input .csv is simple: Each line includes:
// // ● A starting station name
// // ● An ending station name
// // ● The time it takes to get from the st



// // find the shortest path to a-c


