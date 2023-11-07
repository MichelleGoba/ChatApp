import { Container, Stack } from "react-bootstrap";
import Logo from "../assets/Images/Logo.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      <Container>
        <nav>
            <div className="logo">

            
          <Link to="/">
            <img src={Logo} className="logoImg" />
          </Link>
          </div>

          <Stack gap={3}>
            <Link to="/">Chats</Link>
            <Link to="/">Groups</Link>
            <Link to="/">Calls</Link>
            <Link to="/">Settings</Link>
            <Link to="/" className="theme">Themes</Link>
            </Stack>
            
          
      
        </nav>
      </Container>
    </>
  );
};

export default Sidebar;
