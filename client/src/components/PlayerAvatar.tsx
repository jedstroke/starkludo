"use client"

interface PlayerAvatarProps {
    avatarSrc: string
    playerNumber: number
    isYourTurn?: boolean
    gem?: string;
    progress?: number
    totalSteps?: number
    className?: string
}

export function PlayerAvatar({
    avatarSrc,
    playerNumber,
    isYourTurn = false,
    progress = 0,
    gem,
    totalSteps = 4,
    className = ""
}: PlayerAvatarProps) {
    return (
        <div className={`flex flex-col bg-black bg-opacity-50 p-2 rounded-sm items-center gap-3 ${className}`}>
            {/* Avatar Image */}
            <div className="relative">
                <img
                    src={avatarSrc || "/placeholder.svg"}
                    alt={`Player ${playerNumber}`}
                    width={60}
                    className="object-contain"
                />
            </div>

            {/* Player Info */}
            <div className="flex items-center gap-2">
                <span className="text-white text-sm">
                    Player {playerNumber}
                </span>
                <img
                    src={gem}
                    alt="Player gem"
                    width={20}
                    className="object-contain"
                />
            </div>

            {/* Turn Indicator */}
            {isYourTurn && (
                <div className="flex items-center gap-3">
                    <img
                        src="/game-assets/images/dice-1.png"
                        alt="Dice"
                        width={20}
                        className="object-contain"
                    />
                    <span className="text-white text-2xl font-bold">
                        Your Turn
                    </span>
                </div>
            )}

            {/* Progress Indicator */}
            <div className="border-2 border-white rounded-full p-2">
                <div className="flex gap-2">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full transition-colors ${index < progress ? "bg-blue-500" : "bg-blue-900"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

