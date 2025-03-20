
import {Container,Row,Col, Card, ListGroup, Image} from 'react-bootstrap'
import { FaBookmark, FaFilePdf } from 'react-icons/fa'
import { RiHeartAddFill, RiHeartFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToFavourite, removeFromFavourite } from '../redux/BookSlice'
const BookDetails=()=>{

    const {id} = useParams()
    
    const book = useSelector((state) =>state.books.books.find((_,index) => index === Number(id)));
    const handleDownloadPDF = (item) => {
        if (item && item.pdf) {
          window.open(item.pdf, '_blank');
        } else {
          console.error("PDF URL is missing for this item.");
        }
      }
      const dispatch = useDispatch()
      
      const handleAddToFavourite = (item) => {
          dispatch(addToFavourite(item))
      }
      const handleRemoveFromFavourite = (item) => {
          dispatch(removeFromFavourite(item))
      }
      
       const favourites = useSelector((state) => state.books.favourites); 
      const isFavourite = (book) => favourites.find((fav) => fav.id === book.id); 
    return(
        <>
        <Container >
          {  book && (
            <Row className='py-5'>
                <Col md={4} >
                    <Image src={book.image} thumbnail className='border-0'alt="" />
                </Col>
                <Col md={8}>
                <Card >
                <ListGroup variant="flush">
                    <ListGroup.Item>
                         <h3>{book.title}
                        
                            </h3>
                    </ListGroup.Item>
                    
                    <ListGroup.Item className='md-auto'> <p style={{fontSize:20, fontWeight:'bold'}}> {book.author} <FaBookmark className='ms-5 text-secondary' /><span className='text-muted'> {book.genre}</span> 
                    <FaFilePdf title='read book' className='ms-5' style={{color:'brown',cursor:'pointer',fontSize:25}} onClick={() => handleDownloadPDF(book) }/>  {isFavourite(book) ? (
                        <RiHeartFill title='remove from favourite' style={{color:'red',fontSize:25,cursor:'pointer'}} className='ms-5' onClick={()=>handleRemoveFromFavourite(book.id)}/>
                            
                            ) : (
                            <RiHeartAddFill title='add to favourite' style={{color:'green',fontSize:25,cursor:'pointer'}} className='ms-5' onClick={() => handleAddToFavourite(book)}/>
                            )}
                    </p></ListGroup.Item>
                    <ListGroup.Item>{book.summary}</ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
            </Row>
          )}
        </Container>
        </>
    )
}
export default BookDetails