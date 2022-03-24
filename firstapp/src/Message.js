import React, { useState } from "react";


const Message = (props) => {
    return (
        <div>
            <p>{props.message.value}</p>
            <strong>{props.message.author}</strong>
        </div>

    )
}

export default Message;
