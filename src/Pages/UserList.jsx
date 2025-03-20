import React, { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { deleteUser, getUsers } from '../redux/UserSlice'
import { toast } from 'react-toastify'

const UserList = () => {
    const library_users = useSelector((state)=>state.users.users);
    
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteUser(Number(id)))
        toast.success('Deleted Successfully!');
     };
     useEffect(()=>{
      dispatch(getUsers());
     },[dispatch])
  return (
    <Container fluid>
    <Row>
        <Col md={12} className='my-5'>
        <h3 className='text-center pb-2'>Users</h3>
        <Table bordered >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
       library_users && library_users.map((item,i)=>(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.role}</td>
          <td>
          <Link className='px-5' to={`/edit-user/${item.id}`}  title='Edit'><FaPencilAlt style={{color:'green'}}/></Link> 
          <FaTrash title='Delete' style={{color:'red',cursor:'pointer'}} onClick={()=>handleDelete(item.id)}/> 
          </td>
        </tr>
        ))}
        
      </tbody>
     
    </Table>
        </Col>
            </Row>
        </Container>
   
  )
}

export default UserList