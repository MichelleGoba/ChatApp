import { Stack } from "react-bootstrap";
import "./NavigationBar.css"; 
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



const NavigationBar = () => {
    const {user, logoutUser} =useContext(AuthContext)
    return <>
         <h3>Logged in as {user?.username} </h3>
            <Stack direction="horizontal" gap={4}>
                {user ? (
                    <Link onClick={() => logoutUser()} to="/login">
                        <div>Logout</div>
                    </Link>
                ) : (
                    <>
                        <Link to="/login">
                            <div>Log In</div>
                        </Link>
                        <Link to="/register">
                            <div>Sign Up</div>
                        </Link>
                    </>
                )}
            </Stack>
    </>;
}
 
export default NavigationBar;