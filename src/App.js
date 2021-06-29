import {getUsers} from './services/api';
import {useEffect, useState} from 'react';
import Users from './components/users/Users';

export default function App() {
    const [users, setUsers] = useState([]);
    const [chosenUser, setChosenUser] = useState(null);

    useEffect(() => {
        getUsers()
            .then(responce => setUsers(responce))
    }, [])

    const showInfo = (usik) => {
        setChosenUser(usik)
    }

    return (
        <div>
            <Users items={users} showInfo={showInfo}/>
            <hr/>
            {chosenUser &&
            <div>
                <div>PHONE: {chosenUser.phone}</div>
                <div>PHONE: {chosenUser.phone}</div>
                <div>PHONE: {chosenUser.phone}</div>
            </div>
            }
        </div>
    );
};


