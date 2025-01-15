"use client"

import { useNavigate } from "react-router-dom"
import closeBtn from "../assets/images/button-icon/close-btn-toast.svg"
import { CardSurface } from "./Card"
import { useModal } from "../context/modal-context"

interface PauseMenuProps {
    onClose?: () => void
    onStake?: () => void
    onRestart?: () => void
    onSave?: () => void
    onExit?: () => void
}

export function PauseMenu({
    onClose,
    onStake,
    onRestart,
    onSave,
    onExit
}: PauseMenuProps) {
    const navigate = useNavigate();
    const {hideModal} = useModal();
    return (
        <CardSurface className="w-[300px]">
            <div className="flex flex-col min-h-[200px]">
                {/* Header */}
                <div className="flex border-b pb-5 border-b-solid border-b-[#8B4513] justify-between items-center mb-8">
                    <h2 className="text-[#8B4513] text-xl font-bold">
                        Pause menu
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[#8B4513] hover:opacity-80 transition-opacity"
                    >
                        <img src={closeBtn} onClick={onClose} className="h-4 w-4" />
                    </button>
                </div>

                {/* Menu Options */}
                <div className="space-y-4">
                    <button
                        onClick={onStake}
                        className="w-full p-3 text-[#8B4513] border border-solid border-[#8B4513] rounded-lg hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors"
                    >
                        Stake
                    </button>
                    <button
                        onClick={onRestart}
                        className="w-full p-3 text-[#8B4513] border border-solid border-[#8B4513] rounded-lg hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors"
                    >
                        Restart
                    </button>
                    <button
                        onClick={onSave}
                        className="w-full p-3 text-[#8B4513] border border-solid border-[#8B4513] rounded-lg hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors"
                    >
                        Save Progress
                    </button>
                    <button
                        onClick={() => {
                            hideModal()
                            navigate('/')
                        }}
                        className="w-full p-3 text-[#8B4513] border border-solid border-[#8B4513] rounded-lg hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors"
                    >
                        Exit
                    </button>
                </div>
            </div>
        </CardSurface>
    )
}

