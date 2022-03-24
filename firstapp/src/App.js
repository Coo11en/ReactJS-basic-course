import React, { useState, useEffect } from 'react';
import Message from './Message';
import './style.scss'

function App() {
  const [messageList, setMessageList] = useState(['']);
  const [value, setMessageNew] = useState();
  const [author, setAuthorNew] = useState();

  const AddsetMessageList = (e) => {
    e.preventDefault()
    let newPost = {
      author,
      value
    }
    setMessageList([...messageList, newPost])
    setMessageNew('')
    setAuthorNew('')
  }

  useEffect(() => {
    if (messageList.length > 1 && messageList[messageList.length - 1].author !== 'Робот') {
      let AutoMsg = {
        author: 'Робот',
        value: 'Привет, нкжна помощь???'
      }
      setTimeout(() => setMessageList([...messageList, AutoMsg]), 2000)
    }
  }, [author])

  return (
    <div className="App">
      <h1 className="TitleHeader">Чат бот</h1>
      <div className="conteiner2">
        <div className="conteiner">
          {messageList.map(message => <Message message={message} key={message.author} />)}
        </div>
      </div>
      <div className="conteiner">
        <form >
          <input className="inputStyle" value={value} onChange={e => setMessageNew(e.target.value)} type="text" placeholder='Текст сообщения'></input>
          <input className="inputStyleAutohor" value={author} onChange={e => setAuthorNew(e.target.value)} type="text" placeholder='Автор'></input>
          <button className="btnStyle" onClick={AddsetMessageList}>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default App;