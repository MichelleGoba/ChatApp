import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../../components/chat/UserChat";
import { AuthContext } from "../../context/AuthContext";

const Chats = () => {
  const {user} =
    useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);


  return <Container>{userChats?.length < 1 ? null : <Stack direction="horizontal" gap={5} className="align-items-start">
    <Stack className="messages-box flex-grow-0 pe-3" gap={3}></Stack>
    {isUserChatsLoading && <p>Loading chats...</p>}
    {userChats?.map((chat, index) =>{
      return(
        <div key={index}>
          <UserChat chat={chat} user={user}/>

        </div>
      )
    })}
    <p>Chat Box</p>
    </Stack>}</Container>;
};

export default Chats;
