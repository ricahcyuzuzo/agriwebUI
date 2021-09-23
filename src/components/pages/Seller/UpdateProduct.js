import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import Navbar from '../../ProtectedNavbar';
// import { Select } from '@material-ui/core';

const UpdateProduct = () => {
    // const [fullNames, setFullNames] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [password, setPassword] = useState('');

    // const history = useHistory();

    return(
        <>
        <Navbar />
        {/* <div className='container'>
            <Button variant='primary' onClick={() => history.goBack()}>Go back</Button>
            <div style={{
                width: '500px',
                marginTop: 100,
                margin: 'auto'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Update Product</h1>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' minLength='2' onChange={(e) => setFullNames(e.target.value)} />
                <Form.Label>Price Per Unit</Form.Label>
                <Form.Control type='text' onChange={(e) => setPhoneNumber(e.target.value)} />
                <Form.Label>Quantity in Kg</Form.Label>
                <Form.Control type='text' onChange={(e) => setPassword(e.target.value)} />
                <Form.Label>Category</Form.Label>
                <select className='form-control'>
                    <option selected disabled>Choose Category</option>
                    <option style={{
                        height: 30
                    }}>Fruits</option>
                    <option>Vegetables</option>
                    <option>Seeds</option>
                </select>
                
                <Button variant='primary'
                style={{
                    width: '100%',
                    marginTop: 20,
                    marginBottom: 20
                }}>Update</Button>
            </div>
        </div> */}
        </>
    )
}

export default UpdateProduct;
