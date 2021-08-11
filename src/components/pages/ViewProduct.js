import React, {useState, useContext} from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import pic from '../images/big1.png';
import './pages.css';
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function ViewProduct() {
    const [totalP, setTotalP] = useState('');
    const [quantity, setQuantity] = useState('');

    const {product, cart} = useContext(CartContext);
    console.log(product)

    return(
        <>
        <Navbar />
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '100px',
            flexDirection: 'row'
        }}>
            <div className="col1" style={{backgroundColor: 'black', borderRadius: 20,}}>
                <img src={product.image} alt="product" style={{
                    borderRadius: 20,
                    width: 400,
                    height: 350,
                }} />
            </div>
            <div style={{
                width: '50%',
                wordWrap: 'normal',
            }} className="col2">
                <h1 style={{
                    paddingBottom:'20px'
                }}>{product.name}</h1>
               {product.description}
                <div style={{
                    paddingTop: '30px',
                }}>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Quantity" placeholder="Quantity in Numbers" onChange={(val) => {
                       const totalPrice = product.price * val.target.value
                       setQuantity(val.target.value)
                        setTotalP(totalPrice);
                    }} />
                    <InputGroup.Text>Kg * {product.price} Rwf</InputGroup.Text>
                </InputGroup>
                </div> 
                <div>
                <b>Price:</b> {totalP} Rwf
                </div>
                <div>
                <Link to='/cart'><button  onClick={() => {
                    cart.push({
                        name: product.name,
                        quantity: quantity,
                        price: totalP,
                        image: product.image
                    });
                    console.log(cart)
                }} style={{
                    width: '225px',
                    height: '56px',
                    backgroundColor: '#346B33',
                    borderRadius: '5px',
                    color: '#FEFEFE',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: '30px',
                    borderWidth: '0px'
                }}>Add to Cart</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewProduct;