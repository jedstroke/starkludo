import pauseImg from "../assets/images/pause.png";
import { useEffect, useState } from "react";
import PauseGame from "./PauseGame";
import CenterTile from "./CenterTile";
import PathTile from "./PathTile";
import PlayerZone from "./PlayerZone";
import { useGame } from "../context/game-context-2.";

const LudoGame = () => {
  const [pause, setPause] = useState(false);
  const [highlightedPaths, setHighlightedPaths] = useState<number[]>([]); // Store highlighted paths
  const onClose = () => {
    setPause(false);
  };

  const getTilePiece = (position: number) => {
    for (const player of players) {
      const pieceIndex = player.pieces.indexOf(position); // Check if any piece is at the current position
      if (pieceIndex !== -1) {
        return { color: player.piecesColor, playerId: player.id }; // Return piece details
      }
    }
    return null; // No piece at this position
  };

  const { players, rollDice, currentTurn } = useGame();

  const renderPathTiles = (
    count: number,
    highlighted = false,
    bgColor?: string
  ) => {
    return [...Array(count)].map((_, index) => (
      <PathTile
        key={index}
        highlighted={highlighted}
        bgColor={bgColor || "bg-transparent"}
      />
    ));
  };

  useEffect(() => {
    // Get the player whose turn it is
    const currentPlayer = players.find((player) => player.isTurn);

    if (!currentPlayer) return;

    // Check if the player has any pieces on the board
    const hasPiecesOnBoard = currentPlayer.pieces.some((pos) => pos > 0);

    if (!hasPiecesOnBoard && currentPlayer.noOfPieces > 0) {
      // Player has no pieces on the board, add a piece to the board based on dice roll
      const updatedPieces = [...currentPlayer.pieces];
      updatedPieces[0] = currentPlayer.diceRoll; // Place the first piece on the board
      currentPlayer.pieces = updatedPieces; // Update the player's pieces
    } else {
      // Player has pieces, highlight paths based on dice roll
      const diceNumber = currentPlayer.diceRoll; // Get the dice roll
      const piecePosition = currentPlayer.pieces.find((pos) => pos > 0) || 0; // Find the first piece's position

      const newHighlightedPaths = [];
      for (let i = piecePosition + 1; i <= piecePosition + diceNumber; i++) {
        newHighlightedPaths.push(i);
      }

      setHighlightedPaths(newHighlightedPaths);
    }
  }, [players]);

  const handleRollDice = () => {
    rollDice();

    // After rolling, check if the current player has no pieces on the board
    const currentPlayer = players.find((player) => player.id === currentTurn);

    if (
      currentPlayer &&
      !currentPlayer.pieces.some((pos) => pos > 0) &&
      currentPlayer.noOfPieces > 0
    ) {
      // Add a piece to the board
      const updatedPieces = [...currentPlayer.pieces];
      updatedPieces[0] = currentPlayer.diceRoll; // Place the piece based on dice roll
      // movePiece(currentPlayer.id); // Move the piece based on the dice roll
    }
  };

  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col items-center justify-between gap-4">
        <img
          src={pauseImg}
          alt="pause"
          className="cursor-pointer"
          onClick={() => setPause(true)}
        />
        <div className="w-full rounded-md border-primary border-[32px] bg-[#c6ad6d]">
          <div className="flex w-full">
            <PlayerZone
              hightlighed={players[1].isTurn}
              noofPieces={players[2].noOfPieces}
              backgroundColor="#545841"
              borderColor="#3f4231"
            />
            <div className="w-40 flex border">
              <div className="flex flex-col justify-between w-1/4 ">
                {renderPathTiles(6, false)}
              </div>
              <div className="flex flex-col justify-between w-2/4 bg-[#626b74] ">
                {renderPathTiles(6, players[1].isTurn, "#626b74")}
              </div>
              <div className="flex flex-col justify-between w-1/4 ">
                {renderPathTiles(6, false)}
              </div>
            </div>

            <PlayerZone
              hightlighed={players[0].isTurn}
              noofPieces={players[0].noOfPieces}
              backgroundColor="#626b74"
              borderColor="#4a5057"
            />
          </div>
          <div className="flex w-full">
            <div className="w-1/3 h-36 flex flex-col border">
              <div className="flex justify-between h-1/4 ">
                {renderPathTiles(6, false)}
              </div>
              <div className="flex justify-between h-2/4 bg-[#545841] ">
                {renderPathTiles(6, players[0].isTurn, "#545841")}
              </div>
              <div className="flex justify-between h-1/4 ">
                {renderPathTiles(6, false)}
              </div>
            </div>
            <CenterTile />
            <div className="w-1/3 h-36 flex flex-col border">
              <div className="flex justify-between h-1/4 ">
                {renderPathTiles(6, false)}
              </div>
              <div className="flex justify-between h-2/4 bg-[#c89252] ">
                {renderPathTiles(6, players[2].isTurn, "#c89252")}
              </div>
              <div className="flex justify-between h-1/4 ">
                {renderPathTiles(6, false)}
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <PlayerZone
              hightlighed={players[3].isTurn}
              noofPieces={players[3].noOfPieces}
              backgroundColor="#973d34"
              borderColor="#712e27"
            />
            <div className="w-1/3 flex flex-co1 border">
              <div className="flex flex-col justify-between w-1/4 ">
                {renderPathTiles(6, false)}
              </div>
              <div className="flex flex-col justify-between w-2/4 bg-[#973d34] ">
                {renderPathTiles(6, players[3].isTurn, "#973d34")}
              </div>
              <div className="flex flex-col justify-between w-1/4 ">
                {renderPathTiles(6, false)}
              </div>
            </div>
            <PlayerZone
              hightlighed={players[2].isTurn}
              noofPieces={players[1].noOfPieces}
              backgroundColor="#c89252"
              borderColor="#966e3d"
            />
          </div>
        </div>
        <button
          onClick={handleRollDice}
          className="bg-primary text-secondary px-6 py-2.5 rounded-sm font-bold"
        >
          Roll dice
        </button>
      </div>

      {pause && <PauseGame onClose={onClose} />}
    </div>
  );
};

export default LudoGame;
