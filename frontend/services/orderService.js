import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders/';

export const placeOrder = (order) => axios.post(API_URL, order);

export const getOrders = () => axios.get(API_URL);

export const markOrderAsCompleted = (orderId) => axios.put(`${API_URL}${orderId}/complete`);
