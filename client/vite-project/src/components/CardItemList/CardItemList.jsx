import React, { useState } from 'react';
import CardItem from '../CardItem/CardItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productList, orderData, removesProduct } from '../../data/dummyData';

export default function CardItemList() {
     const [products, setProducts] = useState([...productList]);
     const handleBuy = (id) => {
          removesProduct(id);
          if (
               products.filter((product) => {
                    if (id === product.id) {
                         updateOrderData(product);
                    }
               })
          )
               setProducts(productList);
     };

     const updateOrderData = (product) => {
          orderData.push(product);
          console.log(orderData);
     };
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
