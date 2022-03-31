import React from "react";


const Message = (props) => {
    return (
        <>
            <p>{props.message.value}</p>
            <strong>{props.message.author}</strong>
        </>

    )
}

export default Message;
