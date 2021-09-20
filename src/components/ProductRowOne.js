import React, { useEffect, useState } from 'react'
import productImage from './images/productImage.png';
import { Button, Badge, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import CartContext from '../context/cartContext';
import { FaArrowLeft } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

function Farmers(){
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/users', {params: {telephone: window.localStorage.getItem('phone')}}).then((res) => {
            console.log(res.data.data)
            setData(res.data.data);
        })
    }, [])

    let history = useHistory();
    return(
        <div className='container' style={{
            paddingTop: 50,
            fontFamily: 'Urbanist'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 10px 10px 10px'
            }}>
            <Button onClick={() => history.goBack()} variant='success' style={{
                marginBottom: 20
            }}><FaArrowLeft size={24} /></Button>
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
                    }} src='https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' />
                    <div style={{
                        marginTop: 10,
                        marginLeft: 20
                    }}>
                        <h4>{data[0].fullNames}</h4>
                        <p><Badge variant='primary'>{window.localStorage.getItem('quantity')} KGs</Badge> <Badge variant='dark' style={{
                            backgroundColor: 'purple'
                        }}>{window.localStorage.getItem('price')} RWF / Kg</Badge></p>
                    </div>
                </div>
                <div style={{
                    marginTop: 10,
                    textAlign: 'right',
                    color: 'gray'
                }}>
                    <h5>+25{window.localStorage.getItem('phone')}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Farmers;
