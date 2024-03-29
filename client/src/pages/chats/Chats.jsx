import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../../components/chat/UserChat";
import { AuthContext } from "../../context/AuthContext";
import PotentialChats from "../../components/chat/PotentialChats";
import "../../components/chat/userChat.css";
import "./chats.css"


const Chats = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError, updateCurrentChat } =
    useContext(ChatContext);

  return (
   
    <Container>
     
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={5} className="align-items-start">
          <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
          {isUserChatsLoading && <p>Loading chats...</p>}
          {userChats?.map((chat, index) => {
            return (
              <div key={index} onClick={() => updateCurrentChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            );
          })}
           </Stack>
       
        </Stack>
      )}
    </Container>
  );
};

export default Chats;
