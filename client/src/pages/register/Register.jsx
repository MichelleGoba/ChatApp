import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import LoginImg from "../../assets/Images/signup.png";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
        <Form>
            <Row>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Chat App</h2>
                        <div className="regBtn">
                            <Link to="/login"><button>Log In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                        </div>
                    
                        <Form.Control type="text" placeholder="Username"/>
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Control type="password" placeholder="Password"/>
                        <Form.Control type="password" placeholder="Confirm Password"/>
                        <p>Already have an account? <span>Log in</span></p>
                        <Button>Sign Up</Button>
                        <Alert variant="danger"><p>An error occured</p></Alert>
                      
                    </Stack>
                </Col>

                <Col className="regImg">
                    <img src={LoginImg} />

                </Col>
            </Row>
        </Form>
        </>
    );
}
 
export default Register;