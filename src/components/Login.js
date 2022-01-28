import React ,{useState}from 'react';
import { Col, Container, Form,Row ,Button} from 'react-bootstrap';

const Login = () => {

    const [state,setState]=useState({
        username:"",
        password:""
    })

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

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
  <Button variant="primary">Login</Button>{' '}
</Form>
      </Col>
 
      </Row>

  </Container>
  )
 
};

export default Login;
