import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useContext } from "react";


const PotentialChats = () => {
    const {user} = useContext(AuthContext)
    const {potentialChats, createChat} = useContext(ChatContext);
   

    return ( <>
    <div className="all-users" >
        {potentialChats && potentialChats.map((u, index) =>{
            return(
                <div className="single-user" key={index} onClick={() => createChat(user._id, u._id)}>
                {u.username}
                <span className="user-online"></span>

            </div>
            )  
        })}
    </div>

    </> );
}
 
export default PotentialChats;   