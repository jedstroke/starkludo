import React from 'react';
import Dice from './Dice';
import HighlightedDiv from './HighligtedDiv';

interface CenterTileProps {
    color?: string;
    width?: string;
    height?: string;
}

const CenterTile: React.FC<CenterTileProps> = ({ color, width, height }) => {
    return (
        <div className="w-40 h-36 flex justify-between">
            <div className="flex  justify-between w-full border border-[#5cd7f8]">
                <div className="border h-full w-1/4 border-[#5cd7f8]">
                    <div className="border h-1/4 border-[#5cd7f8]"></div>
                    <HighlightedDiv className="bg-[#545841] border h-2/4 border-[#5cd7f8]" ></HighlightedDiv>
                    <div className="border h-1/4 border-[#5cd7f8]"></div>
                </div>

                <div className="border w-2/4 border-[#5cd7f8]">
                    <HighlightedDiv className="bg-[#626b74] border h-1/4 border-[#5cd7f8]"></HighlightedDiv>
                    <div
                        className="border h-[75px] w-[107px] overflow-none bg-white border-[#5cd7f8] flex items-center justify-center relative"

                    >
                        <Dice onRoll={function (numbers: number[]): void {
                            throw new Error('Function not implemented.');
                        } } />
                    </div>
                    <HighlightedDiv className="border h-1/4 bg-[#973d34] border-[#5cd7f8]"></HighlightedDiv>
                </div>
                <div className="border w-1/4 border-[#5cd7f8]">
                    <div className="border h-1/4 border-[#5cd7f8]"></div>
                    <HighlightedDiv className="bg-[#c89252] border h-2/4 border-[#5cd7f8]"></HighlightedDiv>
                    <div className="border h-1/4 border-[#5cd7f8]"></div>
                </div>
            </div>
        </div>
    );
};

export default CenterTile;
