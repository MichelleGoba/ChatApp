import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import LoginImg from "../../assets/Images/signup.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <Form>
            <Row>
                <Col xs={6} className="loginCol">
                    <Stack gap={3}>
                        <h2>Chat App</h2>
                        <div className="loginBtn">
                            <Link to="/login"><button>Log In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                        </div>
                    
                        <Form.Control type="text" placeholder="Username"/>
                        <Form.Control type="password" placeholder="Password"/>
                        <p>Already have an account? <span>Log in</span></p>
                        <Button>Sign Up</Button>
                        <Alert variant="danger"><p>An error occured</p></Alert>
                      
                    </Stack>
                </Col>

                <Col className="logInImg">
                    <img src={LoginImg} />

                </Col>
            </Row>
        </Form>
        </>
    );
}
 
export default Login;