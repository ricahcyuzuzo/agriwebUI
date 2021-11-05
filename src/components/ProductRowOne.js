import React, { useEffect, useState } from 'react'
// import productImage from './images/productImage.png';
import { Button, Badge, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import CartContext from '../context/cartContext';
import { FaArrowLeft } from 'react-icons/fa';
// import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

function Farmers(){
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [names, setNames] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSend = () => {
            axios.post('https://farmatalk.herokuapp.com/api/message', {
                names: names,
                clientPhone: phone,
                message: message
            },{params: {phone: window.localStorage.getItem('phone')}} ).then((res) =>{
                alert(res.data.message);
                window.location.reload()
            })
    }

    useEffect(() => {
        axios.get('https://farmatalk.herokuapp.com/api/users', {params: {telephone: window.localStorage.getItem('phone')}}).then((res) => {
            setData(res.data.data);
            console.log(data)
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
            {
                data.length !== 0 ? <div className='shadow-lg p-3 mb-5 bg-body' style={{
                    width: '100%',
                    height: 140,
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
                        }} alt='product' src='https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' />
                        <div style={{
                            marginTop: 10,
                            marginLeft: 20
                        }}>
                            <h4>{data[0]?.fullNames}</h4>
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
                        <h6>{data[0]?.address.province}/{data[0]?.address.district}/{data[0]?.address.sector}/{data[0]?.address.cell}/{data[0]?.address.village}</h6>
                        <button className='btn btn-primary' onClick={handleShow} >Send Message</button>
                    </div>
                </div> : <h2 style={{
                    fontFamily: 'Urbanist'
                }}>Loading ...</h2>
            }
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Send Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Names</label>
                    <input type='text' className='form-control' onChange={(e) => setNames(e.target.value)} />
                    <label>Phone Number</label>
                    <input type='text' className='form-control' maxLength={10} onChange={(e) => setPhone(e.target.value)} />
                    <label>Message</label>
                    <textarea type='text' className='form-control' onChange={(e) => setMessage(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleSend}>
                    Send Message
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Farmers;
