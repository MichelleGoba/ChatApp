import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chats = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return <Container>{userChats?.length < 1 ? null : <Stack>
    <Stack>List</Stack>
    <p>Chat Box</p>
    </Stack>}</Container>;
};

export default Chats;
