import { useState, useEffect, useCallback } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
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
import { SchemaType } from "./dojo/typescript/models.gen";
import { createDojoStore, SDK } from "@dojoengine/sdk";
import toastBtn from "./assets/images/button-icon/close-btn-toast.svg"
import Settings from "./components/Settings";
import GameLayout from "./components/GameLayout";
import HomeScreen from "./components/HomeScreen";
import StartGameScreen from "./components/StartGameScreen";
import AccountScreen from "./components/AccountScreen";

const App = ({ sdk }: { sdk: SDK<SchemaType> }) => {
// const App = () => {
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
    <Router>
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
                      <Routes>
                        <Route
                          path="/"
                          element={<HomeScreen />}
                        />
                        <Route
                          path="/account"
                          element={<AccountScreen />}
                        />
                        <Route path="/settings" element={<Settings />} />
                        <Route
                          path="/start"
                          element={<StartGameScreen />}
                        />
                      </Routes>
                    </GameLayout>
                  </DiceProvider>
                </ColorProvider>
              </BoardContext.Provider>
            </GameContext.Provider>
            <ToastContainer position="bottom-right" closeButton={<img src={toastBtn} className="w-4 h-4" alt="close-btn" />} />
          </StarknetProvider>
        </>
      )}
    </Router>
  );
};

export default App;
