import React, { useEffect, useState } from 'react'
import productImage from './images/productImage.png';
import { Button, Badge, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import CartContext from '../context/cartContext';
import { FaArrowLeft, FaLongArrowAltLeft } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

function Farmers(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/getname', {params: {name: window.localStorage.getItem('productName')}}).then((res) => {
            setProducts(res.data.data);
            console.log(res.data.data)
        })
    }, [])

    let history = useHistory();
    return(
        <div className='container' style={{
            paddingTop: 50
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 10px 10px 10px'
            }}>
            <Button onClick={() => history.goBack()} variant='primary' style={{
                marginBottom: 20
            }}><FaArrowLeft size={24} /></Button>
            <Form.Control type='text' placeholder='Search' style={{ width: '20%'}} />
            </div>
            <div className='shadow-lg p-3 mb-5 bg-body' style={{
                width: '100%',
                height: 110,
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 15
            }}>
                <div style={{
                    display: 'flex',
                }}>
                    <img style={{
                        width: 80,
                        height: 80,
                        borderRadius: '100%',
                    }} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                    <div style={{
                        marginTop: 10,
                        marginLeft: 20
                    }}>
                        <h4>Hananiya Rwabukeye</h4>
                        <p><Badge variant='primary'>120 KGs</Badge> <Badge variant='dark' style={{
                            backgroundColor: 'purple'
                        }}>203 RWF / Kg</Badge></p>
                    </div>
                </div>
                <div style={{
                    marginTop: 10,
                    textAlign: 'right',
                    color: 'gray'
                }}>
                    <h5>Nyaruguru District</h5>
                    <h5>+250 784 218 000</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Farmers;
