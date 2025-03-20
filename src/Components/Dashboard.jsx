import React from "react";
import { Card, Col, Container, Image, Nav, Row } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const book = useSelector((state)=>state.books.books)
  const fav_books = useSelector((state)=>state.books.favourites)
  const genre = new Set(book.map((item) => item.genre))
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card style={{ boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)" }}>
          <Nav.Link as={Link} to={'/book-list'}>
            <Card.Body >
             <center>
              <Image src='https://www.svgrepo.com/show/94674/books-stack-of-three.svg' height={50}/>
              <Card.Title className="pt-3">Book Collection</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {book.length}
              </Card.Subtitle>
             </center> 
            </Card.Body>
            </Nav.Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)" }}>
            <Card.Body >
             <center>
              <Image src='https://svgsilh.com/svg/2379396.svg' height={50}/>
              <Card.Title  className="pt-3">Genre</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {genre.size}
              </Card.Subtitle>
             </center> 
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={3}>
          <Card style={{ boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)" }}>
            <Card.Body >
             <center>
              <Image src='https://svgsilh.com/svg/307757.svg' height={50}/>
              <Card.Title  className="pt-3">Read Later</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                3
              </Card.Subtitle>
             </center> 
            </Card.Body>
          </Card>
        </Col> */}
        <Col md={4}>
          <Card style={{ boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)" }}>
          <Nav.Link as={Link} to={'/favourite-books'}>
            <Card.Body >
             <center>
              <Image src='https://cdn1.iconfinder.com/data/icons/carbon-apps-store-1/48/wishlist-512.png' height={50}/>
              <Card.Title  className="pt-3">Favourite</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {fav_books.length}
              </Card.Subtitle>
             </center> 
            </Card.Body>
            </Nav.Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
