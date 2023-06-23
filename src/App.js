import ChessBoard from "./Chess/ChessBoard";
import knightsMoves from "./knights";

function App() {
  console.log(knightsMoves([2,3], [6,7]).split(" -> "));
  return (
    <div className="App">
      <ChessBoard />
    </div>
  );
}

export default App;
