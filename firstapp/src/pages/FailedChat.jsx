import React from "react";
import HeaderChat from '../HeaderChat';
import { Link } from 'react-router-dom'

const Account = () => {
    return (
        <>
            <header>
                <Link to={'/'}> Список чатов</Link>
                <HeaderChat>Чат не сущкствует</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-all">
            </div>
        </>
    )
}

export default Account;
