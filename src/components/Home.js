import React,{useState,useEffect} from 'react';
import View from './View';
import { Row,Col,Container,Button} from 'react-bootstrap';
import AddEdit from './AddEdit';
import axios from 'axios';
import EditData from './EditData';
import { TokenExists, useBackGroundColor } from './utils';

export const Home = () => {

  const data=useBackGroundColor();


  useEffect(()=>{
    const exists=TokenExists();

   


   if( !exists ){
     window.location.href="/login"

   }

  },[])


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


// For making edit api call

const editApiCall=(restaurant,id)=>{


  // I have to make an api call in the backend

  const obj={
    "data": {
      "name": restaurant,
     
    }
  }

  axios.put("http://104.251.223.235:1337/api/restaurants/"+id,obj).then(data=>{


    //console.log(data["data"]);
    setShowEditPopup(false);


  }).catch(err=>{
    console.log(err);
  })



}

const handleEditClose=()=>{
  setShowEditPopup(false);

}

const getEditData=(data)=>{



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
  return  <Container>

  <AddEdit show={showPopup} handleClose={handleClose} Addrestaurant={Addrestaurant}/>
  <EditData show={showEditPopup} handleClose={handleEditClose} data={editName} Addrestaurant={editApiCall} />

<Row style={{marginTop:"100px"}}>
<Col md={{ span: 8, offset: 2 }}>

<Button variant="primary" onClick={openPopup}>Add Data</Button>{' '}
</Col>

</Row>


<Row  style={{marginTop:"100px"}}>
<Col md={{ span: 8, offset: 2 }}>

<View  showEditPopup={showEditPopup} showPopup={showPopup} getEditData={getEditData}/>
</Col>
</Row>
</Container>;
};
