import React from "react";
import styled from "styled-components";
import Knight from "./Knight";

const Square = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${Square}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const ChessSquare = ({ size, color, id, status, onClick, visitDistance }) => {
  return (
    <Square size={size} color={color} onClick={() => onClick([id[0], id[2]])}>
      <Tooltip>Coordinates {id}</Tooltip>
      {status ? <Knight status={status} visitDistance={visitDistance} /> : ""}
    </Square>
  );
};

export default ChessSquare;
