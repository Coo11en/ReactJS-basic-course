import React, { useState, useEffect, useRef } from 'react';
import Message from '../Message';
import HeaderChat from '../HeaderChat';
import { Link, useParams } from 'react-router-dom';



const Chat = () => {

    const [messageList, setMessageList] = useState([{
        id: 0,
        author: '',
        value: ''
    }]);
    const [value, setMessageNew] = useState('');
    // const [author, setAuthorNew] = useState('');
    const [id, setId] = useState(1);
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    let name = ''

    useEffect(() => {
        inputRef.current?.focus();
    }, [count])

    const AddsetMessageList = (e) => {
        e.preventDefault()
        let newPost = {
            id,
            author: 'Mikhail',
            value
        }

        newPost.id = id

        if (value !== undefined && value !== '') {
            setCount(count + 1)
            setMessageList([...messageList, newPost])
        };

        setMessageNew('')
        // setAuthorNew('')
        setId(id + 1)
    }

    useEffect(() => {
        console.log('oik')
        if (messageList != undefined && messageList[messageList.length - 1].author !== 'Робот' && count > 0) {
            let AutoMsg = {
                id,
                author: 'Робот',
                value: 'Привет, нужна помощь???'
            }


            setId(id + 1)

            AutoMsg.id = id

            setTimeout(() => setMessageList([...messageList, AutoMsg]), 2000)
        }
    }, [count]);

    console.log(count)


    let ArrayChat = {
        id,
        name,
        value
    }

    let idChat = useParams()
    console.log(idChat)

    return (

        <div className="App" sx={{ position: 'relative' }}>

            <header>
                <Link to={'/'}> Список чатов</Link>
                <HeaderChat>Чат с пользователем</HeaderChat>
                <Link to={'/account'}> Аккаунт</Link>
            </header>

            <div className="header-chat">
                <div className="conteiner">
                    {messageList.map(message => <Message message={message} action={message.author} key={message.id} />)}
                </div>
            </div>

            <div className="conteiner">

                <form >
                    <input className="input-style" value={value} onChange={e => setMessageNew(e.target.value)} type="text" placeholder='Текст сообщения' ref={inputRef}></input>

                    {/* <input className="input-style-autohor" value={author} onChange={e => setAuthorNew(e.target.value)} type="text" placeholder='Автор'></input> */}

                    <button className="btn-style" onClick={AddsetMessageList}>Отправить</button>
                </form>
            </div>
        </div >
    )
}

export default Chat;
