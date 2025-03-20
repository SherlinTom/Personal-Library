import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const About = () => {
  return (
   <Container fluid className='bg-body-tertiary'>
    <Row className='my-5 p-3 md-auto'>
        <center><h2>About</h2></center>
        <Col md={8}>
        <p style={{lineHeight:2}}>Welcome to our E-Library, your digital gateway to an extensive collection of books across diverse genres. Our platform is designed to cater to book enthusiasts and knowledge seekers by offering a seamless and interactive reading experience. With the ability to add, update, and delete books, managing your library becomes effortless, ensuring it remains fresh and organized. You can easily browse through all available titles or explore books filtered by specific genres, making it convenient to find exactly what you’re looking for. The platform allows you to create a personalized list of favorite books, adding or removing titles as you please, so your must-reads are always within reach.

        <br />Additionally, our analytics dashboard provides valuable insights into your library, such as the total number of books, distinct genres, and favorite books count, helping you better understand your collection. To enhance your experience further, you can read books directly online, offering convenience and accessibility anytime, anywhere. Our E-Library is more than just a repository of books; it’s a comprehensive and user-friendly platform for readers, students, and professionals to explore and manage their reading preferences with ease. Dive into the world of literature and let your imagination soar!</p>
        </Col>
        <Col md={4}>
        <Image src='https://cdni.iconscout.com/illustration/premium/thumb/online-library-illustration-download-in-svg-png-gif-file-formats--digital-reading-education-various-themes-set-015-pack-miscellaneous-illustrations-6353482.png?f=webp' className='w-100' />
        </Col>
    </Row>
    </Container>
  )
}

export default About