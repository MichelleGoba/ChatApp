 import { useContext } from "react";
 import { Alert, Form, Row, Col, Stack, Container } from "react-bootstrap";
 import LoginImg from "../../assets/Images/signup.png";
 import { Link } from "react-router-dom";
 import "./register.css";
 import { AuthContext } from "../../context/AuthContext";
 import { postRequest } from "../../utils/services.js";

 const Register = () => {
   const {
     registerInfo,
     updateRegisterInfo,
     registerUser,
     registerError,
     isRegisterLoading,
   } = useContext(AuthContext);


   return (
     <Container className="regCont" style={{
      marginTop: "70px",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      borderTopRightRadius: "20px",
      borderTopLeftRadius: "20px",
      boxShadow: "5px 10px 18px #888888",
    }}>
       <Form className="regForm" onSubmit={registerUser}>
        <div className="regRow">
          <h2 className="regTitle">Chat App</h2>

          <div className="regBtn">
             <Link to="/login">
              <button className="logButton">Log In</button>
             </Link>
             <Link to="/register">
               <button className="regButton">Sign Up</button>
             </Link>
           </div>

           <Row className="column">
             <Col xs={12} md={6} className="regCol">
               <Stack gap={1}>
               <Form.Control
                   type="email"
                  placeholder="Email"
                   className="inputField"
                   onChange={(e) =>
                     updateRegisterInfo({
                       ...registerInfo,
                       email: e.target.value,
                     })
                   }
                 />
                 <Form.Control
                   type="text"
                   placeholder="Username"
                   className="inputField"
                   onChange={(e) =>
                     updateRegisterInfo({
                       ...registerInfo,
                       username: e.target.value,
                     })
                   }
                 />
              
                 <Form.Control
                   type="password"
                   placeholder="Password"
                   className="inputField"
                   onChange={(e) =>
                     updateRegisterInfo({
                       ...registerInfo,
                       password: e.target.value,
                     })
                  }
                 />
                  <Form.Control
                   type="password"
                   placeholder="Confirm Password"
                   className="inputField"
                   onChange={(e) =>
                     updateRegisterInfo({
                      ...registerInfo,
                      confirmPassword: e.target.value,
                     })
                   }
                 /> 
                 <p className="regP">
                  Already have an account? <span>Log in</span>
                 </p>
                 <button className="signUpBtn" type="submit">
                   {isRegisterLoading ? "Creating your account" : "Sign Up"}
                 </button>

                 {registerError?.error && (
                   <Alert variant="danger">
                     <p>{registerError?.message}</p>
                   </Alert>
                 )}
                 <Link to={"/splash"}><p className="exit">Exit</p></Link>
               </Stack>
             </Col>

             <Col xs={12} md={6} className="regImg">
               <img src={LoginImg} alt="Registration" className="img-fluid" />
             </Col>
           </Row>
         </div>
       </Form>
     </Container>
   );
 };

 export default Register;


