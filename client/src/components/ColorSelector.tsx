/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'
import { OptionSelector } from './OptionSelector'

const COLORS = [
    { id: 'blue', name: 'Blue', src: '/game-assets/images/gem-blue.svg' },
    { id: 'Lemon', name: 'Lemon', src: '/game-assets/images/gem-lemon.svg' },
    { id: 'orange', name: 'Orange', src: '/game-assets/images/gem-orange.svg' },
    { id: 'pink', name: 'Pink', src:'/game-assets/images/gem-pink.svg' },
] as const

interface ColorSelectorProps {
    onSelect?: (colorId: string) => void
    onClose: any
}

export function ColorSelector({ onSelect, onClose }: ColorSelectorProps) {
    const [selected, setSelected] = useState<string>('')

    const handleSelect = (colorId: string) => {
        setSelected(colorId)
        onSelect?.(colorId)
    }

    return (
        <OptionSelector onClose={onClose} title="Choose Your Starting Colour">
            <div className="flex justify-center gap-16">
                {COLORS.map((color) => (
                    <div key={color.id} className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => handleSelect(color.id)}
                            className={`relative transition-transform ${selected === color.id
                                    ? 'ring-4 ring-[#8B4513] ring-opacity-50 rounded-lg'
                                    : 'hover:scale-110'
                                }`}
                        >
                            <img
                                src={color.src}
                                alt={`${color.name} gem`}
                                width={80}
                                height={80}
                                className="rounded-lg"
                            />
                        </button>
                        <span className="text-[#8B4513] text-xl font-bold">{color.name}</span>
                    </div>
                ))}
            </div>
        </OptionSelector>
    )
}

