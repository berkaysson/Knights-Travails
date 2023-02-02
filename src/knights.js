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
  constructor(x, y, distance = 0) {
    this.xPos = x;
    this.yPos = y;
    this.distance = distance;
    this.edges = this.getEdges();
  }

  getEdges() {
    const edges = [];

    for(let move of KNIGHT_OFFSETS){
      const newX = this.xPos + move[0];
      const newY = this.yPos + move[1];

      if(0 <= newX && newX < 8 && 0 <= newY && newY < 8){
        edges.push([newX, newY, this.distance + 1]);
        // edges.push(new ChessSquare(newX, newY, this.distance + 1)) // path can be found by edges but it gives infinite loop
      }
    }
    return edges;
  }

  getPosition(){
    return `${this.xPos}, ${this.yPos}`
  }
}

function knightsMoves(start, end) { // check if it is neccessary to recreate ChessSquare objects
  const origin = new ChessSquare(start[0], start[1]);
  const target = new ChessSquare(end[0], end[1], ...end);
  let que = [];
  // que.push([origin.xPos, origin.yPos]);
  que.push(origin)

  const visited = new Set();
  const path = [];
  let pathStr = ``;
  while(que.length > 0) {
    const deque = que.shift()
    // const currentSquare = new ChessSquare(deque[0], deque[1], deque[2])
    const currentSquare = new ChessSquare(deque.xPos, deque.yPos, deque.distance)

    visited.add(currentSquare.getPosition());
    path.push(currentSquare)
    for(const move of path){
      for(const edge of move.edges){
        // if(edge[0] === target.xPos &&  edge[1] === target.yPos) return path.at(-1);
        if(edge[0] === target.xPos &&  edge[1] === target.yPos){
          let predecessor = path.at(-1); // object
          pathStr += `${predecessor.getPosition()}`;
          // console.log(pathStr)
          if(target.distance === 1 || (currentSquare.getPosition() === origin.getPosition())) return path[0].getPosition();
          return `${knightsMoves(start, [predecessor.xPos, predecessor.yPos, predecessor.distance])} -> ${pathStr}`;
        }
      }
    }
    // if(currentSquare.xPos === target.xPos &&  currentSquare.yPos === target.yPos) return path;

    for(const edge of currentSquare.getEdges()){
      // const edgeSquare = new ChessSquare(edge.xPos, edge.yPos, edge.distance);
      const edgeSquare = new ChessSquare(edge[0], edge[1], edge[2]);
      if(!visited.has(edgeSquare.getPosition())) {
        que.push(edgeSquare);
      }
    }
  }
}

export default knightsMoves