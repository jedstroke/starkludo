import React, { useContext } from "react";
import "../../styles/Toolbox.scss";
import { BoardContext } from "../../context/board-context";
import { DiceContext } from "../../context/dice-context";
import { ColorContext } from "../../context/color-context";
import { AvatarContext } from "../../context/avatar-context";
import OptionCard from "../OptionCard";
import DiceCard from "../DiceCard";
import PieceDesignCard from "../PieceDesignCard";
import dice10 from "../../assets/images/dice-10.svg";
import dice9 from "../../assets/images/dice-9.svg";
import dice8 from "../../assets/images/dice-8.svg";
import dice7 from "../../assets/images/dice-7.svg";
import dice6 from "../../assets/images/dice-6.svg";
import dice5 from "../../assets/images/dice-5.svg";
import map from "../../assets/images/Eyedropper.svg";
import king from "../../assets/images/Crown.svg";
import square from "../../assets/images/Polygon.svg";
import circle from "../../assets/images/Circle.svg";
import AvatarCard from "../AvatarCard";

import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2.jpg";
import profile3 from "../../assets/images/profile3.jpg";
import profile4 from "../../assets/images/profile4.jpg";

interface ToolboxProps {
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({
  activeCategory,
  onCategoryClick,
}) => {
  const { board, toggleBoard } = useContext(BoardContext);
  const { dice, changeDice } = useContext(DiceContext);
  const { design, changeDesign } = useContext(ColorContext);
  const { avatar, changeAvatar } = useContext(AvatarContext);

  const boardOptions = [
    { name: "Classic", option: "classic" },
    { name: "Wooden", option: "wooden-board" },
    { name: "Fire", option: "fire-board" },
  ];

  const diceOptions = [
    { name: "Basic Dice", option: "basic", img: dice5 },
    { name: "Gold Dice", option: "gold", img: dice6 },
    { name: "Black Dice", option: "black", img: dice7 },
    { name: "Unique Dice", option: "unique", img: dice8 },
    { name: "Red Dice", option: "red", img: dice9 },
    { name: "Silver Dice", option: "silver", img: dice10 },
  ];

  const pieceDesigns = [
    { name: "Default", option: "default", img: map },
    { name: "King", option: "king", img: king },
    { name: "Box", option: "box", img: square },
    { name: "Circle", option: "circle", img: circle },
  ];

  const avatarOptions = [
    { option: "avatar1", avatar: profile1 },
    { option: "avatar2", avatar: profile2 },
    { option: "avatar3", avatar: profile3 },
    { option: "avatar4", avatar: profile4 },
  ];

  return (
    <div className="toolbox">
      <div className="categories">
        <button
          className={`category ${activeCategory === "BOARD" ? "active" : ""}`}
          onClick={() => onCategoryClick("BOARD")}
        >
          BOARD
        </button>
        <button
          className={`category ${activeCategory === "DICE" ? "active" : ""}`}
          onClick={() => onCategoryClick("DICE")}
        >
          DICE
        </button>
        <button
          className={`category ${activeCategory === "AVATAR" ? "active" : ""}`}
          onClick={() => onCategoryClick("AVATAR")}
        >
          AVATAR
        </button>
        <button
          className={`category ${activeCategory === "COLOR" ? "active" : ""}`}
          onClick={() => onCategoryClick("COLOR")}
        >
          COLOR
        </button>
      </div>
      <div className="active-category">
        <h3>Active Piece</h3>
        <h5>
          {/* {dice.charAt(0).toUpperCase() + dice.slice(1).toLowerCase()} */}
          {design.charAt(0).toUpperCase() + design.slice(1)}
        </h5>
      </div>
      {activeCategory === "BOARD" && (
        <div className="options">
          {boardOptions.map((item) => (
            <OptionCard
              key={item.option}
              option={item}
              active={board === item.option}
              onSelect={() => toggleBoard(item.option)}
            />
          ))}
        </div>
      )}
      {activeCategory === "DICE" && (
        <div className="dice-options">
          {diceOptions.map((item) => (
            <DiceCard
              img={item.img}
              key={item.option}
              option={item}
              active={dice === item.option}
              onSelect={() => changeDice(item.option, item.img)}
            />
          ))}
        </div>
      )}
      {activeCategory === "COLOR" && (
        <div className="piece-options">
          {pieceDesigns.map((item) => (
            <PieceDesignCard
              key={item.option}
              option={item}
              active={design === item.option}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSelect={() => changeDesign(item.option as any)}
            />
          ))}
        </div>
      )}
      {activeCategory === "AVATAR" && (
        <div className="avatar-options">
          {avatarOptions.map((item) => (
            <AvatarCard
              key={item.option}
              avatar={item.avatar}
              active={avatar === item.option}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSelect={() => changeAvatar(item.option as any)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Toolbox;