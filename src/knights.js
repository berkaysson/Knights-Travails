const KNIGHT_OFFSETS = [
  // Array of potential knight moves
  [1, 2], // Right-Up
  [1, -2], // Right-Down
  [2, 1], // Up-Right
  [2, -1], // Down-Right
  [-1, 2], // Left-Up
  [-1, -2], // Left-Down
  [-2, 1], // Up-Left
  [-2, -1], // Down-Left
];

const CHESS_SIZE = 8;

class ChessSquare {
  constructor(x, y, distance = 0) {
    this.xPos = x;
    this.yPos = y;
    this.distance = distance; // Distance from the start, plus one for every move
    this.edges = this.getEdges();
  }

  getEdges() {
    // Retrieves all potential edges
    const edges = [];

    for (let move of KNIGHT_OFFSETS) {
      const newX = this.xPos + move[0];
      const newY = this.yPos + move[1];

      if (0 <= newX && newX < CHESS_SIZE && 0 <= newY && newY < CHESS_SIZE) {
        // Checks if the edge is within the board
        edges.push([newX, newY, this.distance + 1]);
      }
    }
    return edges;
  }

  getPosition() {
    // Retrieves the position as a string
    return `${this.xPos}, ${this.yPos}`;
  }
}

function knightsMoves(start, end) {
  // Main function, start and end is array with two number
  const origin = new ChessSquare(start[0], start[1]);
  const target = new ChessSquare(end[0], end[1], ...end);

  let que = []; // Queue to make moves respectively
  que.push(origin);

  const visited = new Set(); // Used to check if the square is visited
  const path = [];
  let pathStr = ``;
  while (que.length > 0) {
    const currentSquare = que.shift();

    visited.add(currentSquare.getPosition());
    path.push(currentSquare);

    for (const move of path) {
      for (const edge of move.edges) {
        if (edge[0] === target.xPos && edge[1] === target.yPos) {
          let predecessor = path.at(-1);
          pathStr += `${predecessor.getPosition()}`;
          if (
            target.distance === 1 ||
            currentSquare.getPosition() === origin.getPosition()
          )
            // Base condition for recursion
            return path[0].getPosition();
          return `${knightsMoves(start, [
            predecessor.xPos,
            predecessor.yPos,
            predecessor.distance,
          ])} -> ${pathStr}`; // Recursion until it reaches the start point or the first move
        }
      }
    }

    for (const edge of currentSquare.getEdges()) {
      // Checks if the edge is visited, if not adds it to the queue
      const edgeSquare = new ChessSquare(...edge);
      if (!visited.has(edgeSquare.getPosition())) {
        que.push(edgeSquare);
      }
    }
  }
}

export default knightsMoves;
