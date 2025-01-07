/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react'
import Button from './Button';
import play from '../assets/images/button-icon/dice-play.svg'

interface ComponentsProps {}

const StartGameScreen: React.FC<ComponentsProps> = () => {
    const [pageTransition, setPageTransition] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPageTransition(true);
        }, 100); 
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="flex w-screen h-screen justify-center relative">
            <div className='w-[1024px] pt-10 relative mx-auto max-w-screen-lg h-screen'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Button label='Single player' variant='secondary' />
                        <Button label='Multiplayer' variant='secondary' />
                        <Button label='Account' variant='secondary' />
                        <Button label='Leaderboard' variant='secondary' />
                        <Button label='Toolbox' variant='secondary' />
                    </div>
                    <Button label='Connect wallet' variant='rounded' />
                </div>
                <div className='flex absolute justify-between w-full bottom-10'>
                    <div className={`transition-transform duration-1000 ${pageTransition ? 'translate-x-0' : 'translate-x-[100%]'
                        }`}><Button variant='primary' icon={<img src={play} className='w-[23px] h-auto' />} label='New game' />
                    </div>
                    <div className='flex gap-2'>
                        <Button label='Setting' variant='secondary' />
                        <Button label='Help' variant='secondary' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StartGameScreen;