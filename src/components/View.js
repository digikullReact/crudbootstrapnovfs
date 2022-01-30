import React ,{useEffect,useState}from 'react';
import { Table} from 'react-bootstrap';
import axios from 'axios';
import {  GrEdit} from 'react-icons/gr';
import {AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

//GrEdit

const View = (props) => {
    const [state,setState]=useState([]);
    const navigate=useNavigate();


    const getData=()=>{
        axios.get("http://104.251.223.235:1337/api/restaurants").then(data=>{
            console.log(data["data"].data);
            setState(data["data"].data)

        }).catch(err=>{
            console.log(err);
        })

    }

    useEffect(()=>{

        getData();

    },[props.showPopup,props.showEditPopup])


    const move=()=>{
    navigate("/anywhere")
    }


  return <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

      {
          state.map(ele=>(
            <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.attributes.name}</td>
            <td>{ele.attributes.publishedAt}</td>
            <td>{ele.attributes.updatedAt}</td>
            <td style={{cursor:"pointer"}} onClick={()=>props.getEditData(ele)}><GrEdit/></td>
            <td style={{cursor:"pointer"}}><AiFillDelete/></td>
          </tr>

          ))
      }

   
  </tbody>

</Table>;
};

export default View;
