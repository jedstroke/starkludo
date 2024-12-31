import React, { createContext, ReactNode, useContext, useState } from 'react';
import player1 from '../assets/images/player1.png';
import blue from '../assets/images/blue.png';
import player2 from '../assets/images/player2.png';
import yellow from '../assets/images/yellow.png';
import player3 from '../assets/images/player3.png';
import green from '../assets/images/green.png';
import player4 from '../assets/images/player4.png';
import red from '../assets/images/red.png';

type Player = {
    id: number;
    name: string;
    image: string;
    color: string;
    piecesColor: string;
    noOfPieces: number;
    isTurn: boolean;
    backgroundColor: string;
    diceRoll: number;
    pieces: number[]; // Array to store positions of the player's pieces
};

type GameContextType = {
    players: Player[];
    rolledNumber1: number;
    rolledNumber2: number;
    currentTurn: number;
    setCurrentTurn: (turn: number) => void;
    rollDice: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [players, setPlayers] = useState<Player[]>([
        {
            id: 1,
            name: 'Player 1',
            image: player1,
            color: blue,
            piecesColor: 'blue',
            noOfPieces: 4,
            isTurn: true,
            backgroundColor: '#00000080',
            diceRoll: 0,
            pieces: [0, 0, 0, 0],
        },
        {
            id: 2,
            name: 'Player 2',
            image: player2,
            color: yellow,
            piecesColor: 'yellow',
            noOfPieces: 4,
            isTurn: false,
            backgroundColor: '#00000080',
            diceRoll: 0,
            pieces: [0, 0, 0, 0],
        },
        {
            id: 3,
            name: 'Player 3',
            image: player3,
            color: green,
            piecesColor: 'green',
            noOfPieces: 4,
            isTurn: false,
            backgroundColor: '#00000080',
            diceRoll: 0,
            pieces: [0, 0, 0, 0],
        },
        {
            id: 4,
            name: 'Player 4',
            image: player4,
            color: red,
            piecesColor: 'red',
            noOfPieces: 4,
            isTurn: false,
            backgroundColor: '#00000080',
            diceRoll: 0,
            pieces: [0, 0, 0, 0],
        },
    ]);

    const [currentTurn, setCurrentTurn] = useState<number>(1);
    const [rolledNumber1, setRolledNumber1] = useState<number>(1);
    const [rolledNumber2, setRolledNumber2] = useState<number>(1);

    const rollDice = () => {
        const rolledNumber1 = Math.floor(Math.random() * 6) + 1;
        const rolledNumber2 = Math.floor(Math.random() * 6) + 1;
        const rolledNumber = rolledNumber1 + rolledNumber2;
        setRolledNumber1(rolledNumber1);
        setRolledNumber2(rolledNumber2);

        setPlayers((prevPlayers) =>
            prevPlayers.map((player) => {
                if (player.id === currentTurn) {
                    // Update dice roll for the current player
                    const updatedPlayer = { ...player, diceRoll: rolledNumber };

                    // Check if the player has any pieces on the board
                    const hasPiecesOnBoard = player.pieces.some((pos) => pos > 0);

                    if (!hasPiecesOnBoard && player.noOfPieces > 0) {
                        // If no pieces on board, place one on the board
                        updatedPlayer.pieces = [rolledNumber, ...player.pieces.slice(1)];
                        updatedPlayer.noOfPieces -= 1;
                    } else if (hasPiecesOnBoard) {
                        // Move the first piece on the board
                        updatedPlayer.pieces = player.pieces.map((pos, index) => {
                            if (index === 0 && pos > 0) {
                                return pos + rolledNumber;
                            }
                            return pos;
                        });
                    }

                    return { ...updatedPlayer, isTurn: false }; // End this player's turn
                }

                return player;
            })
        );

        // Pass the turn to the next player
        const nextPlayerId = currentTurn === 4 ? 1 : currentTurn + 1;
        setCurrentTurn(nextPlayerId);

        // Update `isTurn` for the next player
        setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
                player.id === nextPlayerId
                    ? { ...player, isTurn: true }
                    : { ...player, isTurn: false }
            )
        );
    };

    return (
        <GameContext.Provider
            value={{
                players,
                rolledNumber1,
                rolledNumber2,
                currentTurn,
                setCurrentTurn,
                rollDice,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};