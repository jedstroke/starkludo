/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'
import { OptionSelector } from './OptionSelector'

const BOARD_TYPES = [
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'retro', name: 'Retro' },
    { id: 'web3', name: 'Web3' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'sharp', name: 'Sharp' },
] as const

interface BoardSelectorProps {
    onSelect?: (boardType: string) => void
    onClose: any; 
}

export function BoardSelector({ onSelect, onClose }: BoardSelectorProps) {
    const [selected, setSelected] = useState<string>('')

    const handleSelect = (boardType: string) => {
        setSelected(boardType)
        onSelect?.(boardType)
    }

    return (
        <OptionSelector onClose={onClose} title="Choose a Board To Play With">
            <div className="grid grid-cols-3 gap-6">
                {BOARD_TYPES.map((board) => (
                    <div key={board.id} className="flex flex-col items-center gap-2">
                        <button
                            onClick={() => handleSelect(board.id)}
                            className={`relative p-1 rounded-lg transition-all ${selected === board.id
                                    ? 'ring-4 ring-[#8B4513] ring-opacity-50'
                                    : 'hover:scale-105'
                                }`}
                        >
                            <img
                                src="/game-assets/images/board.svg"
                                alt={`${board.name} board style`}
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        </button>
                        <span className="text-[#8B4513] font-semibold">{board.name}</span>
                    </div>
                ))}
            </div>
        </OptionSelector>
    )
}

