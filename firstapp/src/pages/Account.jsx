import React from "react";
import HeaderChat from '../components/HeaderChat';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { logoutInitiate } from "../redux/reducers/actions";

const Account = () => {

    const [interest, setInterest] = useState('');

    const interests = useSelector(state => state.profile.interests
    )
    const dispatch = useDispatch()

    const addInterest = (interest) => {
        const object = {
            id: interests[interests.length - 1].id + 1,
            interest
        }
        dispatch({ type: 'addInterest', payload: object })
    }

    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }


    return (
        <>
            <header>
                <Link to={'/chats'}> Список чатов</Link>
                <HeaderChat>Аккаунт</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-all">
                <h3>Интересы</h3>
                {interests.map((interestAll) => (
                    <div className="chkBox" key={interestAll.id}>
                        <input type='checkbox' />
                        <span>
                            {interestAll.interest}
                        </span>
                    </div>
                ))}

                <form onSubmit={(e) => addInterest(interest, e.preventDefault(), setInterest(''))}>
                    <input type="text" placeholder="Другое" value={interest} onChange={(e) => setInterest(e.target.value)} />
                    <button type="submit">Добавить</button>
                </form>

                <Link style={{ color: 'black', textDecoration: 'none', padding: '10px', display: 'block', backgroundColor: 'grey', width: '250px', margin: '20px auto', textAlign: 'center' }} to={'/gists'}> Репозитории пользователей</Link>
                <button onClick={handleAuth}>Выход</button>

            </div>
        </>
    )
}

export default Account;
