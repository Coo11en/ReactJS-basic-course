import React from 'react';
import './style.scss'
import { Routes, Route } from 'react-router-dom'
import Authorization from "./pages/Authorization"
import Account from "./pages/Account"
import AllChats from "./pages/AllChats"
import Chat from "./pages/Chat"
import Gists from './pages/Gists';
import FailedChat from './pages/FailedChat';
import { useSelector } from 'react-redux';


function App() {

  const user = useSelector(state => state.currentUser)

  return (

    < div className="App" sx={{ position: 'relative' }
    }>

      <Routes>
        {!user ? (
          <>
            <Route index path='/' element={<Authorization />} />
            <Route path='/chats' element={<AllChats />} />
            <Route path='/chat/:author' element={<Chat />} />
            <Route path='/account' element={<Account />} />
            <Route path='/failed' element={<FailedChat />} />
            <Route path='*' element={<FailedChat />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Authorization />} />
            <Route path='*' element={<FailedChat />} />
          </>
        )}
      </Routes>

    </div >
  );
}

export default App;