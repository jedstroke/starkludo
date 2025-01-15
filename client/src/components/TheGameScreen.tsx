/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface ComponentsProps { }

const TheGameScreen: React.FC<ComponentsProps> = () => {
    return (
        <div className="flex p-2 box-border w-screen h-screen justify-center relative">
            <div className='box-border w-full pt-10 relative mx-auto max-w-screen-lg h-screen'>
            
            </div>
        </div>
    );
}

export default TheGameScreen;