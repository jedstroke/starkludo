import React from 'react'

interface CardSurfaceProps {
    children: React.ReactNode
    className?: string
}

export function CardSurface({ children, className = "" }: CardSurfaceProps) {
    return (
        <div className={`bg-[#e8d5c4] py-4 px-8 shadow-game ${className}`}>
            {children}
        </div>
    )
}

