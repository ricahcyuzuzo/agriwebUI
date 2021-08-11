import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

const SignupScreen = () => {
    const [fullNames, setFullNames] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

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
                }}>Sign Up</h1>
                <Form.Label>Full Names</Form.Label>
                <Form.Control type='text' minLength='3' onChange={(e) => setFullNames(e.target.value)} />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' maxLength='10' minLength='10' onChange={(e) => setPhoneNumber(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' minLength='8' onChange={(e) => setPassword(e.target.value)} />
                <Button variant='primary'
                onClick={() => {
                    setLoading(!loading);
                    axios.post('http://agrirwanda.eu-4.evennode.com/api/user', {
                        fullNames,
                        phoneNumber,
                        password,
                        userType: 'seller'
                    }).then((res) => {
                        window.localStorage.setItem('token', res.data.token);
                        window.localStorage.setItem('isLoggedIn', true);
                        history.push('/seller/home');
                    })
                }}
                style={{
                    width: '100%',
                    marginTop: 20,
                    marginBottom: 20
                }}>{loading ? <Spinner animation="border" variant="light" /> : 'Sign Up'}</Button>
                You have an account? <Link to='/login'>Sign In</Link>
            </div>
        </div>
        </>
    )
}

export default SignupScreen;
