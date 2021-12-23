/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';

const MessageInputContainerStyle = css`
    min-height: 3rem;
    width: 100%;
    background-color: #e7e7e7;
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
type MessageInputContainerPropType = {
    children?: React.ReactNode
}
const MessageInputContainer = ({children}: MessageInputContainerPropType) => <div css={MessageInputContainerStyle}>{children}</div>


const MessageInputStyle = css`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    background: none;
    padding: 0 0.5rem;
`;
type MessageInputPropType = {
    onMessageSend: (message: string) => void
}
const MessageInput = ({onMessageSend}: MessageInputPropType) => {
    const [message, setMessage] = useState("");

    const checkForEnterPresss = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            onMessageSend(message);
            setMessage("");
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const onSendButtonClicked = () => {
        if(message === '') return;

        onMessageSend(message);
        setMessage("");
    }
    
    return (
        <MessageInputContainer>
            <input type="text" css={MessageInputStyle} value={message} onChange={onInputChange} onKeyPress={checkForEnterPresss}/>
            <button onClick={onSendButtonClicked}>Send</button>
        </MessageInputContainer>
    )
}

export default MessageInput;
