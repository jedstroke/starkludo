import { useState, useEffect, useCallback } from "react";
import { GameContext } from "./context/game-context";
import { chance } from "./hooks/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OptionsProps } from "./types";
import "./App.css";
import { StarknetProvider } from "./starknet-provider";
import { BoardContext, BoardType } from "./context/board-context";
import { DiceProvider } from "./context/dice-context";
import { ColorProvider } from "./context/color-context";
import MobileResponsiveWarning from "./components/MobileResponsiveWarning";
import { BackgroundPlaceholder } from "./blur-placeholder";
import GameLayout from "./components/GameLayout";

const App = () => {
  const [activeWindow, setActiveWindow] = useState("");
  const [showMobileResponsiveWarning, setShowMobileResponsiveWarning] =
    useState(false);
  const [isGameAssetsSet, setGameAssets] = useState({ status: false, bgURL: "" });
  const [board, setBoard] = useState<BoardType>("classic");
  const [gameState, setGameState] = useState({});
  const [activeCategory, setActiveCategory] = useState("BOARD");
  const [options, setOptions] = useState<OptionsProps>({
    gameIsOngoing: false,
    playersLength: 0,
    diceFace: 0,
    playerChance: 0,
    hasThrownDice: false,
    winners: [],
    gameCondition: [],
  });

  const toggleActiveWindow = (window: string) => {
    if (window === activeWindow) {
      setActiveWindow("");
      return;
    }
    setActiveWindow(window);
  };

  const toggleBoard = (newBoard: BoardType) => {
    setBoard(newBoard);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const setGameData = useCallback((game: object) => {
    setGameState(game);
  }, []);

  const setGameOptions = useCallback((newOption: Partial<OptionsProps>) => {
    setOptions((option) => {
      return {
        ...option,
        ...newOption,
      };
    });
  }, []);

  useEffect(() => {
    if (options.gameIsOngoing) {
      if (options.winners.length === options.playersLength - 1) {
        toast(
          `The game has ended. Player ${chance[options.winners[0]]
          } is the winner`
        );
        setGameOptions({
          gameIsOngoing: false,
        });
      }
    }

    const trackScreenSize = () => {
      setShowMobileResponsiveWarning(window.innerWidth < 845);
    };

    trackScreenSize();

    window.addEventListener("resize", trackScreenSize);

    return () => {
      window.removeEventListener("resize", trackScreenSize);
    };
  }, [options, setGameOptions]);


  return (
    <>
      {showMobileResponsiveWarning ? (
        <MobileResponsiveWarning />
      ) : (
        <>
          <StarknetProvider>
            <GameContext.Provider
              value={{
                gameState: gameState,
                setGameData: setGameData,
                options: options,
                setGameOptions: setGameOptions,
              }}
            >
              <BoardContext.Provider value={{ board, toggleBoard }}>
                <ColorProvider>
                  <DiceProvider>
                  <GameLayout>
                    <></>
                  </GameLayout>
                  </DiceProvider>
                </ColorProvider>
              </BoardContext.Provider>
            </GameContext.Provider>
            <ToastContainer position="bottom-center" />
          </StarknetProvider>
        </>
      )}
    </>
  );
};

export default App;
