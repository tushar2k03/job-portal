import { Avatar, Indicator } from '@mantine/core';
import {Bell,Anchor, Settings } from 'tabler-icons-react';
import NavLinks from './NavLinks';
const Header =() => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
        <div className="flex gap-3 items-center text-bright-sun-400">
            <Anchor className="h-10 w-10"/> 
            <div className='text-3xl font-semibold'>NextHire</div>
        </div>
        <NavLinks/>
        <div className='flex gap-3 items-center'>
            <div className='flex items-center gap-3'>
                <div>
                    Tushar
                </div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Settings/>
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator color="brightSun.4" offset={6} size={8} processing>
                    <Bell/>
                </Indicator>
            </div>
        </div>
    </div>
}
export default Header;