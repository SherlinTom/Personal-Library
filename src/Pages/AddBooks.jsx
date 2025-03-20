import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { addBook } from '../redux/BookSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    genre: yup.string().required('Genre is required'),
    summary: yup.string().required('Summary is required'),
    image: yup.string().url('Must be a valid URL').required('Image URL is required'),
    pdf: yup.string().url('Must be a valid URL').required('PDF URL is required'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddBook = (values, { resetForm }) => {
    dispatch(addBook(values));
    toast.success('Book added successfully!');
    resetForm();  
    navigate('/book-list')
  };

  return (
    <Container className="my-5">
      <Row>
        <Col className='mx-auto' md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center py-3">Add New Book</Card.Title>
              <Formik
                validationSchema={schema}
                onSubmit={handleAddBook}
                initialValues={{
                  title: '',
                  author: '',
                  genre: '',
                  image: '',
                  pdf: '',
                  summary: '',
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="6" className="position-relative">
                        <Form.Label>Title</Form.Label>
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
                      as="select" // Change the input to a select dropdown
                      name="genre"
                      value={values.genre}
                      onChange={handleChange}
                      isValid={touched.genre && !errors.genre}
                      isInvalid={touched.genre && errors.genre}
                    >
                      <option value="">Select Genre</option> 
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBooks;
