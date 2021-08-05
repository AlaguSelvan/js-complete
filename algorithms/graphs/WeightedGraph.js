class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(this.adjacencyList[vertex]) return;
		this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {

		const vertex1Node = {
			vertex1,
			weight
		}

		const vertex2Node = {
			vertex2,
			weight
		}

		if(!this.adjacencyList[vertex1]) return
		if(!this.adjacencyList[vertex2]) return

		this.adjacencyList[vertex1].push(vertex2Node)
		this.adjacencyList[vertex2].push(vertex1Node)

	}
}

const wg = new WeightedGraph();

wg.addVertex('a')
wg.addVertex('b')
wg.addVertex('c')
wg.addVertex('d')
wg.addVertex('e')

wg.addEdge('a', 'b', 2)
wg.addEdge('b', 'c', 4)

console.log(wg)
