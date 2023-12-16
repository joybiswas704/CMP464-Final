import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function AddProducts() {
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
                                        <Form.Control type='text' />
                                   </Form.Group>
                              </Col>
                              <Col>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type='text' />
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
                                        <Form.Control type='text' />
                                   </Form.Group>
                                   <Form.Group
                                        className='mb-3'
                                        controlId='exampleForm.ControlInput1'
                                   >
                                        <Form.Label>Image Link</Form.Label>
                                        <Form.Control type='text' />
                                   </Form.Group>
                              </Col>
                         </Row>
                         <Row>
                              <Col>
                                   <Button variant='primary'>
                                        Add Product
                                   </Button>
                              </Col>
                         </Row>
                    </Form>
               </Container>
          </>
     );
}
