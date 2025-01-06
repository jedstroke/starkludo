/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface HomeScreenProps { }

const HomeScreen: React.FC<HomeScreenProps> = () => {
    return (
        <div className='flex w-screen border-red-50 border border-solid h-screen justify-center'>
            <div className='flex-col border-red-50 border'>
                <div className='flex w-fit relative items-center justify-start'>
                    <img src="/game-assets/images/dice-bg.png" className='w-24 h-24 absolute' /><p className='font-bold bg-text'>Stark</p>
                </div>
                <div className='flex w-fit justify-end items-center gap-3'>
                    <img src="/game-assets/images/dice-bg.png" className='w-24 h-24' /><p className='font-bold bg-text'>Ludo</p>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;