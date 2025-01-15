import React, { useRef, useContext } from "react";
import Marker from "./Marker";
import LudoTiles from "./LudoTiles";
import { GameContext } from "../context/game-context";
import { useSize } from "../hooks/size-hook";
import { markers } from "../hooks/utils";
import "../styles/Ludo.scss";
import { BoardContext } from "../context/board-context";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";
import pause from "../assets/images/button-icon/pause.svg"
import PlayerCorner from './PlayerCorner';
import Button from "./Button";
import { useModal } from "../context/modal-context";
import { PauseMenu } from "./PauseMenu";
import { PlayerAvatar } from "./PlayerAvatar";

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
    const { showModal, hideModal } = useModal()
    return (
        <div className="flex flex-col mx-auto gap-0">
            <div className="flex justify-center py-4 w-full">
                <button onClick={() => showModal(<PauseMenu onClose={hideModal} />)}><img src={pause} className="w-7 h-7" alt="pause" /></button>
            </div>
            <div className="flex justify-center">
                <div className="flex-col justify-between h-full">
                    <div className="mb-[60%]">
                    <PlayerAvatar avatarSrc="/game-assets/images/avatar-1.png" playerNumber={1} gem="/game-assets/images/gem-pink.svg" />
                    </div>
                    <PlayerAvatar avatarSrc="/game-assets/images/avatar-3.png" playerNumber={3} gem="/game-assets/images/gem-blue.svg" />
                </div>
                <div className={`container ${board} w-5/12 h-4/6 mx-auto card`} ref={boardRef}>
                    {/* Game board */}
                    {options.gameIsOngoing &&
                        markers
                            .slice(0, options.playersLength * 4)
                            .map((m) => <Marker key={m} pos={m} size={size} tileMap={tileMap} />)}
                    <LudoTiles />

                    {/* Player Corners */}
                    {players.map((player) => (
                        <PlayerCorner
                            key={player.id}
                            playerNumber={player.id + 1}
                            isCurrentTurn={options.playerChance === player.id}
                            playerColor={player.color}
                            avatarUrl={player.image}
                            playerName={player.name}
                            score={0}
                        />
                    ))}
                </div>
                <div className="flex flex-col relative justify-between h-full">
                    <div className="mb-[60%]">
                    <PlayerAvatar avatarSrc="/game-assets/images/avatar-2.png" playerNumber={2} gem="/game-assets/images/gem-lemon.svg" />
                    </div>
                    <PlayerAvatar avatarSrc="/game-assets/images/avatar-4.png" playerNumber={4} gem="/game-assets/images/gem-orange.svg" />
                </div>
            </div>
            <div className="w-full flex justify-center py-4">
                <Button label="Roll dice" variant="primary" />
            </div>
        </div>
    );
};

export default Ludo;