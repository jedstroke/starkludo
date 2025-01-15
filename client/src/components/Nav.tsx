/* eslint-disable @typescript-eslint/no-empty-interface */
"use client";
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

interface ComponentsProps {}

const Nav: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
        return (
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Button active={location.pathname == "/start"} onClick={() => { navigate('/start') }} label='Single player' variant='secondary' />
                    <Button active={location.pathname == "/start"} onClick={() => { navigate('/start') }} label='Multiplayer' variant='secondary' />
                    <Button active={location.pathname == "/account"} onClick={() => { navigate('/account') }} label='Account' variant='secondary' />
                    <Button active={location.pathname == "/leaderboard"} onClick={() => { navigate('/leaderboard') }} label='Leaderboard' variant='secondary' />
                    <Button active={location.pathname == "/toolbox"} onClick={() => { navigate('/toolbox') }} label='Toolbox' variant='secondary' />
                </div>
                <Button label='Connect wallet' variant='rounded' />
            </div>
        );
}

export default Nav;