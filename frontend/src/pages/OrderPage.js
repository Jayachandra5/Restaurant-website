import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(order => (
        <div key={order._id}>
          <h3>Table: {order.tableNumber}</h3>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.menuItem._id}>{item.menuItem.name} x {item.quantity}</li>
            ))}
          </ul>
          <p>Total Amount: ${order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderPage;
