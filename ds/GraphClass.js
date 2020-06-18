class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {}
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }
    addEdge(node1, node2, weight) {
        // console.log('node1 ', node1, 'node2 >>> ', node2, "Weight", weight);

        if (this.nodes.indexOf(node1) === -1) this.addNode(node1);
        if (this.nodes.indexOf(node2) === -1) this.addNode(node2);
        this.adjacencyList[node1].push({ node: node2, weight: parseInt(weight, 10) });
        this.adjacencyList[node2].push({ node: node1, weight: parseInt(weight, 10) });
    }


    findPathWithDijkstra(startNode, endNode) {
        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();
        times[startNode] = 0;

        this.nodes.forEach(node => {
            if (node !== startNode) {
                times[node] = Infinity
            }
        });

        pq.enqueue([startNode, 0]);
        console.log(startNode, endNode);

        while (!pq.isEmpty()) {
            let shortestStep = pq.dequeue();
            let currentNode = shortestStep[0];
            this.adjacencyList[currentNode].forEach(neighbor => {
                let time = times[currentNode] + neighbor.weight;
                if (time < times[neighbor.node]) {
                    times[neighbor.node] = time;
                    backtrace[neighbor.node] = currentNode;
                    pq.enqueue([neighbor.node, time]);
                }
            });
        }



        let path = [endNode];
        let lastStep = endNode;
        console.log("Out from Loop", path, lastStep, backtrace, Object.values(backtrace).indexOf(startNode), startNode);
        ;
        let valuesRet = [...Object.values(backtrace), ...Object.keys(backtrace)];
        // console.log(valuesRet, valuesRet.indexOf(endNode));
        if (valuesRet.indexOf(endNode) === -1) {
            return `No routes from ${startNode} to ${endNode} `;
        }

        while (lastStep !== startNode) {
            path.unshift(backtrace[lastStep])
            lastStep = backtrace[lastStep]
            // console.log(path.length, "<<< >>> ", Object.keys(backtrace));

            // console.log("in loop ", path, lastStep);
        }
        console.log(path, JSON.stringify(times));
        let retString = `Your Trip from ${startNode} to ${endNode} includes ${path.length - 2} stops and will take ${times[endNode]} minutes`

        // console.log('')
        return retString;
        // `Path is ${path} and time is ${times[endNode]}`
    }
}

class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 1; i <= this.collection.length; i++) {
                if (element[1] < this.collection[i - 1][1]) {
                    this.collection.splice(i - 1, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    };
    dequeue() {
        let value = this.collection.shift();
        return value;
    };
    isEmpty() {
        return (this.collection.length === 0)
    };

}



let map = new Graph();

let csvData = ['A,B,5',
    'B,C,5',
    'C,D,7',
    'A,D,15',
    'E,F,5',
    'F,G,5',
    'G,H,10',
    'H,I,10',
    'I,J,5',
    'G,J,20']
// The input.csv is simple: Each li


csvData.forEach(edgeData => {

    let edgesArray = edgeData.split(',');
    map.addEdge(...edgesArray);

});

// console.log(JSON.stringify(map));

console.log(map.findPathWithDijkstra('E', 'J'));

console.log(map.findPathWithDijkstra('A', 'B'));

console.log(map.findPathWithDijkstra('A', 'J'));

console.log(map.findPathWithDijkstra('D', 'J'));

console.log(map.findPathWithDijkstra('F', 'J'));