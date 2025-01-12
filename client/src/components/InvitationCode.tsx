import React from 'react'
import { CardSurface } from './Card';
import copy from  '../assets/images/button-icon/copy-icon.svg'
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { toastTheme } from '../toast-theme';

interface ComponentsProps {
    code?: string
    display: boolean
}

const InvitationCode: React.FC<ComponentsProps> = ({
    code = "zKhsoUicav",
    display
}) => {
        return (
            <CardSurface className={`w-fit mt-4 rounded-[5px] transform transition-all duration-500 ease-out ${display ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}>
                <h2 className="text-[#8B4513] text-xl font-bold mb-4">
                    Invitation code
                </h2>
                <div className='flex gap-2'>
                    <p className='text-[#044F5D] font-normal'>{code}</p> <CopyToClipboard onCopy={() => toast.success("Copied to clipboard", toastTheme)} text={code}><img className='cursor-pointer' src={copy} alt='copy' /></CopyToClipboard>
                </div>
            </CardSurface>
        );
}

export default InvitationCode;