import React from 'react';
import { Link } from "react-router-dom";

import { Home, Search, AutoAwesomeMotion } from '@mui/icons-material';

export function Sidebar() {
    return (
        <div className='bg-primary w-1/6 h-screen'>
            <ul className="text-secondary text-left px-4 mt-8">
                <li> <Link to="/"><Home /> Home </Link> </li>
                <li> <Link to="/Search"> <Search /> Search </Link> </li>
                <li> <Link to="/Library"> <AutoAwesomeMotion /> Your Library </Link></li>
            </ul>
        </div>
    )
}