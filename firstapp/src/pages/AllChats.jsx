import React, { useState } from "react";
import HeaderChat from '../components/HeaderChat';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../redux/reducers/chatSelector/selector";

const AllChats = () => {

    const allChats = useSelector(chatSelector)
    const dispatch = useDispatch()

    const deleteChat = (id) => {
        dispatch({ type: 'deleteChat', payload: id })
    }

    const addItem = (e) => {
        e.preventDefault();
        const copy = { id: allChats[allChats.length - 1].id + 1, author: value }
        dispatch({ type: 'addChat', payload: copy })
        setValue('')
    }

    const [value, setValue] = useState('')

    return (
        <>
            <header>
                <Link to={'/chats'}> Список чатов</Link>
                <HeaderChat>Чаты</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-all" >
                {allChats.map((chatsall) => (<div className="item-chat" key={chatsall.id}>
                    <img className="list-avatar" src="" alt="avatar" />
                    <Link to={`/chat/${chatsall.id}`} className="list-msg" >{chatsall.author} </Link>
                    <img className="list-close" src="" alt="close" onClick={() => deleteChat(chatsall.id)} />
                </div>))}
            </div>

            <div className="conteiner">
                <form onSubmit={addItem}>
                    <input className="input-style" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Имя автора' type=""></input>
                    <button className="btn-style" type='submit'>Отправить</button>
                </form>
            </div>
        </>
    )
}

export default AllChats;