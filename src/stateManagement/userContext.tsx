import React, { useState, useMemo } from 'react';

interface User {
    name: string;
}
export interface UserContextData {
    readonly userState: User;
}

export const UserContext = React.createContext<UserContextData | undefined>(undefined);

type UserProviderProps = { children: React.ReactNode; user: User };

export function UserProvider({ children, user }: UserProviderProps) {
    const [userState, userDispatch] = useState(user);
    const value = useMemo(() => {
        const state = { userState, userDispatch };
        return state;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
