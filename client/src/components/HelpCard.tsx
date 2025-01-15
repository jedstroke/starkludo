"use client"
import { CardSurface } from "./Card"
import closeBtn from "../assets/images/button-icon/close-btn-toast.svg"
import { useNavigate } from "react-router-dom"

interface GameHelpProps {
    height?: string | number
}

const GAME_RULES = [
    {
        id: 1,
        text: "The game starts with each player choosing a set of four pieces (usually colored red, blue, green, and yellow) and placing them on the starting square."
    },
    {
        id: 2,
        text: "The objective of the game is to move all four pieces around the board and return them to the starting square before your opponents."
    },
    {
        id: 3,
        text: "On each turn, players roll two dice to determine how many spaces they can move their pieces."
    },
    {
        id: 4,
        text: "The number on each die represents how many spaces a piece can move. For example, if a player rolls a 3 and a 6, they can move one piece 3 spaces and another piece 6 spaces."
    },
    {
        id: 5,
        text: "Pieces can only move forward, never backward."
    },
    {
        id: 6,
        text: "If a piece lands on a square occupied by an opponent's piece, it can \"knock off\" that piece and send it back to its starting position."
    },
    {
        id: 7,
        text: "Players must use both numbers rolled on the dice if possible. If only one number can be played, the higher number must be used."
    },
    {
        id: 8,
        text: "The first player to get all four pieces back to their home square wins the game."
    }
]

export function GameHelp({ height = "50vh" }: GameHelpProps) {
    const navigate = useNavigate();
    return (
        <CardSurface className="mt-4">
            <div className="flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[#8B4513] text-xl font-bold pr-8">
                        Get Guides, Tips, And Tricks Needed For A Successful Game
                    </h2>
                    <button
                        onClick={() => navigate("/start")}
                        className="text-[#8B4513] hover:opacity-80 transition-opacity"
                    >
                        <img src={closeBtn} className="h-4 w-4" />
                    </button>
                </div>

                {/* Divider */}
                <div className="border-b-2 border-[#8B4513]/20 mb-6" />

                {/* Scrollable Rules */}
                <div
                    className="overflow-y-auto pr-4"
                    style={{
                        height: typeof height === 'number' ? `${height}px` : height,
                        maxHeight: "calc(100vh - 200px)"
                    }}
                >
                    <div className="space-y-6">
                        {GAME_RULES.map((rule) => (
                            <div key={rule.id} className="flex gap-4">
                                <div className="text-[#8B4513] font-bold whitespace-nowrap">
                                    Rule {rule.id}:
                                </div>
                                <div className="text-[#8B4513]">
                                    {rule.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CardSurface>
    )
}

