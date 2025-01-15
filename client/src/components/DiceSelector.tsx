/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'
import { OptionSelector } from './OptionSelector'

const DICE_TYPES = [
    { id: 'golden', name: 'Golden Dice', src: '/game-assets/images/dice-1.png' },
    { id: 'retro', name: 'Retro Dice', src: '/game-assets/images/dice-2.png' },
    { id: 'unique', name: 'Unique Dice', src: '/game-assets/images/dice-3.png' },
] as const

interface DiceSelectorProps {
    onSelect?: (diceType: string) => void
    onClose: any
}

export function DiceSelector({ onSelect, onClose }: DiceSelectorProps) {
    const [selected, setSelected] = useState<string>('')

    const handleSelect = (diceType: string) => {
        setSelected(diceType)
        onSelect?.(diceType)
    }

    return (
        <OptionSelector onClose={onClose} title="Choose Dice To Play With">
            <div className="flex justify-center gap-16">
                {DICE_TYPES.map((dice) => (
                    <div key={dice.id} className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => handleSelect(dice.id)}
                            className={`relative transition-transform ${selected === dice.id
                                ? 'ring-4 ring-[#8B4513] ring-opacity-50 rounded-lg p-2'
                                : 'hover:scale-110'
                                }`}
                        >
                            <img
                                src={dice.src}
                                alt={dice.name}
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                        </button>
                        <span className="text-[#8B4513] text-xl font-bold">{dice.name}</span>
                    </div>
                ))}
            </div>
        </OptionSelector>
    )
}

