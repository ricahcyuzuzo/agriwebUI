import React, { useContext } from 'react'
import productImage from './images/productImage.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/cartContext';

function ProductRowOne({name, price, image, description, seller}){

    const {setProduct} = useContext(CartContext);

    const product = {
        image,
        name,
        price,
        description,
        seller
    };
    return(
        <div style={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingBottom: '50px'
        }}>
            <div className="productCard" style={{
                backgroundColor: '#BCD8AE', 
                width: '157px', 
                height: '197px',
                marginLeft: '50px',
                marginTop: '50px',
                borderRadius: '10px',
                paddingRight: '9px',
                paddingTop: '10px',
                }}>
                <img src={image} style={{paddingLeft: '9px', paddingBottom: '9px', width: 150, height: 90,borderRadius: 20}} alt="Product" />
                <div style={{textAlign: 'center'}}><b>{name}</b><br />
                {price} Rwf Per 1Kg</div>

                <Link to='/product'><Button  onClick={() => {
                    setProduct(product)
                }} style={{
                    backgroundColor: '#7F8FAF', 
                    width: '140px', 
                    height: '31px', 
                    borderRadius: '5px',
                    marginLeft: '9px',
                    paddingTop: 1,
                    marginTop: '5px'}}>View Product</Button></Link>
            </div>

            
        </div>
    )
}

export default ProductRowOne;
