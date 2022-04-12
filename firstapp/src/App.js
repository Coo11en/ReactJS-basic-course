import React from 'react';
import './style.scss'
import { Routes, Route } from 'react-router-dom'
import Account from "./pages/Account"
import AllChats from "./pages/AllChats"
import Chat from "./pages/Chat"


function App() {
  return (

    <div className="App" sx={{ position: 'relative' }}>



      <Routes>
        <Route path='/' element={<AllChats />} />
        <Route path='/chat/:author' element={<Chat />} />
        <Route path='/account' element={<Account />} />
        <Route path='/failed' element={<Account />} />
      </Routes>


    </div >
  );
}

export default App;