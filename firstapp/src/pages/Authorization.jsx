import React from "react";
import HeaderChat from '../components/HeaderChat';
import { Link, Routes, Route } from 'react-router-dom'
import Register from "../components/Register";
import Login from "../components/Login";
import { useSelector } from 'react-redux';

const Authorization = () => {
    const user = useSelector(state => state.currentUser)
    console.log(!user)
    return (
        <>
            <header>
                {/* <Link to={'/'}> Список чатов</Link> */}
                <HeaderChat>Авторизация</HeaderChat>
                {/* <Link to={'/account'}> Аккаунт</Link> */}
            </header>

            {/* {!user ? (<> */}
            <div className="header-all">
                <Register style={{ marginTop: '10px 0 10px 0' }}></Register>
                <Login style={{ marginTop: '10px 0 10px 0' }}></Login>
            </div>
            {/* </>
            ) : (
                <> */}
            {/* <div >
                
            </div>
 */}
            {/* </>)} */}
        </>
    )
}

export default Authorization;
