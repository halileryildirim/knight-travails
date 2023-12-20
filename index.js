class Queue {
  constructor() {
    this.nodes = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(node) {
    this.nodes[this.tail] = node;
    this.tail += 1;
  }

  dequeue() {
    const item = this.nodes[this.head];
    delete this.nodes[this.head];
    this.head += 1;
    return item;
  }

  peek() {
    return this.nodes[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

function knightMoves(start, end) {
  const queue = new Queue();
  const visited = new Set();

  const moveSet = [
    { row: -2, col: -1 },
    { row: -2, col: 1 },
    { row: -1, col: -2 },
    { row: -1, col: 2 },
    { row: 1, col: -2 },
    { row: 1, col: 2 },
    { row: 2, col: -1 },
    { row: 2, col: 1 },
  ];

  while (start !== end) {
    queue.enqueue(start);
    if (start !== end)
      for (const move in moveSet) {
        const row = moveSet[move].row + start.row;
        const col = moveSet[move].col + start.col;
        const node = { row, col };
        if (node !== start && node === end) {
          queue.enqueue(node);
          const oldNode = queue.dequeue();
          visited.add(oldNode);
          return;
        }
        if (node.col < 7 && node.col >= 0 && node.row >= 0 && node.row < 7) {
          queue.enqueue(node);
          const oldNode = queue.dequeue();
          visited.add(oldNode);
        }
      }
  }
  const visitArray = Array.from(visited);
  for (const i in visitArray) {
    console.log(visitArray[i]);
  }
}

const start = { row: 0, col: 0 };
const end = { row: 1, col: 2 };
knightMoves(start, end);
