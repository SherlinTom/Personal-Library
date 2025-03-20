import React from 'react'
import {   Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './Books.css'
import { addToFavourite, removeFromFavourite } from '../redux/BookSlice'
import { RiHeartFill, RiHeartAddFill } from 'react-icons/ri'
import Category from '../Components/Category'
import { FaFilePdf } from 'react-icons/fa'

const Books = () => {
    const bookData = useSelector((state) => state.books.books);
    const favourites = useSelector((state) => state.books.favourites); 
    const dispatch = useDispatch()
    const handleAddToFavourite = (item) => {
        dispatch(addToFavourite(item))
    }
    const handleRemoveFromFavourite = (item) => {
        dispatch(removeFromFavourite(item))
    }
    const handleDownloadPDF = (item) => {
      if (item && item.pdf) {
        window.open(item.pdf, '_blank');
      } else {
        console.error("PDF URL is missing for this item.");
      }
    }
    
    const isFavourite = (book) => favourites.find((fav) => fav.id === book.id); 

    const { genre } = useParams();
    const filteredBooks = genre ? bookData.filter((book) => book.genre === genre) : bookData;
  return (
    <Container className='my-5' >
        <center><h1 className='mb-3'> Books</h1></center>
        <Category />
        {filteredBooks.length > 0 ? (
        <Row>
        {
        filteredBooks.map((item,index)=>(
          
            <Col sm={6} md={3} key={index} className="mt-3">
            <Card  className='mt-3'>
            <Link to={`/book-details/${index}`}>
            <div className='card-image position-relative'>
            <Card.Img variant="top" src={item.image}/>
            </div>
            </Link>
            <Card.Body>
            <Card.Title className='text-truncate'> <h5>{item.title}</h5> </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.author} | {item.genre}</Card.Subtitle>
            <Card.Text className='text-truncate'>  {item.summary} </Card.Text>
            <FaFilePdf title='read book' className='pdf-icon' style={{color:'brown',cursor:'pointer',fontSize:25}} onClick={() => handleDownloadPDF(item) }/> 
             {isFavourite(item) ? (
                <RiHeartFill title='remove from favourite' style={{color:'red',fontSize:25,cursor:'pointer'}} className='favourite-icon' onClick={()=>handleRemoveFromFavourite(item.id)}/>
                  ) : (
                    <RiHeartAddFill title='add to favourite' style={{color:'green',fontSize:25,cursor:'pointer'}} className='favourite-icon' onClick={() => handleAddToFavourite(item)}/>
                  )}
            </Card.Body>
            </Card>
            </Col>
            ))}

        </Row>
        ) : (
            <p className='mt-5'>Book not available in this genre. <Link to='/add-books'>Add new books</Link></p>
        )}
       
    </Container>
  )
}

export default Books