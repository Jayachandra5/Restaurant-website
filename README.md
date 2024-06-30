
# Restaurant Ordering and Order Viewing Application

## Objective

Develop a web application for a restaurant that allows customers to browse the menu and place orders. The application should have two user roles: customers and restaurant staff. Customers can browse the menu, add items to their cart, and place orders. Restaurant staff can view incoming orders and mark them as completed.

## Technologies

- **Front-end**: React
- **Back-end**: Node.js/Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Features

### Customer Interface

1. **Login Page**
   - Login using basic details of a restaurant customer.

2. **Menu Browsing**
   - Display a list of menu items with details such as name, description, price, and image.
   - Categorize menu items (e.g., appetizers, main courses, desserts, drinks).

3. **Order Placement**
   - Allow customers to select their table number and add items to their cart.
   - Enable customers to review their cart, adjust quantities, and remove items.

4. **Order Viewing**
   - Display current submitted order details.

### Restaurant Staff Interface

1. **Order Management**
   - Display a list of incoming orders with details such as table number, order items, and total amount.
   - Allow staff to mark an order as completed.

### Authentication

1. **User Roles**
   - Implement authentication for both customers and staff.
   - Ensure that only authenticated staff can access order management features.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Clone the Repository

```sh
git clone https://github.com/your-username/restaurant-ordering-app.git
cd restaurant-ordering-app
```

### Backend Setup

1. **Install Dependencies**

   ```sh
   cd backend
   npm install
   ```

2. **Environment Variables**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here
   JWT_SECRET=bb01eb4f4ad0e83f198aebd7c4aca01b38bc955e8f58fbdaf5a187fb3af0dd9dfd3cfe1d5509fbfd0db2e69b6e4abb53c0a1b11326a4b10c3c66b74dcbe55271
   ```

   Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

3. **Run the Server**

   ```sh
   npm start
   ```

### Frontend Setup

1. **Install Dependencies**

   ```sh
   cd frontend
   npm install
   ```

2. **Run the Application**

   ```sh
   npm start
   ```

### Docker Setup (Optional)

1. **Build and Run Containers**

   ```sh
   docker-compose up --build
   ```

### Directory Structure

```
restaurant-ordering-app/
├── backend/
│   ├── models/
│   │   └── MenuItem.js
│   ├── routes/
│   │   ├── menu.js
│   │   └── order.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env
├── docker-compose.yml
└── README.md
```

## Usage

### Customer Interface

- Navigate to `/login` to log in.
- Browse the menu, add items to your cart, and place an order.
- View your current order status.

### Restaurant Staff Interface

- Navigate to `/staff` to view incoming orders.
- Mark orders as completed.

