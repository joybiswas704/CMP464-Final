import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function AddProducts() {
     const [name, setName] = useState('');
     const [price, setPrice] = useState('');
     const [des, setDes] = useState('');
     const [img, setImg] = useState('');

     const handleAddProducts = () => {
          axios.post('http://localhost:3000/api/products', {
               id: Math.floor(Math.random() * 99999),
               name: name,
               price: price,
               des: des,
               img: img,
          })
               .then(function (response) {
                    console.log(response.data);
                    setProducts(response.data);
               })
               .catch(function (error) {
                    console.log(error);
               });
     };

     return (
          <>
               <Container fluid>
                    <Form
                         style={{
                              maxWidth: 1000,
                              padding: 100,
                              border: '3px black solid',
                              margin: 50,
                         }}
                    >
                         <Row>
                              <Col>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                             name={name}
                                             value={name}
                                             type='text'
                                             onChange={(event) =>
                                                  setName(event.target.value)
                                             }
                                        />
                                   </Form.Group>
                              </Col>
                              <Col>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                             name={price}
                                             value={price}
                                             type='text'
                                             onChange={(event) =>
                                                  setPrice(event.target.value)
                                             }
                                        />
                                   </Form.Group>
                              </Col>
                         </Row>
                         <Row>
                              <Col>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                             name={des}
                                             type='text'
                                             onChange={(event) =>
                                                  setDes(event.target.value)
                                             }
                                             value={des}
                                        />
                                   </Form.Group>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Image Link</Form.Label>
                                        <Form.Control
                                             name={img}
                                             value={img}
                                             type='text'
                                             onChange={(event) =>
                                                  setImg(event.target.value)
                                             }
                                        />
                                   </Form.Group>
                              </Col>
                         </Row>
                         <Row>
                              <Col>
                                   <Button
                                        variant='primary'
                                        onClick={handleAddProducts}
                                   >
                                        Add Product
                                   </Button>
                              </Col>
                         </Row>
                    </Form>
               </Container>
          </>
     );
}
