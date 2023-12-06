import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { orderData } from '../../data/dummyData';

function OrderHistory({ orderList }) {
     const [orders, setOrders] = useState([...orderData]);
     return (
          <div style={{ margin: '5rem', textAlign: 'center' }}>
               <h1 style={{ marginBottom: '2rem' }}>Order History</h1>
               <Table responsive>
                    <thead>
                         <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                         </tr>
                    </thead>
                    <tbody>
                         {orders.map((order) => (
                              <tr>
                                   <td key={order.id}>{order.id}</td>
                                   <td key={order.id}>{order.name}</td>
                                   <td key={order.id}>${order.price}</td>
                                   <td key={order.id}>{1}</td>
                              </tr>
                         ))}
                    </tbody>
               </Table>
          </div>
     );
}

export default OrderHistory;
