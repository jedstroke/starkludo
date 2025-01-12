/* eslint-disable @typescript-eslint/no-empty-interface */
"use client";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface ComponentsProps {}

const Nav: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
        return (
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Button onClick={() => { navigate('/start') }} label='Single player' variant='secondary' />
                    <Button onClick={() => { navigate('/start') }} label='Multiplayer' variant='secondary' />
                    <Button onClick={() => { navigate('/account') }} label='Account' variant='secondary' />
                    <Button onClick={() => { navigate('/leaderboard') }} label='Leaderboard' variant='secondary' />
                    <Button onClick={() => { navigate('/toolbox') }} label='Toolbox' variant='secondary' />
                </div>
                <Button label='Connect wallet' variant='rounded' />
            </div>
        );
}

export default Nav;