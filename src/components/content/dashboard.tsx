import React from 'react';
import { UserContext } from '../../stateManagement/userContext';

export function Dashboard() {
    const user = React.useContext(UserContext);
    return (
        <div className="bg-ligtherPrimary w-5/6">
            <h2 className="text-secondary">{user?.userState.name}</h2>
        </div>
    );
}
