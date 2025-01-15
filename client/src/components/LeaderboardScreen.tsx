/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Leaderboard } from './Leaderboard';
import Nav from './Nav';

interface ComponentsProps { }

const AccountScreen: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
    return (
        <div className="flex p-2 box-border w-screen h-screen justify-center relative">
            <div className='box-border w-full pt-10 relative mx-auto max-w-screen-lg h-screen'>
                <Nav />
                <Leaderboard height={"45vh"} />
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

export default AccountScreen;