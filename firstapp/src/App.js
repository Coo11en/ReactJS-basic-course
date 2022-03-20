import React from "react";
import Message from './Message'
import './style.scss'

function App() {
  let lesson = 'Урок ';
  console.log(lesson)
  return (
    <div className="App">
      <h1 class="TitleHeader">План занятий.</h1>
      <Message text={lesson} />
    </div>
  );
}

export default App;