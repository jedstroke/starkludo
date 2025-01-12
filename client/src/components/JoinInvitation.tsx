import React from 'react'
import { CardSurface } from './Card';

interface ComponentsProps {
    code?: string;
    onChange?: (e: string) => void;
    display: boolean;
}

const JoinInvitation: React.FC<ComponentsProps> = ({
    code = "zKhsoUicav",
    onChange,
    display = false
}) => {
    return (
        <CardSurface className={`w-fit rounded-[5px] transform transition-all duration-500 ease-out ${display ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}>
            <h2 className="text-[#8B4513] text-xl font-bold mb-4">
                Invitation code
            </h2>
            <div className='flex gap-2'>
                <input type="text" onChange={(e) => {
                    onChange && onChange(e.target.value);
                }} defaultValue={code} className='bg-[#044F5D] text-white box-border py-3 px-6 h-[px]' />
            </div>
        </CardSurface>
    );
}

export default JoinInvitation;