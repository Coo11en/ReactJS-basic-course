import React from "react";


const Message = (props) => {
    return (
        <>
            <p>{props.message}</p>
            <strong>{props.action}</strong>
        </>

    )
}

export default Message;
