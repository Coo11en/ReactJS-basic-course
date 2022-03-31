import React, { useState, useRef } from "react";
import HeaderChat from '../HeaderChat';
import { Link, useParams } from 'react-router-dom'

const AllChats = () => {

    const [allChats, setAllChats] = useState([{
        id: 0,
        author: 'rick',
        value: ''
    },
    {
        id: 1,
        author: 'anton',
        value: ''
    },
    {
        id: 2,
        author: 'irina',
        value: ''
    },
    {
        id: 3,
        author: 'kate',
        value: ''
    },
    {
        id: 4,
        author: 'jon',
        value: ''
    },
    {
        id: 5,
        author: 'bill',
        value: ''
    },
    {
        id: 6,
        author: 'suzi',
        value: ''
    },
    {
        id: 7,
        author: 'leo',
        value: ''
    },
    {
        id: 8,
        author: 'josh',
        value: ''
    },
    ])

    const deleteChat = (id) => {
        const saveRes = allChats.filter((item) => item.id !== id)
        setAllChats(saveRes)
    }

    const addItem = (value) => {
        let copy = [...allChats];
        copy = [...allChats, { id: allChats.length + 1, author: value }]
        setAllChats(copy)
    }

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value)
    }

    return (
        <>
            <header>
                <Link to={'/'}> Список чатов</Link>
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

                <form onSubmit={handleSubmit}>
                    <input className="input-style" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Имя автора' type=""></input>
                    <button className="btn-style" type='submit' onClick={handleSubmit}>Отправить</button>
                </form>
            </div>
            <div>

            </div>

        </>
    )
}

export default AllChats;
