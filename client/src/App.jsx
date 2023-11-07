import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register/Register"

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <>

    {/* <Routes>
     <Route path="/" element={<Chat />} />
     <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/splash" element={<Splashscreen />} />
          <Route path="*" element={<Navigate to="/" />} />
    </Routes> */}
 
      <Container>
        <Routes>
        <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Chat />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/splash" element={<Splashscreen />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </Container>
    </>
  );
}

export default App;
