/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import brownPlay from '../assets/images/button-icon/brown-play.svg'
import Nav from './Nav';
import { BoardSelector } from './BoardSelector';
import { AvatarSelector } from './AvatarSelector';
import { DiceSelector } from './DiceSelector';
import { ColorSelector } from './ColorSelector';

interface ComponentsProps { }

type Tabs = "select-board" | "your-avatar" | "choose-dice" | "pick-colour" | "none"; 

const ToolboxScreen: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState<Tabs>("none");
    const onClose = () => {
        setTab("none");
    }
    return (
        <div className="flex p-2 box-border w-screen h-screen justify-center relative">
            <div className='box-border w-full pt-10 relative mx-auto max-w-screen-lg h-screen'>
                <Nav />
                {/* Tab switch */}
                <div className='flex mt-4 gap-6 justify-start'>
                    <Button active={tab == "select-board"} onClick={() => { setTab("select-board") }} icon={<img src={brownPlay} className={`${tab == "select-board" ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='Select board' variant='secondary' />

                    <Button active={tab == "your-avatar"} onClick={() => { setTab("your-avatar") }} icon={<img src={brownPlay} className={`${tab == "your-avatar" ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='Your avatar' variant='secondary' />

                    <Button active={tab == "choose-dice"} onClick={() => { setTab("choose-dice") }} icon={<img src={brownPlay} className={`${tab == "choose-dice" ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='Choose dice' variant='secondary' />

                    <Button active={tab == "pick-colour"} onClick={() => { setTab("pick-colour") }} icon={<img src={brownPlay} className={`${tab == "pick-colour" ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='Pick colour' variant='secondary' />
                </div>
                {/* Tabs */}
                <div>
                    {tab == "select-board" && <BoardSelector onClose={onClose} />}
                    {tab == "your-avatar" && <AvatarSelector onClose={onClose} />}
                    {tab == "choose-dice" && <DiceSelector onClose={onClose} />}
                    {tab == "pick-colour" && <ColorSelector onClose={onClose} />}
                </div>
                <div className='flex absolute justify-end w-full bottom-10'>
                    <div className='flex gap-2'>
                        <Button onClick={() => {
                            navigate('/')
                        }} label='Back' variant='secondary' />
                        <Button
                            onClick={() => {
                                navigate('/settings')
                            }} label='Settings' variant='secondary' />
                        <Button label='Help'
                            onClick={() => {
                                navigate('/help')
                            }}
                            variant='secondary' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToolboxScreen;