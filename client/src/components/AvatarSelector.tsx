/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'
import { OptionSelector } from './OptionSelector'

const AVATARS = [
  { id: 'explorer', src: '/game-assets/images/avatar-1.png' },
  { id: 'professional', src: '/game-assets/images/avatar-2.png' },
  { id: 'casual', src: '/game-assets/images/avatar-3.png' },
  { id: 'cute', src: '/game-assets/images/avatar-4.png' },
] as const

interface AvatarSelectorProps {
  onSelect?: (avatarId: string) => void
  onClose: any
}

export function AvatarSelector({ onSelect, onClose }: AvatarSelectorProps) {
  const [selected, setSelected] = useState<string>('')

  const handleSelect = (avatarId: string) => {
    setSelected(avatarId)
    onSelect?.(avatarId)
  }

  return (
    <OptionSelector onClose={onClose} title="Choose An Avatar To Play With">
      <div className="flex justify-center gap-8">
        {AVATARS.map((avatar) => (
          <button
            key={avatar.id}
            onClick={() => handleSelect(avatar.id)}
            className={`relative transition-transform ${selected === avatar.id
              ? 'ring-4 ring-[#8B4513] ring-opacity-50 rounded-lg'
              : 'hover:scale-110'
              }`}
          >
            <img
              src={avatar.src}
              alt={`${avatar.id} avatar`}
              width={100}
              height={100}
              className="rounded-lg"
            />
          </button>
        ))}
      </div>
    </OptionSelector>
  )
}

