import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CategoriesNavigation from '../CategoriesNav';
import '../../App.css';
import ProductRowOne from '../ProductRowOne';
import ProductRowTwo from '../ProductRowTwo';
import Navbar from '../Navbar';

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getAllProductsApproved();
  }, [])

  const getAllProductsApproved = () => {
    axios.get('http://agrirwanda.eu-4.evennode.com/api/products_approved')
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data)
      });
  };

  return (
    <div className="App">
      <Navbar />
      <CategoriesNavigation />
      <div style={{
          display: 'flex',
      }}>
      {products.map((item, idx) => {
        return (
          <ProductRowOne key={idx} seller={item.sellerIdentifier} image={item.image} name={item.productName} price={item.pricePerUnit} description={item.description} />
        )
      })}
      </div>
      <h3 style={{
                marginTop: '40px',
                paddingLeft: '40px',
            }}>Popular <font color="#346B33">Products</font></h3>
            <div style={{ 
              display: 'flex',
            }}>
      {products.map((item, idx) => {
        return (
          <ProductRowTwo key={idx} image={item.image} name={item.productName} price={item.pricePerUnit} />
        )
      })}
      </div>
    </div>
  );
}

export default Shop;
