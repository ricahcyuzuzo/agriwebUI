import React, { useContext, useState, useEffect} from 'react'
import productImg from '../images/ProductCart.png';
import DeleteIcon from '../images/deleteIcon.png';
import CartContext from '../../context/cartContext';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Cart() {
    const [carts, setCarts] = useState([]);
    const {cart} = useContext(CartContext);

    useEffect(() => {
        setCarts(cart);
        console.log(carts);
    }, [cart])

    return(
        <>
        <Navbar />
        <div className="container" style={{
            marginTop: '70px'
        }}>
            <h1>My <font color="#346B33">Cart</font></h1>
            {carts.map((item,idx) => {
                return (<div key={idx} style={{
                    width: '100%',
                    height: '157px',
                    backgroundColor: '#F4F4F4',
                    borderRadius: '15px',
                    marginTop: '40px',
                    display: 'flex'
                }}>
                    <div>
                        <img src={item.image} alt="product" style={{padding: '9px', width:  180, height: 150}} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div style={{marginTop: '10px', marginLeft: '20px'}}>
                            <div style={{paddingBottom: '10px', paddingTop: '20px'}}><b>{item.name}</b></div>
                            <div style={{paddingBottom: '10px'}}>{item.quantity} Kg</div>
                            <div style={{paddingBottom: '10px'}}><b>Price:</b>{item.price} Rwf</div> 
                        </div>
                        <div>
                            <img onClick={() => {        
                                    carts.splice(idx, 1)   
                                    const cartss = carts;
                                    console.log(cartss);
                                    setCarts(cartss);                        

                            }} src={DeleteIcon} alt="deleteIcon" style={{ marginTop: '20px', marginRight: '20px', cursor: 'pointer'}} />
                        </div>
                    </div>
                </div>)
            })}

            <Link to='/checkout'><Button variant='success' style={{
                width: '200px',
                fontSize: 18,
                marginTop: 50
            }}>Check out</Button></Link>
        </div>
        </>
    );
}

export default Cart;