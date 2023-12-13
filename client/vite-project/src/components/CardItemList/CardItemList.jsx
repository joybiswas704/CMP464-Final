import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function CardItemList() {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          getProducts();
     }, []);

     const handleBuy = (id) => {
          updateOrders(id);
          deleteProduct(id);
          getProducts();
     };

     function getProducts() {
          axios.get('http://localhost:3000/api/products')
               .then(function (response) {
                    console.log(response.data);
                    setProducts(response.data);
               })
               .catch(function (error) {
                    console.log(error);
               });
     }

     function deleteProduct(id) {
          axios.delete(`http://localhost:3000/api/products/${id}`)
               .then(function (response) {
                    console.log('item deleted');
               })
               .catch(function (error) {
                    console.log(error);
               });
     }

     function updateOrders(id) {
          const order = products.filter((product) => product.id === id);
          console.log(order);
          axios.post('http://localhost:3000/api/orders', order)
               .then(function (response) {
                    console.log(response.data);
               })
               .catch(function (error) {
                    console.log(error);
               });
     }

     return (
          <Container fluid>
               <Row>
                    {products.map((product) => (
                         <Col key={product.id}>
                              <CardItem
                                   key={product.id}
                                   id={product.id}
                                   name={product.name}
                                   price={product.price}
                                   img={product.img}
                                   des={product.des}
                                   handleBuy={handleBuy}
                              />
                         </Col>
                    ))}
               </Row>
          </Container>
     );
}
