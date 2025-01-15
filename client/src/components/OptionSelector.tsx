/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import closeBtn from "../assets/images/button-icon/close-btn-toast.svg"
import { CardSurface } from "./Card"

interface OptionSelectorProps {
    title: string
    onClose: any;
    children: React.ReactNode
}

export function OptionSelector({
    title,
    children,
    onClose
}: OptionSelectorProps) {
    return (
        <CardSurface className="h-[58vh] mt-4 overflow-y-auto">
            <div className="flex flex-col min-h-[200px]">
                <div className="flex pb-5 border-b border-b-[#8B4513] border-b-solid justify-between items-center mb-8">
                    <h2 className="text-[#8B4513] text-xl font-bold">
                        {title}
                    </h2>
                    <button
                        onClick={() => onClose()}
                        className="text-[#8B4513] hover:opacity-80 transition-opacity"
                    >
                        <img src={closeBtn} className="h-4 w-4" />
                    </button>
                </div>
                {children}
            </div>
        </CardSurface>
    )
}

