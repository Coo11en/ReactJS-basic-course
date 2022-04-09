import React from "react";
import HeaderChat from '../HeaderChat';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

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


    return (
        <>
            <header>
                <Link to={'/'}> Список чатов</Link>
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
            </div>
        </>
    )
}

export default Account;
