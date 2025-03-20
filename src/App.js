
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import AddBooks from './Pages/AddBooks';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBooks, getFavouriteBooks } from "./redux/BookSlice";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Pages/Books';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Admin from './Pages/Admin';
import EditBook from './Pages/EditBook';
import BookDetails from './Pages/BookDetails';
import FavouriteBooks from './Pages/FavouriteBooks';
import UserList from './Pages/UserList';
import {  getLoggedUser, getUsers } from './redux/UserSlice';
import UserRoute from './utils/UserRoute';
import EditUser from './Pages/EditUser';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBooks());
    dispatch(getFavouriteBooks());
    dispatch(getLoggedUser());
    dispatch(getUsers());
  },[dispatch]);
   
  
  return (
    <Router>
      <Header/>
      <ToastContainer position='top-right' autoClose={2000}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/add-books' element={<UserRoute requiredRole={['admin','user']}><AddBooks/></UserRoute>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/book-list' element={<Books/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/admin' element={<UserRoute  requiredRole={['admin']}><Admin/></UserRoute>}/>
        <Route path='/edit-book/:id' element={<EditBook/>}/>
        <Route path='/book-details/:id' element={<BookDetails/>}/>
        <Route path='/favourite-books' element={<UserRoute requiredRole={['admin','user']}><FavouriteBooks/></UserRoute>}/>
        <Route path="/book-list/:genre" element={<Books />} />
        <Route path='/user-list' element={<UserRoute  requiredRole={['admin']} ><UserList/></UserRoute>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
