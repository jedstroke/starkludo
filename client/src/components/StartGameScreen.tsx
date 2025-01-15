/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react'
import Button from './Button';
import play from '../assets/images/button-icon/dice-play.svg'
import brownPlay from '../assets/images/button-icon/brown-play.svg'
import { useNavigate } from 'react-router-dom';
import { PlayerSelector } from './PlayerSelector';
import InvitationCode from './InvitationCode';
import JoinInvitation from './JoinInvitation';
import { ColorSelector } from './SelectColor';
import Nav from './Nav';
import Ludo from './Ludo';

interface ComponentsProps { }

const StartGameScreen: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
    const [pageTransition, setPageTransition] = useState(false);
    const [isNewGame, setStartNewGame] = useState({ clicked: false, isToggle: false });
    const [isJoinGame, setJoinGame] = useState({ clicked: false, isToggle: false });
    const [isResumeGame, setResumeGame] = useState(false);
    const [colorSelected, selectColor] = useState<string>("");
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [playGame, setPlayGame] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setPageTransition(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="flex p-2 box-border w-screen h-screen justify-center relative">
            <div className='box-border w-full pt-10 relative mx-auto max-w-screen-lg h-screen'>
                <div className='mx-auto'>
                {playGame && <Ludo />}
                </div>
                {!playGame && <><Nav />
                    <div className='mt-4 flex gap-2'>
                        {isNewGame.clicked && <Button active={isNewGame.isToggle} onClick={() => {
                            setStartNewGame({ ...isNewGame, isToggle: !isNewGame.isToggle })
                            setJoinGame({ ...isJoinGame, isToggle: false })
                        }} icon={<img src={brownPlay} className={`${isNewGame.isToggle ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='New game' variant='secondary' />}

                        {isJoinGame.clicked && <Button active={isJoinGame.isToggle} onClick={() => {
                            setJoinGame({ ...isJoinGame, isToggle: !isJoinGame.isToggle })
                            setStartNewGame({ ...isNewGame, isToggle: false })
                        }} icon={<img src={brownPlay} className={`${isJoinGame.isToggle ? "rotate-90" : "rotate-0"} transform transition-all duration-500 w-[23px] h-auto`} />} label='Join game' variant='secondary' />}

                        {isResumeGame && <Button icon={<img src={brownPlay} className='w-[23px] h-auto' />} label='Resume game' variant='secondary' />}
                    </div>
                    <div className='pt-4 flex-col'>
                        {!isNewGame.isToggle && <JoinInvitation display={isJoinGame.isToggle} />}
                        {!isJoinGame.isToggle && <PlayerSelector onChange={setNumberOfPlayers} display={isNewGame.isToggle} />}
                        {!isNewGame.isToggle && <ColorSelector value={colorSelected} onChange={selectColor} display={isJoinGame.isToggle} />}
                        {!isJoinGame.isToggle && <InvitationCode display={isNewGame.isToggle} />}
                         <br />
                        {isJoinGame.isToggle || isNewGame.isToggle && <Button variant='primary' onClick={() => {
                            setPlayGame(true)
                        }} icon={<img src={play} className='w-[23px] h-auto' />} label='Start game' />}
                    </div>

                    <div className='flex absolute justify-between w-full bottom-10'>
                        <div className={`transition-transform duration-700 delay-0 ${pageTransition ? 'translate-x-0' : 'translate-x-[100%]'
                            }`}><Button variant='primary' onClick={() => {
                                setStartNewGame({ ...isNewGame, clicked: true });
                                setJoinGame({ ...isJoinGame, clicked: true });
                            }} icon={<img src={play} className='w-[23px] h-auto' />} label='Play game' />
                        </div>
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
                    </div></>}
            </div>
        </div>
    );
}

export default StartGameScreen;