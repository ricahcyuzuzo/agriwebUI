import React, { useState } from 'react';
import './App.css';
import Shop from './components/pages/Shop';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewProduct from './components/pages/ViewProduct';
import Login from './components/pages/Login';
import CartContext from './context/cartContext';
import SignupScreen from './components/pages/Signup';
import SellerHome from './components/pages/SellerHome';
import ProductsScreen from './components/pages/Seller/Products';
import ProfileScreen from './components/pages/Seller/Profile';
import AddProduct from './components/pages/Seller/AddProduct';
import UpdateProduct from './components/pages/Seller/UpdateProduct';
import About from './components/pages/About';
import Farmers from './components/ProductRowOne';

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  return (
    <CartContext.Provider value={{ cart, setCart, product, setProduct }} >
    <Router>
      <Switch>
        <Route path='/' exact component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Login} />
        <Route path='/product' component={ViewProduct} />
        <Route path='/farmers' component={Farmers} />
        <Route path='/seller/home' component={SellerHome} />
        <Route path='/seller/product' component={ProductsScreen} />
        <Route path='/seller/profile' component={ProfileScreen} />
        <Route path='/seller/add_product' component={AddProduct} />
        <Route path='/seller/update_product' component={UpdateProduct} />
      </Switch>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
