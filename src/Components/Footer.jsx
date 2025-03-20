import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  RiBookOpenLine, RiFacebookBoxFill, RiInstagramLine, RiThreadsFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Container fluid className='bg-dark' >
        <Row >
            <Col className='md-auto'>
            <Row className='text-light m-3'>
              
            <Col className='m-3'>
              <h5>Platform</h5>
              <p >Home <br /> About <br /> Login <br /> Sign Up </p>  
            </Col>
            <Col className='m-3'>
              <h5>Learn</h5>
              <p >Contact <br /> Support <br /> Blog <br /> FAQs <br />Careers </p>  
            </Col>
            <Col className='m-3'>
              <h5>Policies</h5>
              <p >Privacy <br /> Security <br /> Terms <br /> Sitemap </p>  
            </Col>
            <Col>
              <b><RiBookOpenLine fontSize={25} className='text-light mt-3'/></b> 
              <p className='pt-2'>Welcome to e-Library, your one-stop platform for seamless book management. Whether you're organizing a personal library or running a bookstore, we provide tools to manage, categorize, and track your books with ease. Discover, explore, and simplify your reading journey with us!</p>  
            </Col>
            </Row>
            <hr className='text-light ' />
            <p className='text-center'>
            <RiYoutubeFill fontSize={30} className='text-light m-3' />
             <RiInstagramLine fontSize={25} className='text-light m-3'/>
              <RiFacebookBoxFill fontSize={25} className='text-light m-3'/>
              <RiThreadsFill fontSize={25} className='text-light m-3'/>
              <RiTwitterXFill fontSize={25} className='text-light m-3'/>
            </p>
            <p className="text-light text-center">© presented by sherlin_tom_c | e-Library</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer