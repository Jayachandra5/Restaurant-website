import React, { useEffect, useState } from 'react';
import { getOrders, markOrderAsCompleted } from '../services/orderService';

function StaffPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleComplete = async (orderId) => {
    await markOrderAsCompleted(orderId);
    setOrders(orders.map(order => order._id === orderId ? { ...order, status: 'completed' } : order));
  };

  return (
    <div>
      <h2>Incoming Orders</h2>
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
          {order.status === 'pending' && <button onClick={() => handleComplete(order._id)}>Mark as Completed</button>}
        </div>
      ))}
    </div>
  );
}

export default StaffPage;
