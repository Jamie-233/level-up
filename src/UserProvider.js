import { useState, useCallback } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        id: 1,
        name: 'jamie',
        email: 'xxxx@email.com',
    });

    const logout = useCallback(() => {
        setUserInfo({ id: null, name: '', email: '' });
    }, []);

    return (
        <UserContext.Provider value={{ user: userInfo, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
