import React,{useState} from 'react';
import { Modal,Button, Form} from 'react-bootstrap';


const AddEdit = ({handleClose,handleShow,show,Addrestaurant}) => {
    const [name,setName]=useState("");

const handleChange=(event)=>{

    setName(event.target.value);

}


const saveData=()=>{
    Addrestaurant(name);
}

  return  <>


  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add Restaurant</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name"  onChange={handleChange}/>
  </Form.Group>

</Form>


    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={saveData}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</>;
};

export default AddEdit;
