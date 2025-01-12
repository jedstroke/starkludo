"use client"

import { useState } from "react"
import { CardSurface } from "./Card"

interface PlayerSelectorProps {
    display?: boolean
    onChange?: (players: number) => void
}

export function PlayerSelector({ display = false, onChange }: PlayerSelectorProps) {
    const [selectedPlayers, setSelectedPlayers] = useState<number>(0)

    const handleSelect = (num: number) => {
        setSelectedPlayers(num)
        onChange?.(num)
    }

    return (
        <div
            className={`transform transition-all duration-500 ease-out ${display ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <CardSurface className="w-fit rounded-[5px]">
                <h2 className="text-[#8B4513] text-xl font-bold mb-6">
                    Select number of players
                </h2>
                <div className="flex justify-center gap-8">
                    {[1, 2, 3, 4].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleSelect(num)}
                            className={`w-12 h-10 flex items-center justify-center text-xl font-bold rounded-[5px] border border-[#8B4513] border-solid transition-colors ${selectedPlayers === num
                                    ? "bg-[#8B4513] text-[#e8d5c4]"
                                    : "text-[#8B4513] hover:bg-[#8B4513] hover:text-[#e8d5c4]"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </CardSurface>
        </div>
    )
}

