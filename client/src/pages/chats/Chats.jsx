import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Chats = () => {
    const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext)

    console.log("UserChats", userChats);
    return <>Chats</>;
}
 
export default Chats;