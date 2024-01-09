import { ChatContext } from "../../context/ChatContext";
import { useContext } from "react";


const PotentialChats = () => {
    const {potentialChats} = useContext(ChatContext);
    console.log("PotentialChats", potentialChats);
    return ( <>Michelle</> );
}
 
export default PotentialChats;   