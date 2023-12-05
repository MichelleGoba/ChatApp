import { Container, Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import "./userChat.css"

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  console.log(recipientUser);

  return (
    <Container className="userChatCont" style={{
        marginTop: "70px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        boxShadow: "5px 10px 18px #888888",
      }}>
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center"
      p-2
      justify-content-between
    >
      <div className="d-flex">
        <div className="me-2">A</div>
        <div className="text-content">
          <div className="name">{recipientUser?.Username}</div>
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
