import React from 'react';
import { Home, Search, AutoAwesomeMotion } from '@mui/icons-material';

export function Sidebar() {
    return (
        <div className='bg-primary w-1/6 h-screen'>
            <ul className="text-secondary text-left px-4 mt-8">
                <li> <Home /> Home </li>
                <li> <Search /> Search </li>
                <li> <AutoAwesomeMotion /> Your Library </li>
            </ul>
        </div>
    )
}