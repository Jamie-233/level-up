import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
    const { user, logout } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <div>userInfo</div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default User;
