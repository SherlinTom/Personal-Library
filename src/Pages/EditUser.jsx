import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/UserSlice";
const EditUser = () => {
  const { id } = useParams();
  const { Formik } = formik;

  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.users);
  const [user,setUser] = useState(null);
  useEffect(()=>{
    const u = users.find((item) => item.id === Number(id));
    setUser(u);
  },[id,user]);
  const handleSubmit = (values) => {
    dispatch(updateUser({...user,...values}));
    toast.success("Success!");
  };
  const schema = yup.object().shape({
    name: yup.string(),
    role: yup.string(),
    email: yup.string(),
    password: yup.string(),
  });
  return (
    <Container className="my-5">
      <Row>
        <Col className="mx-auto" md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="py-3 text-center">
                <h3>Edit User</h3>
              </Card.Title>
              {
                user && (

              
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                  name: user.name || "",
                  role: user.role || "",
                  email: user.email || "",
                  password: user.password || "",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01"
                        className="mb-3 position-relative"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          value={values.name}
                          onChange={handleChange}
                          isValid={touched.name && !errors.name}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" className="position-relative">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                          as="select" // Change the input to a select dropdown
                          name="role"
                          value={values.role}
                          onChange={handleChange}
                          isValid={touched.role && !errors.role}
                          isInvalid={touched.role && errors.role}
                        >
                          <option value="">Select Role</option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.role}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormikUsername2"
                      >
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
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

                      <Form.Group
                        as={Col}
                        md="6"
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
                    <div className="py-3 text-center">
                      <Button type="submit">Update</Button>
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

export default EditUser;
