import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { reciepientUser } = useFetchRecipientUser(currentChat, user);

  if(!reciepientUser) return(
    <p style={{textAlign: "center", width:"100%" }}>No conversation selected</p>
  );
  if(isMessagesLoading) return(
    <p style={{textAlign: "center", width:"100%" }}>Loading chat</p>
  );


  return <Stack gap={4} className="chat-box">
    <div className="chat-header">
        <strong>{reciepientUser?.username}</strong>
        </div>Chat Box</Stack>;

  
};



export default ChatBox;
