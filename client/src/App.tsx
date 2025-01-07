import { useState, useEffect, useCallback } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Row, Col } from "react-simple-flex-grid";
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
import { StarkludoSchemaType } from "./dojo/gen/models.gen";
import { SDK } from "@dojoengine/sdk";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Control from "./components/Control";
import ControlWindowLayout from "./components/ControlWindows/ControlWindowLayout";
import GameAccount from "./components/ControlWindows/GameAccount";
import GameHelp from "./components/ControlWindows/GameHelp";
import Leaderboard from "./components/ControlWindows/Leaderboard";
import Multiplayer from "./components/ControlWindows/Multiplayer";
import Toolbox from "./components/ControlWindows/Toolbox";
import Dice from "./components/Dice";
import Footer from "./components/Footer";
import Ludo from "./components/Ludo";
import Menu from "./components/Menu";
import { FiAlertTriangle, FiZap } from "react-icons/fi";
import GameLayout from "./components/GameLayout";
import HomeScreen from "./components/HomeScreen";
import StartGameScreen from "./components/StartGameScreen";

const App = ({ sdk }: { sdk: SDK<StarkludoSchemaType> }) => {
  console.log("SDK initialized:", sdk);

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
                        {/* Settings Route */}
                        <Route path="/settings" element={<Settings />} />

                        {/* Home Page Route */}
                        <Route
                          path="/"
                          element={<HomeScreen />}
                        />
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
            <ToastContainer position="bottom-center" />
          </StarknetProvider>
        </>
      )}
    </Router>
  );
};

export default App;
