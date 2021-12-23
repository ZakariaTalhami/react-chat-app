/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";
import { IMessage } from "../../models/chat/message";
const MessageContainerStyle = css`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  background: #e7e7e7;
`;
const MessageContainer = ({ children }: { children: React.ReactNode }) => (
  <div css={MessageContainerStyle}>{children}</div>
);

type MessagePropType = {
  message: IMessage;
};

const Message = ({ message }: MessagePropType) => {
  return (
    <MessageContainer>
      <span>{message.sender.name}</span>
      <span>
        {message.body}
      </span>
      <span>
        ({new Date(message.timestamp).toLocaleString()})
      </span>
    </MessageContainer>
  );
};

export default Message;
