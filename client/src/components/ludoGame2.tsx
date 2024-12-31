import pauseImg from "../assets/images/pause.png";
import { useState } from "react";
import PauseGame from "./PauseGame";
import CenterTile from "./CenterTile";
import PathTile from "./PathTile";
import PlayerZone from "./PlayerZone";
import { useGame } from "../context/game-context-2.";

const LudoGame = () => {
    const [pause, setPause] = useState(false);
    const { players, rollDice } = useGame();

    const onClose = () => {
        setPause(false);
    };

    const renderPathTiles = (
        count: number,
        tag: number,
        className?: string,
        bgColor?: string
    ) => {
        const isHighlighted = players[tag]?.isTurn; // Check if the current player with the tag is active
        return [...Array(count)].map((_, index) => (
            <PathTile
                key={index}
                className={className}
                bgColor={bgColor || "transparent"}
                highlighted={isHighlighted}
                borderColor="#5cd7f8"
            />
        ));
    };

    return (
        <div className="flex-1 w-full">
            <div className="flex flex-col items-center justify-between gap-4">
                {/* Pause Button */}
                <img
                    src={pauseImg}
                    alt="pause"
                    className="cursor-pointer"
                    onClick={() => setPause(true)}
                />

                {/* Ludo Board */}
                <div className="w-full rounded-md border-primary border-[32px] bg-[#c6ad6d]">
                    {/* Top Row */}
                    <div className="flex w-full">
                        <PlayerZone
                            hightlighed={players[1].isTurn}
                            noofPieces={players[1].noOfPieces}
                            backgroundColor="#545841"
                            borderColor="#3f4231"
                        />
                        <div className="w-40 flex border">
                            <div className="flex flex-col justify-between w-1/4">
                                {renderPathTiles(6, 1)}
                            </div>
                            <div className="flex flex-col justify-between w-2/4 bg-[#626b74]">
                                {renderPathTiles(6, 1)}
                            </div>
                            <div className="flex flex-col justify-between w-1/4">
                                {renderPathTiles(6, 1)}
                            </div>
                        </div>
                        <PlayerZone
                            hightlighed={players[0].isTurn}
                            noofPieces={players[0].noOfPieces}
                            backgroundColor="#626b74"
                            borderColor="#4a5057"
                        />
                    </div>

                    {/* Middle Row (includes center tile) */}
                    <div className="flex w-full">
                        {/* Left Column */}
                        <div className="w-1/3 h-36 flex flex-row border">
                            <div className="flex flex-col justify-between w-1/4">
                                {renderPathTiles(3, 1, "bg-[black] h-1/4")}
                            </div>
                            <div className="flex flex-col-reverse justify-between w-2/4 bg-[#545841]">
                                {renderPathTiles(4, 1, "bg-[red]")} {/* Highlight paths */}
                            </div>
                            <div className="flex justify-between w-1/4 flex-col">
                                {renderPathTiles(3, 1, "bg-[green]")}
                            </div>
                        </div>

                        {/* Center Tile */}
                        <CenterTile />

                        {/* Right Column */}
                        <div className="w-1/3 h-36 flex flex-col border">
                            <div className="flex justify-between h-1/4">
                                {renderPathTiles(6, 3)}
                            </div>
                            <div className="flex justify-between h-2/4 bg-[#c89252]">
                                {renderPathTiles(6, 3)}
                            </div>
                            <div className="flex justify-between h-1/4">
                                {renderPathTiles(6, 3)}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex w-full">
                        <PlayerZone
                            hightlighed={players[3].isTurn}
                            noofPieces={players[3].noOfPieces}
                            backgroundColor="#973d34"
                            borderColor="#712e27"
                        />
                        <div className="w-1/3 flex flex-row border">
                            <div className="flex flex-col justify-between w-1/4">
                                {renderPathTiles(6, 2)}
                            </div>
                            <div className="flex flex-col justify-between w-2/4 bg-[#973d34]">
                                {renderPathTiles(6, 2)}
                            </div>
                            <div className="flex flex-col justify-between w-1/4">
                                {renderPathTiles(6, 2)}
                            </div>
                        </div>
                        <PlayerZone
                            hightlighed={players[2].isTurn}
                            noofPieces={players[2].noOfPieces}
                            backgroundColor="#c89252"
                            borderColor="#966e3d"
                        />
                    </div>
                </div>

                {/* Roll Dice Button */}
                <button
                    onClick={rollDice}
                    className="bg-primary text-secondary px-6 py-2.5 rounded-sm font-bold"
                >
                    Roll dice
                </button>
            </div>

            {/* Pause Game Modal */}
            {pause && <PauseGame onClose={onClose} />}
        </div>
    );
};

export default LudoGame;
