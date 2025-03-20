import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import "./Header.css"
import {Link, useNavigate} from 'react-router-dom'
import { RiHeartLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/UserSlice'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  const fav_books = useSelector((state)=>state.books.favourites)
  const users=JSON.parse(localStorage.getItem("loggedUser"));
  
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleLogout = (users) => {
    dispatch(logoutUser(users));
    toast.success("Logged out!");
    navigate('/login');
  }
  return (
    <div>
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7af54b9-3a91-433b-99e7-5274c8355a63/de5mmbu-2471ba83-d537-4754-bd90-acfd4d861b15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3YWY1NGI5LTNhOTEtNDMzYi05OWU3LTUyNzRjODM1NWE2M1wvZGU1bW1idS0yNDcxYmE4My1kNTM3LTQ3NTQtYmQ5MC1hY2ZkNGQ4NjFiMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cKYJtbZdffgjGyjrAC1eUfqk4iRBMJDKBmLIgTeZ8Xw" height={80} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/book-list'>Books</Nav.Link>
            <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
            <Nav.Link as={Link} to='/user-list'>User List</Nav.Link>

          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/favourite-books'><RiHeartLine fontSize={25}  className='position-relative'/>
            <span className='counter text-dark'>{fav_books.length}</span>
            </Nav.Link>
            <Nav.Link as={Link} to={'/signup'}>SignUp</Nav.Link>
            {
             users? ( <Nav.Link as={Link}  onClick={()=>handleLogout(users)}>Logout</Nav.Link>):( <Nav.Link as={Link} to='/login'>Login</Nav.Link>)
            }
             {
             users? (<Nav.Link><span style={{color:'white',fontWeight:'bold'}}><FaUser/> {users.name}</span></Nav.Link>  ):(<h4><span style={{color:'white',fontWeight:'bold'}}><FaUser/></span></h4> )
            }
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header