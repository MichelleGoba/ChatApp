import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Splash from "./pages/splashscreen/Splash";
import Chats from "./pages/chats/Chats";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} =useContext(AuthContext)

  return (
   <>
   <NavigationBar/>
    <Container>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/register" element={ user ? <Chats/> : <Register />} />
        <Route path="/login" element={ user ? <Chats/> : <Login />} />
        <Route path="/chats" element={ user ? <Chats /> : <Login/> } />
        {/* 
         
          
          <Route path="/splash" element={<Splashscreen />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
