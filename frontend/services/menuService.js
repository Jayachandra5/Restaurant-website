import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menu/';

export const getMenuItems = () => axios.get(API_URL);

export const addMenuItem = (item) => axios.post(API_URL, item);
