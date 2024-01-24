import { Stack } from "react-bootstrap";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavigationBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
    {/* {user && (
        <h3>
          <span> Logged in as {user?.name} </span>{" "}
        </h3>
      )}  */}
     
      <Stack direction="horizontal" gap={4}>
        {user &&  (
          <>
          <Link onClick={() => logoutUser()} to="/login">
            <div>Logout</div>
          </Link>
         </>
        )}
          {!user && (
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
      <Stack>
      <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Chat App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <p>Search</p>
          {/* <Search className="searchIcon" /> */}
          {/* <input
            placeholder="Search "
            className="searchInput"
          /> */}
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            {/* <Person /> */}
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            {/* <Chat /> */}
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            {/* <Notifications /> */}
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          {/* <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          /> */}
        </Link>
      </div>
    </div>

      </Stack>

     


    </>
  );
};

export default NavigationBar;
