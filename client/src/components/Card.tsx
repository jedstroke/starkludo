import React from 'react'

interface CardSurfaceProps {
    children: React.ReactNode
    className?: string
}

export function CardSurface({ children, className = "" }: CardSurfaceProps) {
    return (
        <div className={`bg-[#DAC29C] py-4 px-8 shadow-game ${className}`}>
            {children}
        </div>
    )
}

