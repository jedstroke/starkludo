import bgImg from "../assets/images/bg-dice.png";
import dice from '../assets/images/dice.png';
import player1 from '../assets/images/player1.png';
import blue from '../assets/images/blue.png';
import player2 from '../assets/images/player2.png';
import yellow from '../assets/images/yellow.png';
import player3 from '../assets/images/player3.png';
import green from '../assets/images/green.png';
import player4 from '../assets/images/player4.png';
import red from '../assets/images/red.png';
import LudoGame from "./LudoGame";
import { useGame } from "../context/game-context-2.";

// const players = [
//     {
//         id: 1,
//         name: 'Player 1',
//         image: player1,
//         color: blue,
//         piecesColor: 'blue',
//         noOfPieces: 4,
//         isTurn: true,
//         backgroundColor: '#00000080',
//     },
//     {
//         id: 3,
//         name: 'Player 3',
//         image: player3,
//         color: green,
//         piecesColor: 'green',
//         noOfPieces: 4,
//         isTurn: false,
//         backgroundColor: '#00000080',
//     },
//     {
//         id: 2,
//         name: 'Player 2',
//         image: player2,
//         color: yellow,
//         piecesColor: 'yellow',
//         noOfPieces: 4,
//         isTurn: false,
//         backgroundColor: '#00000080',
//     },
//     {
//         id: 4,
//         name: 'Player 4',
//         image: player4,
//         color: red,
//         piecesColor: 'red',
//         noOfPieces: 4,
//         isTurn: false,
//         backgroundColor: '#00000080',
//     },
// ];

const GamePlay = () => {
    const { players } = useGame()
    return (
        <div
            className="relative h-full w-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}
        >
            <div className="container mx-auto flex justify-center items-center py-12">
                <div className="flex gap-8 justify-between items-center w-full max-w-7xl">
                    <div className="flex flex-col justify-between items-start space-y-2">
                        {players.slice(0, 2).map((player) => (
                            <div key={player.id} className="flex flex-col justify-between items-start space-y-2">
                                <div
                                    className={`bg-[rgba(0,0,0,0.5)] flex flex-col items-center rounded-md p-4 text-white space-y-2 ${player.backgroundColor}`}
                                >
                                    <img src={player.image} className="h-28 w-20 object-cover" alt={`player ${player.id}`} />
                                    <span className="flex gap-2 items-center">
                                        <p className="font-bold">{player.name}</p>
                                        <img src={player.color} alt="" />
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-bold">
                                        <img src={dice} className="h-6 w-6 object-contain" alt="dice" />
                                        {player.isTurn ? 'Your Turn' : 'Waiting'}
                                    </span>
                                    <div className="flex border gap-2 border-gray-300 p-2 rounded-sm mt-2">
                                        {Array.from({ length: player.noOfPieces }).map((_, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    style={{ backgroundColor: player.piecesColor }}
                                                    className="h-4 w-4 rounded-full"
                                                ></span>

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Centered LudoGame Component */}
                    <div className=" flex-2 lg:flex-[0.65] flex justify-center items-center">
                        <LudoGame />
                    </div>

                    <div className="flex flex-col justify-between items-start space-y-2">
                        {players.slice(2).map((player) => (
                            <div key={player.id} className="flex flex-col justify-between items-start space-y-2">
                                <div
                                    className={`bg-[rgba(0,0,0,0.5)] flex flex-col items-center rounded-md p-4 text-white space-y-2 ${player.backgroundColor}`}
                                >
                                    <img src={player.image} className="h-28 w-20 object-cover" alt={`player ${player.id}`} />
                                    <span className="flex gap-2 items-center">
                                        <p className="font-bold">{player.name}</p>
                                        <img src={player.color} alt="" />
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-bold">
                                        <img src={dice} className="h-6 w-6 object-contain" alt="dice" />
                                        {player.isTurn ? 'Your Turn' : 'Waiting'}
                                    </span>
                                    <div className="flex border gap-2 border-gray-300 p-2 rounded-sm mt-2">
                                        {Array.from({ length: player.noOfPieces }).map((_, index) => (
                                            <span
                                                key={index}
                                                style={{ backgroundColor: player.piecesColor }}
                                                className="h-4 w-4 rounded-full"
                                            ></span>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePlay;
