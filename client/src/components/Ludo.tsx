import React, { useRef, useContext } from "react";
import Marker from "./Marker";
import LudoTiles from "./LudoTiles";
import { GameContext } from "../context/game-context";
import { useSize } from "../hooks/size-hook";
import { markers } from "../hooks/utils";
import "../styles/Ludo.scss";
import { BoardContext } from "../context/board-context";
import CaretRight from "./CaretRight";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";

const Ludo: React.FC = () => {
  const { size, tileMap } = useSize();
  const boardRef = useRef<HTMLDivElement>(null);
  const { options } = useContext(GameContext);
  const { board } = useContext(BoardContext);

  // Player data with correct order: red, green, yellow, blue
  const players = [
    {
      id: 0,
      name: "Player 1",
      color: "red",
      image: profile1,
    },
    {
      id: 1,
      name: "Player 2",
      color: "green",
      image: profile2,
    },
    {
      id: 2,
      name: "Player 3",
      color: "yellow",
      image: profile3,
    },
    {
      id: 3,
      name: "Player 4",
      color: "blue",
      image: profile4,
    },
  ].slice(0, options.playersLength);

  return (
    <div className={`container ${board} card`} ref={boardRef}>
      {options.gameIsOngoing &&
        markers
          .slice(0, options.playersLength * 4)
          .map((m) => <Marker key={m} pos={m} size={size} tileMap={tileMap} />)}
      <LudoTiles />

      {/* Player profile images */}
      <div className="player-profiles">
        {players.map((player) => (
          <div
            key={player.id}
            className={`player-profile player-${player.color}`}
          >
            <img src={player.image} alt={player.name} />
            <small className="username-player">{player.name}</small>
            {options.playerChance === player.id && (
              <span
                className={`${player.color === "red" || player.color === "green" ? "turn-indicator" : player.color === "yellow" || player.color === "blue" ? "turn-indicator-left" : ""}`}
              >
                YOUR TURN
              </span>
            )}
          </div>
        ))}
      </div>

      {!options.playersLength && (
        <div className="overlay">
          <div className="overlay-child">
            <p className="text-white">
              Choose the number of players first to begin
            </p>
            <CaretRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default Ludo;
