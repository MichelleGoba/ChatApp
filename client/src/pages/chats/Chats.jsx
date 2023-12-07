import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import "./chats.css"
import UserChat from "../../components/chat/UserChat";
import { AuthContext } from "../../context/AuthContext";
import PotentialChats from "../../components/chat/PotentialChats";

const Chats = () => {

  const { user} = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

 
  return <Container>
    <PotentialChats/>
    {userChats?.length < 1 ? null : (
    <Stack direction="horizontal" gap={4} className="align-items-start">
        <Stack className="messages-box flex-grow-0" gap={3} >
            {isUserChatsLoading && <p>Loading chats...</p>}
            {userChats?.map((chat,index) =>{
                return(
                    <div key={index}>
                        <UserChat chat={chat} user={user}/>
                    </div>
                )
            })}
           </Stack>
        <p>ChatBox</p>
        </Stack>)}
  </Container>;
};

export default Chats;
