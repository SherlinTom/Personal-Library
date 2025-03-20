import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate(genre ? `/book-list/${genre}` : '/book-list');
  };
  return (
    <>
    {/* <Container> */}
      <Row>
        <Col className='md-auto'>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('')}>All Books</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Fiction')}>Fiction</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Non-Fiction')}>Non-Fiction</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Adventure')}>Adventure</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Biography')}>Biography</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Fantasy')}>Fantasy</Button>
          <Button className='btn-success border border-light me-2' onClick={() => handleGenreClick('Thriller')}>Thriller</Button>
          <Button className='btn-success border border-light' onClick={() => handleGenreClick('Novel')}>Novel</Button>
        </Col> 
      </Row>
    {/* </Container> */}
    </>
  )
}

export default Category