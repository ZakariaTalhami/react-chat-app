/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { IMessage } from "../../models/chat/message";
import { getChannelMessages, sendMessageToChannel } from "../../services/messegingService";
import MessageInput from "./MessageInput";
import Message from "./Message";
import { listenForMessages, messaging } from "../../services/firebase";
import { onMessage } from "@firebase/messaging";

const CURRENT_USER = "Zack";

const MessengerStyle = css`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0.5rem;
`;

type MessengerPropType = {
  channelId: string;
};

const Messenger = ({ channelId }: MessengerPropType) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    listenForMessages();
    const messageList = getChannelMessages(channelId).then((data) =>
      setMessages(data)
    );
  }, []);

  const onSendMessage = (message: string) => {
    const newMessage: IMessage = {
      sender: {
        name: CURRENT_USER,
      },
      body: message,
      timestamp: Date.now(),
    };
    sendMessageToChannel(channelId, newMessage);
    setMessages([...messages, newMessage]);
  };

  return (
    <div css={MessengerStyle}>
      <div>
        {messages.map((messageData) => (
          <Message key={messageData.id} message={messageData} />
        ))}
      </div>
      <MessageInput onMessageSend={onSendMessage} />
    </div>
  );
};

export default Messenger;
