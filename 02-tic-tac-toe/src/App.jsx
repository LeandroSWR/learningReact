import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const player1Symbol = 'X';
const player2Symbol = 'O';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = player1Symbol;

  if (gameTurns.length > 0 && gameTurns[0].player === player1Symbol) {
    currentPlayer = player2Symbol;
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      break;
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const {row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      return [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ];
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  function handleGameReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol={player1Symbol} isActive={currentPlayer === player1Symbol} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol={player2Symbol} isActive={currentPlayer === player2Symbol} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && (<GameOver winner={winner} onRestart={handleGameReset} />)}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App;
