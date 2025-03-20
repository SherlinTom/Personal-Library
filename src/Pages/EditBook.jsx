import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import {   updateBook } from '../redux/BookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const {id} = useParams();
  const {books} = useSelector((state) => state?.books?? []);
  const [book,setBook] = useState(null);
  useEffect(()=>{
    const b = books.find((item) => item.id === Number(id));
    setBook(b);
  },[id,book]);
    
  const handleUpdate = (values) =>{
     dispatch(updateBook({...book,...values}));
     toast.success('Book Updated Successfully!');
  }
  

  
  const schema = yup.object().shape({
    title: yup.string(),
    author: yup.string(),
    genre: yup.string(),
    summary: yup.string(),
    image: yup.string().url('Must be a valid URL'),
  });


  return (
    <Container className="my-5">
     
      <Row>
        <Col className='mx-auto' md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="py-3 text-center">Update Book</Card.Title>
              {
                book && (
              <Formik
                validationSchema={schema}
                onSubmit={handleUpdate}
                initialValues={{
                  title: book.title,
                  author: book.author,
                  genre: book.genre,
                  image: book.image,
                  summary: book.summary,
                  pdf: book.pdf
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="6" className="position-relative">
                        <Form.Label> Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          placeholder="Enter Book Title"
                          value={values.title}
                          onChange={handleChange}
                          isValid={touched.title && !errors.title}
                          isInvalid={touched.title && errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" className="position-relative">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                          type="text"
                          name="author"
                          placeholder="Enter Author of Book"
                          value={values.author}
                          onChange={handleChange}
                          isValid={touched.author && !errors.author}
                          isInvalid={touched.author && errors.author}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.author}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="position-relative">
                    <Form.Label>Genre / Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="genre"
                      onChange={handleChange}
                      placeholder='Select Genre of Book'
                      isValid={touched.genre && !errors.genre}
                      isInvalid={touched.genre && errors.genre}
                    >
                      <option value={values.genre}>{values.genre}</option> 
                      <option value="Fiction">Fiction</option>
                      <option value="Non-Fiction">Non-Fiction</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Biography">Biography</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Novel">Novel</option>
                      <option value="Thriller">Thriller</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.genre}
                    </Form.Control.Feedback>
                  </Form.Group>

                      <Form.Group as={Col} md="6" className="position-relative">
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          placeholder="Enter Image URL"
                          value={values.image}
                          onChange={handleChange}
                          isValid={touched.image && !errors.image}
                          isInvalid={touched.image && errors.image}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.image}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <Form.Group as={Col} md="12" className="position-relative">
                    <Form.Label>PDF</Form.Label>
                    <Form.Control
                    type="text"
                    name="pdf"
                    placeholder="Enter Book PDF"
                    value={values.pdf}
                    onChange={handleChange}
                    isValid={touched.pdf && !errors.pdf}
                    isInvalid={touched.pdf && errors.pdf}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.pdf}
                    </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" className="position-relative">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="summary"
                          rows={3}
                          placeholder="Enter a brief summary of the book"
                          value={values.summary}
                          onChange={handleChange}
                          isValid={touched.summary && !errors.summary}
                          isInvalid={touched.summary && errors.summary}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.summary}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <div className="text-center pb-3">
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                )}
              </Formik>
              )
            }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditBook;
