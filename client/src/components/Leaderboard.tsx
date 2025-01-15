"use client"

import { useState } from "react"
import closeBtn from "../assets/images/button-icon/close-btn-toast.svg"
import { ChevronDown } from 'lucide-react'
import { CardSurface } from "./Card"
import { globalRankings, friendRankings } from "../lib/mock-rankings"
import { useNavigate } from "react-router-dom"

interface LeaderboardProps {
    height?: string | number
    onClose?: () => void
}

type RankingType = "global" | "friends"

export function Leaderboard({
    height = "600px",
    onClose
}: LeaderboardProps) {
    const [rankingType, setRankingType] = useState<RankingType>("global")

    const rankings = rankingType === "global" ? globalRankings : friendRankings

    const navigate = useNavigate();

    return (
        <CardSurface className="bg-[#DAC29C] mt-2">
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setRankingType("global")}
                            className={`px-6 py-2 rounded-lg transition-colors ${rankingType === "global"
                                    ? "bg-[#8B4513] text-[#e8d5c4]"
                                    : "border border-solid border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#e8d5c4]"
                                }`}
                        >
                            Global Ranking
                        </button>
                        <button
                            onClick={() => setRankingType("friends")}
                            className={`px-6 py-2 rounded-lg transition-colors ${rankingType === "friends"
                                    ? "bg-[#8B4513] text-[#e8d5c4]"
                                    : "border border-solid border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#e8d5c4]"
                                }`}
                        >
                            Friends Ranking
                        </button>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-[#8B4513] hover:opacity-80 transition-opacity"
                    >
                        <img src={closeBtn} onClick={() => navigate('/start')} className="h-4 w-4" />
                    </button>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-[#8B4513]/20 text-[#8B4513] font-bold">
                    <div>Rank</div>
                    <div>Account Name</div>
                    <div>Wins</div>
                    <div>Loss</div>
                </div>

                {/* Table Body */}
                <div className="relative">
                <div
                    className="overflow-y-auto"
                    style={{
                        height: typeof height === 'number' ? `${height}px` : height,
                        maxHeight: "calc(100vh - 200px)"
                    }}
                >
                    {rankings.map((data, index) => (
                        <div
                            key={`${data.rank}-${data.accountName}`}
                            className={`grid grid-cols-4 gap-4 py-4 items-center text-[#8B4513]`}
                        >
                            <div className="font-bold">{data.rank}</div>
                            <div>{data.accountName}</div>
                            <div>{data.wins}</div>
                            <div>{data.losses}</div>
                        </div>
                    ))}
                </div>
                    {/* Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 bg-gradient-to-t from-[#e8d5c4] to-transparent">
                        <ChevronDown className="h-6 w-6 text-[#8B4513] animate-bounce" />
                    </div>
                </div>
            </div>
        </CardSurface>
    )
}

