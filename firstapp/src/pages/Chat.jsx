import React, { useState, useEffect, useRef } from 'react';
import Message from '../Message';
import HeaderChat from '../HeaderChat';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../redux/store/reducer/chatSelector/selector";
import { messageSelector } from "../redux/store/reducer/messageSelector/selector";


const Chat = () => {
    const allMessages = useSelector(messageSelector)
    const allChats = useSelector(chatSelector)
    const [message, setMessageNew] = useState('');
    const [id, setId] = useState((allMessages.length));
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    const dispatch = useDispatch()

    let idChat = useParams()

    const Message1 = allMessages.filter((item => {

        if (item.idChat == idChat.author || item.idChat == 5) {
            return true
        }
        return false
    }))

    const AddsetMessageList = (e) => {
        e.preventDefault()
        let newPost = {
            id,
            idChat: 5,
            message
        }
        if (message !== undefined && message !== '') {
            dispatch({ type: 'printMessage', payload: newPost })
        };
        setCount(count + 1)

        setMessageNew('')
        setId(id + 1)
    }

    useEffect(() => {
        if (Message1 !== undefined && Message1[Message1.length - 1].idChat !== idChat.author && count > 0) {
            inputRef.current?.focus();
            let AutoMsg = {
                id,
                idChat: idChat.author,
                message: 'Привет, нужна помощь???'
            }

            setId(id + 1)
            AutoMsg.id = id

            setTimeout(() => dispatch({ type: 'printMessage', payload: AutoMsg }), 2000)
        }
    }, [count]);

    return (

        <div className="App" sx={{ position: 'relative' }}>

            <header>
                <Link to={'/'}> Список чатов</Link>
                <HeaderChat>Чат с пользователем</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-chat">
                <div className="conteiner" >
                    {Message1.map(item => <Message message={(item.message)} action={allChats[item.idChat].author} key={item.id} />)}
                </div>
            </div>

            <div className="conteiner">

                <form >
                    <input className="input-style" value={message} onChange={e => setMessageNew(e.target.value)} type="text" placeholder='Текст сообщения' ref={inputRef}></input>

                    <button className="btn-style" onClick={AddsetMessageList}>Отправить</button>
                </form>
            </div>
        </div >
    )
}

export default Chat;