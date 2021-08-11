import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    return(
        <>
        <Navbar />
        <div className='container'>
            <div style={{
                width: '500px',
                margin: 'auto',
                marginTop: 100
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Login</h1>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' maxLength='10' onChange={(e) => setPhoneNumber(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' maxLength='10' onChange={(e) => setPassword(e.target.value)} />
                <Button variant='primary' 
                onClick={() => {
                    setLoading(!loading)
                    axios.post('http://agrirwanda.eu-4.evennode.com/api/login', {
                        phoneNumber,
                        password,
                    }).then((res) => {
                        setLoading(!loading);
                        window.localStorage.setItem('token', res.data.token);
                        window.localStorage.setItem('phone', res.data.phone);
                        history.push('/seller/home');
                    }).catch((err) => {
                        setLoading(!loading);
                        setError(err.response.data.message);
                    })
                }}
                style={{
                    width: '100%',
                    height: '50px',
                    marginTop: 20,
                    marginBottom: 20
                }}>{loading ? <Spinner animation="border" variant="light" size='md' /> : 'Login'}</Button>
                Dont have an account? <Link to='/signup'>Sign Up</Link>
                {error !== '' ? <Alert style={{marginTop: 20}} variant='danger'>{error}</Alert> : ''}
            </div>
        </div>
        </>
    )
}

export default LoginScreen;
