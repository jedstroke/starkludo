


import React, { CSSProperties, ReactNode } from "react";

interface PathTileProps {
    style?: CSSProperties;
    className?: string;
    bgColor?: string;
    borderColor?: string;
    children?: ReactNode;
    highlighted?: boolean;
    piece?: {
        color: string; // The color or visual identifier of the piece
        playerId: number; // To identify which player's piece it is
    };
}

const PathTile: React.FC<PathTileProps> = ({
    style,
    className = "",
    bgColor = "transparent",
    borderColor = "#5cd7f8",
    children,
    piece,
    highlighted = false,

}) => {
    return (
        <div
            className={`flex items-center justify-center border-none transition-all duration-300 ${highlighted ? "brightness-125" : "brightness-75"
                } ${className}`}
            style={{
                ...style,
                backgroundColor: bgColor,
                borderColor: borderColor,
                borderWidth: ".1px",
                borderStyle: "solid",
                cursor: "pointer",
            }}
        >
            {/* {children} */}
            {piece && (
                <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: piece.color }}
                    title={`Player ${piece.playerId}'s piece`}
                ></div>
            )}
        </div>
    );
};

export default PathTile;

