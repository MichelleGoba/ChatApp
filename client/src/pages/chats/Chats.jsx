import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chats = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return <>Chat</>;
};

export default Chats;
