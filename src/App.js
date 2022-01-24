import React,{useState} from 'react';

import './App.css';
import View from './components/View';
import { Row,Col,Container,Button} from 'react-bootstrap';
import AddEdit from './components/AddEdit';


function App() {

const [showPopup,setShowPopup]=useState(false);
const openPopup=()=>{
  setShowPopup(true);

}

const handleClose=()=>{
  setShowPopup(false);

}


const Addrestaurant=(name)=>{
  debugger;

  //
  // axios add data --->



}

  return (
    <Container>

      <AddEdit show={showPopup} handleClose={handleClose} Addrestaurant={Addrestaurant}/>

<Row style={{marginTop:"100px"}}>
<Col md={{ span: 8, offset: 2 }}>

<Button variant="primary" onClick={openPopup}>Add Data</Button>{' '}
</Col>

</Row>


  <Row  style={{marginTop:"100px"}}>
    <Col md={{ span: 8, offset: 2 }}>

    <View/>
    </Col>
  </Row>
</Container>
  
  );
}

export default App;
