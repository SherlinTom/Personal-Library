import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavourite } from '../redux/BookSlice'
import { FaFilePdf } from 'react-icons/fa'

const FavouriteBooks = () => {
  const fav_books = useSelector((state) => state.books.favourites);
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeFromFavourite(id));
};
const handleDownloadPDF = (item) => {
  if (item && item.pdf) {
    window.open(item.pdf, '_blank');
  } else {
    console.error("PDF URL is missing for this item.");
  }
}
  return (
    <Container className='my-5'>
      <h2 className='text-center pb-3'>Favourite Books</h2>
         {fav_books.length > 0 ? (
                <Row className="g-4">
                    {fav_books.map((item, index) => (
                       <div md={8} xl={4} xxl={3} key={index}>
                       <Card body>
                       <Row>
                        <Col md={2}>
                            <FaFilePdf title='read book' className='ms-auto' style={{color:'brown',cursor:'pointer',fontSize:25}} onClick={() => handleDownloadPDF(item) }/> 
                            <p className=""><center><Image src={item.image} height={100} /></center></p>
                        </Col>
                        <Col md={8}>
                              <h5>{item.title}</h5>
                              <p> <span style={{fontSize:20}}>{item.author}</span> | <span className='text-secondary'> {item.genre}</span> </p>
                              <p>{item.summary}</p>
                         </Col>
                         
                         <Col md={2}>
                           <div className="text-end">
                           <Button className="btn-danger"  onClick={() => handleRemove(item.id)}>Remove</Button>
                           </div>
                        </Col>
                        </Row>
                       </Card>
                      </div>
                    ))}
                   
                </Row>
                

            ) : (
                <p>No books in the favourite list. <Link to='/book-list'>Go to library</Link></p>
            )}
    </Container>
  )
}

export default FavouriteBooks