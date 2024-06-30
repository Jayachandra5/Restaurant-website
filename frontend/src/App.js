import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import StaffPage from './pages/StaffPage';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <AuthRoute path="/menu" component={MenuPage} />
        <AuthRoute path="/order" component={OrderPage} />
        <AuthRoute path="/staff" component={StaffPage} roles={['staff']} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
