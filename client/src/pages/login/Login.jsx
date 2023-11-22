import { Alert, Form, Row, Col, Stack, Container } from "react-bootstrap";
import LoginImg from "../../assets/Images/signup.png";
import { Link } from "react-router-dom";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const {
    loginUser,
    loginError,
    loginInfo,
    updateLoginInfo,
    isLoginLoading,
  } = useContext(AuthContext);

  return (
    <Container
      className="logCont"
      style={{
        marginTop: "70px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        boxShadow: "5px 10px 18px #888888",
      }}
    >
      <Form className="logForm" onSubmit={loginUser}>
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
                <Form.Control
                  type="text"
                  id = "email"
                  placeholder="Email"
                  className="inputField"
                  onChange={(e) =>
                    updateLoginInfo({ ...loginInfo, email: e.target.value })
                  }
                />
                <Form.Control
                  type="text"
                  id = "username"
                  placeholder="Username"
                  className="inputField"
                  onChange={(e) =>
                    updateLoginInfo({ ...loginInfo, username: e.target.value })
                  }
                />

                <Form.Control
                  type="password"
                  id = "password"
                  placeholder="Password"
                  className="inputField" onChange={(e) => updateLoginInfo({...loginInfo, password: e.currentTarget.value})}
                  
                />

                <p className="logP">
                  Forgot password? <span>Retrieve</span>
                </p>
                <button className="logInBtn">Login</button>
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

export default Login;
