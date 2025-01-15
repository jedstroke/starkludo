"use client"
import { Dice1 } from 'lucide-react'

interface PlayerCardProps {
    playerNumber: number
    avatarUrl: string
    isYourTurn?: boolean
    progress?: number // 0-4
    gemColor?: string
}

export function PlayerCard({
    playerNumber,
    avatarUrl,
    isYourTurn = false,
    progress = 0,
    gemColor = "bg-blue-500"
}: PlayerCardProps) {
    return (
        <div className="w-64 bg-gray-900 rounded-xl p-4 flex flex-col gap-4">
            {/* Avatar */}
            <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-800">
                <img
                    src={avatarUrl || "/placeholder.svg"}
                    alt={`Player ${playerNumber} avatar`}
                    style={{ objectFit: "fill" }}
                    className="object-cover"
                />
            </div>

            {/* Player Name and Gem */}
            <div className="flex items-center gap-2">
                <h2 className="text-white text-2xl font-bold">
                    Player {playerNumber}
                </h2>
                <div className={`w-6 h-6 rounded-md ${gemColor}`} />
            </div>

            {/* Turn Indicator */}
            {isYourTurn && (
                <div className="flex items-center gap-2 text-white">
                    <Dice1 className="w-6 h-6" />
                    <span className="text-xl">Your Turn</span>
                </div>
            )}

            {/* Progress Indicator */}
            <div className="border-2 border-white/10 rounded-lg p-2">
                <div className="flex justify-between">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full transition-colors ${index < progress ? gemColor : "bg-gray-700"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

