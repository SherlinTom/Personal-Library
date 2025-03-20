
import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import * as formik from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser } from '../redux/UserSlice';
const Login = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
      email: yup.string().required().email("Enter valid format"),
      password: yup.string().required().min(3,"Password contains atleast 3 characters"),
     
    });
    const users = useSelector ((state) => state.users.users)
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
     
        const user = users.find((item) => item.email === values.email);
        if(!user){
          return toast.error("user not found");
        }
        if(user.password !== values.password){
          return toast.error("user not found");
        }
        dispatch(setLoggedUser(user))
        toast.success(`${user.name}, Welcome to e-Library!`);
        navigate('/');
     
    }
  return (
    <Container className='my-5'>
        <Row>
        <Col className='mx-auto' md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="py-3 text-center"><h3>Login</h3></Card.Title>
            <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                email: '',
                password: ''
            }}
            >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                   
                    <Form.Group as={Col} md="12" controlId="validationFormikUsername2" className="position-relative">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik103"
                    className="position-relative"
                    >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.password}
                    </Form.Control.Feedback>
                    </Form.Group>
                 
                </Row>
                <div className="py-3">
                <Button type="submit">Login</Button>
                </div>
                <p>Don't have an account?  Please <Link to='/signup'>SignUp</Link></p> 
                </Form>
            )}
            </Formik>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Login