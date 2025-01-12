"use client"

import { useState } from "react"
import { CardSurface } from "./Card"

interface ColorSelectorProps {
    display?: boolean
    value: string;
    onChange?: (color: string) => void
}

export function ColorSelector({ display = false, onChange, value }: ColorSelectorProps) {
    const [selectedColors, setSelectedColors] = useState<string>(value)

    const handleSelect = (color: string) => {
        setSelectedColors(color)
        onChange?.(color)
    }

    return (
        <div
            className={`transform mt-4 transition-all duration-500 ease-out ${display ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
        >
            <CardSurface className="w-fit rounded-[5px]">
                <h2 className="text-[#8B4513] text-xl font-bold mb-6">
                    Select colors
                </h2>
                <div className="flex justify-center gap-8">
                    {["pink", "lemon", "orange", "blue"].map((data, num) => (
                        <img
                            key={num}
                            src={`./game-assets/images/gem-${data}.svg`}
                            onClick={() => handleSelect(data)}
                            className={`h-auto flex items-center p-2 w-9 justify-center text-xl font-bold rounded transition-colors ${selectedColors === data
                                ? "border border-[#8B4513] border-solid"
                                    : "border-none"
                                }`}
                        />
                    ))}
                </div>
            </CardSurface>
        </div>
    )
}

