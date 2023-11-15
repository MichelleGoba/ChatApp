import {
  Alert,
  Form,
  Row,
  Col,
  Stack,
  Container,
} from "react-bootstrap";
import LoginImg from "../../assets/Images/signup.png";
import { Link } from "react-router-dom";
import "./login.css";


const Register = () => {
  return (
    <Container className="logCont">
      <Form className="logForm">
        <div className="logRow">
          <h2 className="logTitle">Chat App</h2>
          <div className="logBtn">
            <Link to="/login">
              <button className="logButton1">Log In</button>
            </Link>
            <Link to="/register">
              <button className="regButton1">Sign Up</button>
            </Link>
          </div>

          <Row className="column">
            <Col xs={12} md={6} className="logCol">
              <Stack gap={3}>
                <Form.Control type="text" placeholder="Username" className="inputField" />
                
                <Form.Control type="password" placeholder="Password" className="inputField"/>
                
                <p className="logP">
                  Forgot password? <span>Retrieve</span>
                </p>
                <button className="logInBtn">Sign Up</button>
                <Alert variant="danger">
                  <p>Errorr message</p>
                </Alert>
              </Stack>
            </Col>

            <Col xs={12} md={6} className="logImg">
              <img src={LoginImg} />
            </Col>
          </Row>
        </div>
      </Form>
    </Container>
  );
};

export default Register;