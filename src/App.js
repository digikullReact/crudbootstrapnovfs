import React,{useState} from 'react';

import './App.css';
import View from './components/View';
import { Row,Col,Container,Button} from 'react-bootstrap';
import AddEdit from './components/AddEdit';
import axios from 'axios';


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
  const obj={ 
    data: {
      name:name
    }
  }
  

  axios.post("http://104.251.223.235:1337/api/restaurants",obj).then(data=>{
    //console.log(data["data"]);
    setShowPopup(false);


  }).catch(err=>{
    console.log(err);
  })



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

    <View showPopup={showPopup}/>
    </Col>
  </Row>
</Container>
  
  );
}

export default App;
