import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";
import moment from "moment";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  if (!recipientUser)
    return (
      <p style={{ textAlign: "center", width: "100%", color: "red" }}>
        No conversation selected...
      </p>
    );

  if (isMessagesLoading)
    return (
      <p style={{ textAlign: "center", width: "100%", color: "red" }}>
        Loading Chat...
      </p>
    );

  return (
    <Stack gap={4} className="chat-box">
      <div className="chat-header">
        <strong style={{ color: "white" }}>{recipientUser?.username}</strong>
      </div>
      <Stack>
        {messages &&
          messages.map((message, index) => (
            <Stack key={index} className={`$(message?.senderId === user?._id)`}>
              <span>{message.text}</span>
              <span className="message-footer">{moment(message.createdAt).calendar()}</span>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default ChatBox;
