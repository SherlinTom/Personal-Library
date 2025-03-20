import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { deleteBook } from '../redux/BookSlice'
import { toast } from 'react-toastify'

const Admin = () => {
    const navigate = useNavigate();
    const books = useSelector((state)=>state.books.books);
    // const books = JSON.parse(localStorage.getItem("books"));
    const dispatch = useDispatch();


    const handleDelete = (item) =>{
      dispatch(deleteBook(Number(item.id)));
      toast.success(`${item.title} deleted successfully!`);
     };
  return (
    <Container fluid>
    <Row>
        <Col md={12}>
        <div className='d-flex justify-content-end my-3'><Button className='btn-success' onClick={()=>navigate('/add-books')}>Add Book</Button></div>
        <Table bordered >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Cover Photo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
       books && books.map((item,i)=>(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{item.genre}</td>
          <td><img src={item.image} alt="" height={100}/></td>
          <td>
          <Link className='px-5' to={`/edit-book/${item.id}`}  title='Edit'><FaPencilAlt style={{color:'green'}}/></Link> 
          <FaTrash title='Delete' style={{color:'red',cursor:'pointer'}} onClick={()=>handleDelete(item)}/> 
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

export default Admin