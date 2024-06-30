import React, { useEffect, useState } from 'react';
import { getMenuItems } from '../services/menuService';
import { placeOrder } from '../services/orderService';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data } = await getMenuItems();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const handleOrder = async () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const items = cart.map(item => ({
      menuItem: item._id,
      quantity: item.quantity
    }));

    await placeOrder({ tableNumber, items, totalAmount });
    setCart([]);
  };

  return (
    <div>
      <h2>Menu</h2>
      <div>
        {menuItems.map(item => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <div>
        {cart.map(item => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Table Number"
        />
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default MenuPage;
