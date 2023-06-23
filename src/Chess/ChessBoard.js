import React, { useState } from "react";
import styled from "styled-components";
import ChessSquare from "./ChessSquare";
import knightsMoves from "../knights";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 60px);
  grid-template-rows: repeat(8, 60px);
  border: 10px groove brown;
  width: fit-content;
`;

const ChessBoard = ({ size = 8 }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [path, setPath] = useState([]);

  const squareClickHandler = (pos) => {
    pos[0] = pos[0] * 1;
    pos[1] = pos[1] * 1;
    if (!startPoint) setStartPoint(pos);
    else if (!endPoint){ 
      if (startPoint[0] === pos[0] && startPoint[1] === pos[1]) {
        alert("Start and end point cannot be the same");
      } else {
        setEndPoint(pos);
      }
    }
    else alert("If you want to change positions click reset");
  };

  const calculateTrail = () => {
    if (startPoint && endPoint) {
      setPath(knightsMoves(startPoint, endPoint).split(" -> ").slice(1));
    } else {
      alert("Please select start and end points on chessboard");
    }
    console.log(startPoint);
    console.log(endPoint);
    console.log(knightsMoves(startPoint, endPoint).split(" -> ").slice(1));
  };

  const resetTrail = () => {
    setStartPoint(null);
    setEndPoint(null);
    setPath([]);
  };

  const grid = [];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const color = (row + col) % 2 === 0 ? "lightgray" : "black";
      let status = null;
      let visitDistance = 0;
      const currentPos = `${row}, ${col}`;

      if (startPoint && startPoint[0] === row && startPoint[1] === col) {
        status = "start";
        visitDistance = 0;
      } else if (endPoint && endPoint[0] === row && endPoint[1] === col) {
        status = "end";
        visitDistance = path.length*1 + 1;
      } else if (path.includes(currentPos)) {
        status = "visited";
        visitDistance = path.indexOf(currentPos)*1 + 1 ;
      }

      grid.push(
        <ChessSquare
          key={`${row}-${col}`}
          size={60}
          color={color}
          id={`${row}-${col}`}
          status={status}
          onClick={squareClickHandler}
          visitDistance = {visitDistance}
        />
      );
    }
  }

  return (
    <div>
      <BoardContainer>{grid}</BoardContainer>
      <p>
        Start Point :{" "}
        {startPoint
          ? `${startPoint[0]}-${startPoint[1]}`
          : "Select on chessboard"}
      </p>
      <p>
        End Point :{" "}
        {endPoint ? `${endPoint[0]}-${endPoint[1]}` : "Select on chessboard"}
      </p>
      <button onClick={calculateTrail}>Start</button>
      <button onClick={resetTrail}>Reset</button>
    </div>
  );
};

export default ChessBoard;