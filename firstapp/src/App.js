import React from 'react';
import './style.scss'
import { Routes, Route } from 'react-router-dom'
import Account from "./pages/Account"
import AllChats from "./pages/AllChats"
import Chat from "./pages/Chat"
import Gists from './pages/Gists';
import FailedChat from './pages/FailedChat';


function App() {
  return (

    < div className="App" sx={{ position: 'relative' }
    }>

      <Routes>
        <Route path='/' element={<AllChats />} />
        <Route path='/chat/:author' element={<Chat />} />
        <Route path='/account' element={<Account />} />
        <Route path='/failed' element={<FailedChat />} />
        <Route path='/gists' element={<Gists />} />
      </Routes>

    </div >
  );
}

export default App;