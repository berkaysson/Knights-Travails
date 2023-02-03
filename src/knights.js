const KNIGHT_OFFSETS = [  // potential knight moves
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

class ChessSquare {
  constructor(x, y, distance = 0) {
    this.xPos = x;
    this.yPos = y;
    this.distance = distance; // distance from start
    this.edges = this.getEdges();
  }

  getEdges() {  // gets all potential edges
    const edges = [];

    for (let move of KNIGHT_OFFSETS) {
      const newX = this.xPos + move[0];
      const newY = this.yPos + move[1];

      if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) { // checks if edge is in the board
        edges.push([newX, newY, this.distance + 1]);
      }
    }
    return edges;
  }

  getPosition() { // gets position as string
    return `${this.xPos}, ${this.yPos}`;
  }
}

function knightsMoves(start, end) { // main function
  const origin = new ChessSquare(start[0], start[1]);
  const target = new ChessSquare(end[0], end[1], ...end);

  let que = []; // queue to make moves respectively
  que.push(origin);

  const visited = new Set();  // to check if the square visited
  const path = [];
  let pathStr = ``;
  while (que.length > 0) {
    const currentSquare = que.shift()

    visited.add(currentSquare.getPosition());
    path.push(currentSquare);

    for (const move of path) {
      for (const edge of move.edges) {
        if (edge[0] === target.xPos && edge[1] === target.yPos) {
          let predecessor = path.at(-1);
          pathStr += `${predecessor.getPosition()}`;
          if (target.distance === 1 ||currentSquare.getPosition() === origin.getPosition()) // base condition for recursion
            return path[0].getPosition();
          return `${knightsMoves(start, [
            predecessor.xPos,
            predecessor.yPos,
            predecessor.distance,
          ])} -> ${pathStr}`; // recursion until it reaches start point or first move
        }
      }
    }

    for (const edge of currentSquare.getEdges()) {  // checks if edge is visited, if not adds it to queue
      const edgeSquare = new ChessSquare(...edge);
      if (!visited.has(edgeSquare.getPosition())) {
        que.push(edgeSquare);
      }
    }
  }
}

export default knightsMoves;