/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Settings from './Settings';

interface ComponentsProps { }

const SettingsScreen: React.FC<ComponentsProps> = () => {
    const navigate = useNavigate();
    return (
        <div className="flex p-2 box-border w-screen h-screen justify-center relative">
            <div className='box-border w-full pt-10 relative mx-auto max-w-screen-lg h-screen'>
                <Nav />
                <Settings />
                <div className='flex absolute justify-end w-full bottom-10'>
                    <div className='flex gap-2'>
                        <Button onClick={() => {
                            navigate('/')
                        }} label='Back' variant='secondary' />
                        <Button
                            active
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

export default SettingsScreen;