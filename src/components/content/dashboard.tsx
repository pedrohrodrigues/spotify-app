import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { UserContext } from '../../stateManagement/userContext';

export function Dashboard() {
    const user = React.useContext(UserContext);
    return (
        <div className="bg-ligtherPrimary w-5/6">
            <div className="flex justify-between mt-2 px-4">
                <div className="flex">
                    <NavLink to="/" className="">
                        <div className="rounded bg-primary mr-2 align-center flex justify-center w-8 h-8 items-center">
                            <ArrowBackIos className="w-6 text-secondary" />
                        </div>
                    </NavLink>
                    <ArrowForwardIos className="w-6 text-secondary rounded bg-primary" />
                </div>
                <h2 className="text-secondary">{user?.userState.name}</h2>
            </div>
        </div>
    );
}
