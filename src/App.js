import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContext from './context/cartContext';
import ProductsScreen from './components/pages/Seller/Products';
import ProfileScreen from './components/pages/Seller/Profile';
import AddProduct from './components/pages/Seller/AddProduct';
import UpdateProduct from './components/pages/Seller/UpdateProduct';
import Home from './components/pages/Home/Home';
import ViewProduct from './components/pages/ViewProduct';
import Farmers from './components/ProductRowOne';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';
import About from './components/pages/About';
import SellerDashboard from './components/pages/SellerDashboard';
import Forum from './components/pages/Forum';
import AddTopic from './components/pages/AddTopic';
import CommentTopic from './components/pages/ViewTopic';
import MessageScreen from './components/pages/Seller/Messages';

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  return (
    <CartContext.Provider value={{ cart, setCart, product, setProduct }} >
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={ViewProduct} />
        <Route path='/farmers' component={Farmers} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
        <Route path='/about' component={About} />
        <Route path='/forum' component={Forum} />
        <Route path='/ask' component={AddTopic} />
        <Route path='/comment' component={CommentTopic} />
        <Route path='/seller/home' component={SellerDashboard} />
        <Route path='/seller/product' component={ProductsScreen} />
        <Route path='/seller/profile' component={ProfileScreen} />
        <Route path='/seller/message' component={MessageScreen} />
        <Route path='/seller/add_product' component={AddProduct} />
        <Route path='/seller/update_product' component={UpdateProduct} />
      </Switch>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
