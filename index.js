// take a chess board coordinate for start and a goal coordinate for end, generate the shortest path with BFS
function knightMoves(start, end) {
  // queue to store the moves step by step, visited Set to keep the list of visited nodes, nodeParents to keep the parent nodes of next nodes
  const queue = [];
  const visited = new Set();
  const nodeParents = {};
  // all possible moves a knight can make in a board
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
  // start position is counted as first move
  queue.push(start);

  // loop to run until all possible moves are done until reaching the goal node
  while (queue.length > 0) {
    const current = queue.shift(); // Initiate by the giving it the start node, update after every viable move

    moveSet.forEach((move) => {
      const row = current.row + move.row; // update the coordinates for every move
      const col = current.col + move.col;
      // check if the move is within board and NOT visited
      if (
        row >= 0 &&
        row <= 7 &&
        col >= 0 &&
        col <= 7 &&
        !visited.has(`${row},${col}`)
      ) {
        // if meets the requirements create a temp node, add to queue and visited set, keep the original node as the parent node
        const temp = { row, col };
        queue.push(temp);
        visited.add(`${row},${col}`);
        nodeParents[`${row},${col}`] = current;
      }
    });

    if (current.row === end.row && current.col === end.col) {
      // if current is reached create a path array to store steps
      const path = [];
      let node = end; // reverse the process by creating a temp node that starts from end and returns to start by looping through parent nodes of the node
      while (node.row !== start.row || node.col !== start.col) {
        path.unshift(node); // unshift because its a reversed set of steps.
        node = nodeParents[`${node.row},${node.col}`]; // receive all the parents of the node
      }
      path.unshift(start); // finally unshift the starting point wehn all the
      // print the step process
      console.log(`It took ${path.length - 1} steps. Here's your path:`);

      path.forEach((visit) => {
        console.log(`(${visit.row},${visit.col})`);
      });
    }
  }
}

// test cases
const start = { row: 0, col: 0 };
const end = { row: 7, col: 7 };
knightMoves(start, end);

// const start = { row: 1, col: 2 };
// const end  = { row: 5, col: 4 };
// knightMoves(start, end);

// const start = { row: 0, col: 7 };
// const end  = { row: 5, col: 4 };
// knightMoves(start, end);
