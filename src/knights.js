const KNIGHT_OFFSETS = [
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
  constructor(x, y, distance) {
    this.xPos = x;
    this.yPos = y;
    this.distance = distance;
  }

  getEdges() {
    const edges = [];

    for(let move of KNIGHT_OFFSETS){
      const newX = this.xPos + move[0];
      const newY = this.yPos + move[1];

      if(0 <= newX && newX < 8 && 0 <= newY && newY < 8){
        edges.push([newX, newY, this.distance]);
      }
    }
    return edges;
  }

  getPosition(){
    return `${this.xPos}, ${this.yPos}`
  }
}

function knightsMoves(start, end) {
  const origin = new ChessSquare(start[0], start[1]);
  const target = new ChessSquare(end[0], end[1]);
  let que = [];

  que.push([origin.xPos, origin.yPos]);

  const visited = new Set();

  while(que.length > 0) {
    const deque = que.shift()
    const currentSquare = new ChessSquare(deque[0], deque[1], deque[2])

    visited.add(currentSquare.getPosition());
    if(currentSquare.xPos === target.xPos &&  currentSquare.yPos === target.yPos) return  visited;

    for(const edge of currentSquare.getEdges()){
      const edgeSquare = new ChessSquare(edge[0], edge[1], edge[2] + 1);
      if(!visited.has(edgeSquare.getPosition())) {
        que.push(edge);
      }
    }
  }
}

export default knightsMoves