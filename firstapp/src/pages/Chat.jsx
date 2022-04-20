import React, { useState, useEffect, useRef } from 'react';
import Message from '../components/Message';
import HeaderChat from '../components/HeaderChat';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../redux/reducers/chatSelector/selector";
import { messageSelector } from "../redux/reducers/messageSelector/selector";
import { msgAuto } from '../redux/reducers/actions';

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

        if (item.idChat == idChat.author) {
            return true
        }
        return false
    }))

    const AddsetMessageList = (e) => {
        e.preventDefault()
        let newPost = {
            id,
            userName: 'Mikhail',
            idChat: Number(idChat.author),
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
        if (Message1 !== undefined && count > 0) {
            inputRef.current?.focus();
            let AutoMsg = {
                id,
                userName: allChats.find(item => item.id == idChat.author).author,
                idChat: Number(idChat.author),
                message: 'Привет, нужна помощь???'
            }
            setId(id + 1)
            AutoMsg.id = id
            dispatch(msgAuto(AutoMsg))
        }
    }, [count]);

    return (

        <div className="App" sx={{ position: 'relative' }}>

            <header>
                <Link to={'/chats'}> Список чатов</Link>
                <HeaderChat>Чат с пользователем</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-chat">
                <div className="conteiner" >
                    {Message1.map(item => <Message message={(item.message)} action={item.userName} key={item.id} />)}
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