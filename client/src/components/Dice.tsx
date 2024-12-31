import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/game-context-2.';

interface DiceProps {
  onRoll: (numbers: number[]) => void;
  controlledValues?: [number, number]; // Optional controlled values for the dice
}

const Dice: React.FC<DiceProps> = ({ onRoll, controlledValues }) => {
  const { players, currentTurn, rolledNumber1, rolledNumber2 } = useGame();
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const dice1Ref = useRef<HTMLDivElement | null>(null);
  const dice2Ref = useRef<HTMLDivElement | null>(null);

  // If controlledValues prop is passed, use it
  useEffect(() => {
    if (controlledValues) {
      setDice1(controlledValues[0]);
      setDice2(controlledValues[1]);
    }
  }, [controlledValues]);

  // const rollDice = () => {
  //   const rolledNumber1 = Math.floor(Math.random() * 6) + 1;
  //   const rolledNumber2 = Math.floor(Math.random() * 6) + 1;
  //   setDice1(rolledNumber1);
  //   setDice2(rolledNumber2);
  //   onRoll([rolledNumber1, rolledNumber2]);

  //   // Trigger the dice roll animation again
  //   if (dice1Ref.current && dice2Ref.current) {
  //     dice1Ref.current.classList.add('rolling');
  //     dice2Ref.current.classList.add('rolling');

  //     setTimeout(() => {
  //       dice1Ref.current?.classList.remove('rolling');
  //       dice2Ref.current?.classList.remove('rolling');
  //     }, 500); // Match the duration of the animation
  //   }

  //   // Pass the turn to the next player
  //   const nextPlayerId = currentTurn === 4 ? 1 : currentTurn + 1;
  //   setPlayerTurn(nextPlayerId); // Update the turn to the next player
  // };

  const getDotPositions = (num: number) => {
    const positions: { [key: number]: [number, number][] } = {
      1: [[1, 1]],
      2: [
        [0, 0],
        [2, 2],
      ],
      3: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      4: [
        [0, 0],
        [0, 2],
        [2, 0],
        [2, 2],
      ],
      5: [
        [0, 0],
        [0, 2],
        [1, 1],
        [2, 0],
        [2, 2],
      ],
      6: [
        [0, 0],
        [0, 1],
        [0, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    };
    return positions[num as keyof typeof positions];
  };

  const dots1 = getDotPositions(rolledNumber1);
  const dots2 = getDotPositions(rolledNumber2);

  const renderDice = (dots: [number, number][]) => (
    <div className="grid grid-rows-3 grid-cols-3 w-full h-full p-2">
      {Array.from({ length: 9 }).map((_, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDot = dots?.some(([r, c]) => r === row && c === col);

        return (
          <div
            key={index}
            className={`flex justify-center items-center ${isDot ? 'bg-[#E6E6E5] rounded-full w-[6px] h-[6px]' : ''}`}
          ></div>
        );
      })}
    </div>
  );

  return (
    <div className="dice-container flex flex-col justify-center px-2 w-full h-full relative">
      {/* First Dice */}
      <div className="w-[60%] flex justify-start">
        <div
          ref={dice1Ref}
          className="bg-gray-800 flex justify-center items-center rounded-lg shadow-md cursor-pointer w-8 h-8"
        >
          {renderDice(dots1)}
        </div>
      </div>

      {/* Second Dice */}
      <div className="w-[60%] flex justify-end">
        <div
          ref={dice2Ref}
          className="bg-gray-800 flex justify-center items-center rounded-lg shadow-md cursor-pointer w-8 h-8"
        >
          {renderDice(dots2)}
        </div>
      </div>

      <style>
        {`
          .rolling {
            animation: roll 0.9s ease-in-out;
          }

          @keyframes roll {
            0% {
              transform: rotate(0deg) scale(1);
            }
            25% {
              transform: rotate(45deg) scale(1.1);
            }
            50% {
              transform: rotate(90deg) scale(1);
            }
            75% {
              transform: rotate(135deg) scale(1.1);
            }
            100% {
              transform: rotate(180deg) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Dice;
