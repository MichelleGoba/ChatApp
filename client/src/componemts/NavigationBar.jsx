import Logo from "../assets/Images/Logo.png";
import "../componemts/NavigationBar.css"

const NavigationBar = () => {
    return <>
    <nav>
        <ul>
            {/* <li>
            <a href="#">
                <img src= {Logo} />
            </a>
            </li> */}
            <li><a href="#">Chats</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Calls</a></li>

        </ul>
    </nav>
    </>
   
        
}
 
export default NavigationBar;