import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Chats = () => {
    const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext)
    return <>Chats</>;
}
 
export default Chats;