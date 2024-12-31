

// PlayerZone.tsx
import React from 'react';
import Ring from './Ring';
import HighlightedDiv from './HighligtedDiv';

interface PlayerZoneProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderColor?: string;
    noofPieces?: number | any;
    hightlighed?: boolean
}

const PlayerZone: React.FC<PlayerZoneProps> = ({ width, noofPieces, backgroundColor, borderColor, hightlighed }) => {
    return (
        <HighlightedDiv hightlighed={hightlighed} className={`w-1/3 bg-[${backgroundColor}] border-[6px] border-[${borderColor}] p-8 flex gap-2 items-center justify-center`}>
            <div className="grid grid-cols-2 gap-2 ">
                {Array.from({ length: noofPieces }).map((_, index) => (
                    <Ring key={index} />
                ))}
            </div>
        </HighlightedDiv>
    );
};

export default PlayerZone;
