import React, { useState } from "react";
import NewGame from "../../assets/images/new-game.svg";
import Toolbox from "./components/Toolbox";


export default function ToolboxPage() {

      const [activeCategory, setActiveCategory] = useState("BOARD");
    
  return (
    <div className="toolbox-container">
      <Toolbox activeCategory={activeCategory} onCategoryClick={setActiveCategory} />
      <div className="bottom-buttons">
        <button className="new-game">
          <img src={NewGame} alt="new-game" />
          New game
        </button>
        <div className="toolbox-settings">
          <button>Settings</button>
          <button>Help</button>
        </div>
      </div>
    </div>
  );
}
