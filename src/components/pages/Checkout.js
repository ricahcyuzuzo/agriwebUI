import React, {useContext, useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import Navbar from '../Navbar';
import CartContext from '../../context/cartContext';
import axios from 'axios';

const Checkout = () => {
    const [productss, setProducts] = useState([]);
    const [names, setNames] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const {cart, product} = useContext(CartContext); 

    useEffect(() => {
        setProducts(cart);
        console.log(cart);
    }, [])

    return (
        <>
        <Navbar />
        <div className='container'>
            <div style={{
                width: '40%',
                marginTop:100,
                margin: 'auto'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Checkout</h1>
                <Form.Label>Names</Form.Label>
                <Form.Control type='text' onChange={(e) => setNames(e.target.value)}  placeholder='Your names'/>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' onChange={(e) => setAddress(e.target.value)}  placeholder='Kigali/Nyarugenge/Nyarugenge/Kiyovu/Kiyovu' />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' onChange={(e) => setPhoneNumber(e.target.value)}  placeholder='This will be used for payment' maxLength={10} minLength={10} />
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}  placeholder='This will be used for payment' />
                <Button onClick={() => {
                    axios.post('http://127.0.0.1:7000/api/order', {
                        products: productss,
                        customerName: names,
                        customerAddress: address,
                        phoneNumber: phoneNumber,
                        sellerIdentifier: product.seller,
                        email: email
                    }).then((res) => {
                        alert(res.data.message);
                    })
                }} variant='primary' style={{
                    marginTop: 20,
                    width: '100%'
                }}>Pay</Button>
            </div>    
        </div>
        </>
    )
}

export default Checkout
