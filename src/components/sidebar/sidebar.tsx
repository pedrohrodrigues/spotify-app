import React from 'react';
import { NavLink } from "react-router-dom";

import { Home, Search, AutoAwesomeMotion } from '@mui/icons-material';

export function Sidebar() {
    return (
        <div className='bg-primary w-1/6 h-screen'>
            <ul className="text-text text-left px-4 mt-8">
                <li  className="h-10 flex hover:text-secondary text-sm"> <NavLink to="/"   className={({ isActive }) => `${isActive ? "text-secondary " : ""  } w-full h-full flex content-center justify-start gap-4 items-center` } ><Home  className='w-6'/><span>Home</span> </NavLink> </li>
                <li className="h-10 flex hover:text-secondary text-sm"> <NavLink to="/Search" className={({ isActive }) => `${isActive ? "text-secondary " : ""  } w-full h-full flex content-center justify-start gap-4 items-center`  }> <Search className='w-6' /> <span>Search</span> </NavLink> </li>
                <li className="h-10 flex hover:text-secondary text-sm"> <NavLink to="/Library" className={({ isActive }) => `${isActive ? "text-secondary " : ""  } w-full h-full flex content-center justify-start gap-4 items-center`  }> <AutoAwesomeMotion className='w-6' /> <span>Your Library</span> </NavLink></li>
            </ul>
        </div>
    )
}