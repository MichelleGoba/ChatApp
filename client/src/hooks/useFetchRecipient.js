// this is the other user
import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null)
    const [error, setError] = useState(null) 

    const recipientId = chat?.members.find((id) => id !==user?._id)

    console.log("chat", chat);

    useEffect(() =>{
        const gettUser = async() =>{

            if(!recipientId) return null

            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`)

            if(response.error){
                return setError(response)
            }

            setRecipientUser(response)
        }
        gettUser()
    }, []);

    return {recipientUser}

};


