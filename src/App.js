import React,{useState} from 'react';

import './App.css';
import View from './components/View';
import { Row,Col,Container,Button} from 'react-bootstrap';
import AddEdit from './components/AddEdit';
import axios from 'axios';
import EditData from './components/EditData';


function App() {

const [showPopup,setShowPopup]=useState(false);
const [showEditPopup,setShowEditPopup]=useState(false);

const [editName,setEditName]=useState({});
const openPopup=()=>{
  setShowPopup(true);

}

const handleClose=()=>{
  setShowPopup(false);

}



// For Edit Popup

const openEditPopup=()=>{
  setShowEditPopup(true);

}

const handleEditClose=()=>{
  setShowEditPopup(false);

}

const getEditData=(data)=>{
  debugger;

  setEditName(data);

  setShowEditPopup(true);

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
      <EditData show={showEditPopup} handleClose={handleEditClose} data={editName} />

<Row style={{marginTop:"100px"}}>
<Col md={{ span: 8, offset: 2 }}>

<Button variant="primary" onClick={openPopup}>Add Data</Button>{' '}
</Col>

</Row>


  <Row  style={{marginTop:"100px"}}>
    <Col md={{ span: 8, offset: 2 }}>

    <View showPopup={showPopup} getEditData={getEditData}/>
    </Col>
  </Row>
</Container>
  
  );
}

export default App;
