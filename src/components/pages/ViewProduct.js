import React, {useState, useContext, useEffect} from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import pic from '../images/big1.png';
import './pages.css';
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar2';
import axios from 'axios'

function ViewProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/products_approved').then((res) => {
            setProducts(res.data.data);
            console.log(res.data.data)
        })
    }, [])

    return(
        <>
        <Navbar />
        <h1 style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>Products</h1>
        <div style={{
            display: 'flex',
            width: '90%',
            marginTop: '60px',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 'auto',
            paddingLeft: 100
        }}>
            {products.map((item, idx) => {
                return (
                    <Link key={idx} onClick={() => {
                        window.localStorage.setItem('productName', item.productName);
                    }} to='/farmers' style={{
                        textDecorationLine: 'none',
                        textDecorationColor: '#331974',
                        marginRight: 40
                    }}><div 
                    className='shadow-lg p-3 mb-5 bg-body' style={{
                        width: 200,
                        height: 250,
                        borderRadius: 20,
                        textAlign: 'center',
                        paddingTop: 20,
                        cursor: 'pointer',
                    }}>
                        <img src={item.image} style={{
                            width: 150,
                            height: 150,
                            borderRadius: 10,
                        }} />
                        <h4 style={{
                            marginTop: 20,
                            color: '#222222'
                        }}>{item.productName}</h4>
                        <span>{item.productCategory}</span>
                    </div></Link>
                )
            })}
        </div>
        </>
    )
}

export default ViewProduct;