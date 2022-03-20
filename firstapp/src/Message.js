import React from "react";


const Message = ({ text }) => {
    console.log(text)
    return (
        <div class="conteiner">
            <ul>
                <li class="liststyle">{text} 1</li>
                <p>Знакомство с ReactJS. Первые компоненты</p>
                <li class="liststyle">{text} 2</li>
                <p>Жизненный цикл компонента</p>
            </ul>
        </div>
    )
}

export default Message;
