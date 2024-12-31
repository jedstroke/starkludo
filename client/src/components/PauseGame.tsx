import React from 'react'
import { FaTimes } from 'react-icons/fa'

const PauseGame = ({ pause, onClose }:any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className='flex flex-col items-center relative min-w-[260px] font-bold bg-secondary text-primary p-12 space-y-4'>
        <FaTimes size={20} className='absolute cursor-pointer right-5 top-5' onClick={onClose} />
        <p className=''>Pause Menu</p>
        <div className='w-full h-[1px] bg-primary'/>
        <button className='border w-full border-primary rounded-sm px-6 py-3'>Stake</button>
        <button className='border w-full border-primary rounded-sm px-6 py-3'>Restart</button>
        <button className='border w-full border-primary rounded-sm px-6 py-3'>Save Progress</button>
        <button className='border w-full border-primary rounded-sm px-6 py-3'>Exit</button>
      </div>
    </div>
  )
}

export default PauseGame