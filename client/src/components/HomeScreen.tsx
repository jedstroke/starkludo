/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react';
import play from '../assets/images/button-icon/play.svg'
import Button from './Button';

interface HomeScreenProps { }

const HomeScreen: React.FC<HomeScreenProps> = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
        await document.fonts.ready;
        setTimeout(() => {
            setFontLoaded(true);
        }, 1000);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    return (
        <div className="flex w-screen h-screen justify-center">
            <div
                style={{
                    opacity: fontLoaded ? 1 : 0,
                    pointerEvents: fontLoaded ? "auto" : "none",
                    transition: "opacity 1s ease-in-out",
                }}
                className="flex-col justify-center relative pt-20 w-[1024px] max-w-screen-lg mx-auto"
            >
                <div className="flex w-full h-fit items-center justify-start">
                    <p className="font-bold bg-text relative pt-5 flex">
                        <span className="z-1">Stark</span>
                        <img
                            src="/game-assets/images/dice-bg.png"
                            className="w-36 h-36 absolute -right-[150px] top-20 z-[-0]"
                        />
                    </p>
                </div>
                <div className="flex w-full h-fit justify-end items-center gap-3">
                    <img
                        src="/game-assets/images/dice-bg.png"
                        className="w-36 relative -top-20 h-36"
                    />
                    <p className="font-bold bg-text relative -top-20">Ludo</p>
                </div>
                <div className='flex justify-center h-fit items-center w-full absolute bottom-16'>
                <Button icon={<img src={play} className='w-[23px] h-auto' />} variant='primary' label='Launch game' />
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
