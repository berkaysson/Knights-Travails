import React from "react";
import styled from "styled-components";
import ChessBoard from "./Chess/ChessBoard";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: #fec89a;
`;

const Title = styled.h1`
  font-size: 33px;
`;

const Description = styled.p`
  line-height: 1.5;
`;

function App() {
  return (
    <AppContainer>
      <Title>Knight's Travails</Title>
      <Description>
        The Knight's Travail problem involves finding the shortest path for a
        knight on a chessboard to move from a given starting position to a
        target position. The knight moves in an L-shaped pattern and the goal is
        to determine the minimum number of moves required. This problem can be
        solved using graph traversal algorithms, such as breadth-first search,
        to explore all possible moves and find the shortest path. It is a common
        puzzle in computer science that showcases graph theory concepts and
        problem-solving skills.
      </Description>
      <ChessBoard size={8} />
    </AppContainer>
  );
}

export default App;
