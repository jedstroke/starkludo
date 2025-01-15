"use client"

import { useEffect } from "react"
import { X } from 'lucide-react'
import { useModal } from "../context/modal-context"

export function Modal() {
  const { isOpen, hideModal, modalContent } = useModal()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") hideModal()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, hideModal])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={hideModal}
      />
      
      {/* Modal */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {modalContent}
      </div>
    </div>
  )
}

