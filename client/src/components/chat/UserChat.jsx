import { Container, Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import "./userChat.css";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
 
     <Container >
     <Stack
       direction="horizontal"
       gap={3}
       className="user-card align-items-center"
       p-2="true"
       justify-content-between="true"
     >
      <div className="d-flex">
         <div className="me-2">image</div>
         <div className="text-content">
           <div className="name">{recipientUser?.username}</div>
           <div className="text">Text Message</div>
         </div>
       </div>
       <div className="d-flex flex-column align-items-end">
         <div className="date">
             12/12/2022
         </div>
         <div className="this-user-notifications">2</div>
         <span className="user-online"></span>
       </div>
     </Stack>
     </Container>
  );
};

export default UserChat;
