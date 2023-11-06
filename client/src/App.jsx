import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Splashscreen from "./pages/Splashscreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavigationBar from "./componemts/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/rigister" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/splash" element={<Splashscreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
