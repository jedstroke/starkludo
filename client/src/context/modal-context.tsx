"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"

interface ModalContextType {
    showModal: (content: ReactNode) => void
    hideModal: () => void
    isOpen: boolean
    modalContent: ReactNode | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode | null>(null)

    const showModal = useCallback((content: ReactNode) => {
        setModalContent(content)
        setIsOpen(true)
    }, [])

    const hideModal = useCallback(() => {
        setIsOpen(false)
        setModalContent(null)
    }, [])

    return (
        <ModalContext.Provider value={{ showModal, hideModal, isOpen, modalContent }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}

