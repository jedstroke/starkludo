"use client"

import closeBtn from "../assets/images/button-icon/close-btn-toast.svg"
import { CardSurface } from "./Card"
import { Account, defaultAccounts } from "../lib/mock-accounts"
import { useNavigate } from "react-router-dom"

interface AccountTableProps {
    height?: string | number
    accounts?: Account[]
    onClose?: () => void
    onSelect?: (account: Account) => void
    onAdd?: () => void
}

export function AccountTable({
    height = "600px",
    accounts = defaultAccounts,
    onClose,
    onSelect,
    onAdd
}: AccountTableProps) {
    const navigate = useNavigate();
    return (
        <CardSurface className="bg-[#DAC29C] mt-2">
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[#8B4513] text-xl font-bold">
                        Choose An Account To Play With
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[#8B4513] hover:opacity-80 transition-opacity"
                    >
                        <img src={closeBtn} onClick={() => navigate('/start')} className="h-4 w-4" />
                    </button>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 pb-2 border-b-2 border-[#8B4513]/20 text-[#8B4513] font-bold">
                    <div>No.</div>
                    <div className="col-span-2">Account Name</div>
                    <div>Point</div>
                    <div>Rank</div>
                </div>

                {/* Table Body */}
                <div
                    className="overflow-y-auto"
                    style={{
                        height: typeof height === 'number' ? `${height}px` : height,
                        maxHeight: "calc(100vh - 200px)"
                    }}
                >
                    {accounts.map((account, index) => (
                        <div
                            key={account.id}
                            className={`grid grid-cols-5 gap-4 py-2 items-center text-[#8B4513]`}
                        >
                            <div className="font-bold">{account.number}</div>
                            <div className="col-span-2">{account.name}</div>
                            <div>{account.points || "-----"}</div>
                            <div className="flex justify-between items-center">
                                <span>{account.rank || "-----"}</span>
                                <button
                                    onClick={() => onSelect?.(account)}
                                    className="px-4 py-1 border border-[#8B4513] border-solid rounded-md hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors"
                                >
                                    {account.isNew ? "Create" : "Select"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Account Button */}
                <button
                    onClick={onAdd}
                    className="mt-6 px-6 py-2 border border-solid border-[#8B4513] rounded-md text-[#8B4513] hover:bg-[#8B4513] hover:text-[#e8d5c4] transition-colors inline-flex items-center gap-2 self-start"
                >
                    Add Account <span className="text-xl leading-none">+</span>
                </button>
            </div>
        </CardSurface>
    )
}

