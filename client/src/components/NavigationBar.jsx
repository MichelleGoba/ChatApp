import { Container } from "react-bootstrap";
import Logo from "../assets/Images/Logo.png";
import "./NavigationBar.css"

const NavigationBar = () => {
    return <>
    <Container>
    <nav>
        <ul>
            {/* <li>
            <a href="#" className="logo">
                <img src= {Logo} className="logoImg"/>
            </a>
            </li>  */}
            <li ><a href="#">Chats</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Calls</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#" className="theme">Theme</a></li>

        </ul>
    </nav>
    </Container>
   
    </>
   
        
}
 
export default NavigationBar;