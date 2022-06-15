import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { UserContext } from '../../stateManagement/userContext';

export function Header() {
    const user = React.useContext(UserContext);
    return (
        <div className="bg-ligtherPrimary w-full">
            <div className="flex justify-between mt-2 px-8">
                <div className="flex">
                    <NavLink to="/" className="">
                        <div className="rounded-full bg-primary mr-2 align-center flex justify-center w-8 h-8 p-4 items-center">
                            <ArrowBackIos className="w-1 text-xs text-secondary" />
                        </div>
                    </NavLink>
                    <NavLink to="/" className="">
                        <div className="rounded-full bg-primary mr-2 align-center flex justify-center  w-5 h-5  p-4 items-center">
                            <ArrowForwardIos className="w-2 text-xs text-secondary" />
                        </div>
                    </NavLink>
                </div>
                <h2 className="text-secondary">{user?.userState.name}</h2>
            </div>
        </div>
    );
}
