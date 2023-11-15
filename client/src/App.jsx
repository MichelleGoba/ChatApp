import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Splash from "./pages/splashscreen/Splash";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
  
      <Container style={{ marginTop: "70px",borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px",borderTopRightRadius: "20px",borderTopLeftRadius: "20px", boxShadow:"5px 10px 18px #888888"}}> 
        <Routes>
        <Route path="/" element={<Splash />} />
          
        <Route path="/splash" element={<Splash />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Chat />} />
         
          
          <Route path="/splash" element={<Splashscreen />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </Container>
 
  );
}

export default App;


