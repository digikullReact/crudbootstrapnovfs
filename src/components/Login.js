import axios from 'axios';
import React ,{useState}from 'react';
import { Col, Container, Form,Row ,Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const [state,setState]=useState({
        username:"",
        password:""
    })

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

const loginApi=()=>{

    // 

    axios.get("http://104.251.223.235:1337/api/users/"+state.username).then(data=>{

    if(data["data"])
    {
        // user logged in
        // i want them to redirect to another page 

        // useNavigation hook from react  router dom
        navigate("/home");
    }


    else{
        alert("USer Not Found");
    }
 

    }).catch(err=>{
        console.log(err);
    })

}

  return (
  <Container>
      <Row  style={{marginTop:"100px"}}>
      <Col md={{ span: 8, offset: 2 }}>

      <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control  type="text"   name="username" defaultValue="email@example.com"   onChange={handleChange}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
    </Col>
    
  </Form.Group>
  <Button variant="primary" onClick={loginApi}>Login</Button>
</Form>
      </Col>
 
      </Row>

  </Container>
  )
 
};

export default Login;
