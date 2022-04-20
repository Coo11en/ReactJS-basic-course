import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gistsSelector } from "../redux/reducers/gistsSelector/gistsSelector";
import { loadGists } from "../redux/reducers/gistsReducer";
import HeaderChat from '../components/HeaderChat';
import { Link, useParams } from 'react-router-dom';

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(gistsSelector)
    const loading = useSelector(state => state.gists.loading)
    const error = useSelector(state => state.gists.error)

    useEffect(() => {
        dispatch(loadGists())
    }, [])

    const handleError = () => {
        dispatch(loadGists())
    }

    if (loading) {
        return (
            <div className="App" sx={{ position: 'relative' }}>

                <header>
                    <Link to={'/'}> Список чатов</Link>
                    <HeaderChat>Чат с пользователем</HeaderChat>
                    <Link to={'/account'}> Аккаунт</Link>
                </header>
                <div className="conteiner">
                    <div className="header-all">
                        <h2> Пождите идет загрузка...</h2>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="App" sx={{ position: 'relative' }}>

                <header>
                    <Link to={'/chats'}> Список чатов</Link>
                    <HeaderChat>Чат с пользователем</HeaderChat>
                    <Link to={'/account'}> Аккаунт</Link>
                </header>
                <div className="conteiner">
                    <div className="header-all">
                        Произошла ошибка. Нажмите кнопку "Обновить данные"
                        <button onClick={handleError}>Обновить данные</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="App" sx={{ position: 'relative' }}>

            <header>
                <Link to={'/chats'}> Список чатов</Link>
                <HeaderChat>Чат с пользователем</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>
            <div className="conteiner">
                <div className="header-all">

                    {
                        gists.map((item) => (
                            <div style={{ padding: '0 0 10px 0', alignItems: 'center' }} key={item.owner.id}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ padding: '0 10px 0 0' }}>
                                        Логин:
                                    </h3>
                                    <p>
                                        {item.owner.login}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h3 style={{ padding: '0 10px 0 0' }}>
                                        Пулл реквест:
                                    </h3>
                                    <p>
                                        {item.git_pull_url}

                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div >
            </div >
        </div >
    )
}

export default Gists