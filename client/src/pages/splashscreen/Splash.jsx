import { Container } from "react-bootstrap";
import "./splash.css";
import splash from "../../assets/Images/splash.png"
import { Link } from "react-router-dom";

const Splash = () => {
    return (
        <Container className="splashCont">
            <div className="backgroundImg">
                <h2>Chat App</h2>
                <div className="splashImg">
                    <img src={splash}></img>
                </div>
                <h3>Welcome to WebDevs Chat App</h3>

                <div className="splashBtn">
                    <Link to="/register"><button className="splashButton">Start Chatting</button></Link>
                </div>
               
               
               
            </div>

        </Container>
    )
}
 
export default Splash;