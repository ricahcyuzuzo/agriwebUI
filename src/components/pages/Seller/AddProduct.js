import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../ProtectedNavbar';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const history = useHistory();

    return(
        <>
        <Navbar />
        <div className='container'>
            <Button variant='primary' onClick={() => history.goBack()}>Go back</Button>
            <div style={{
                width: '500px',
                marginTop: 100,
                margin: 'auto'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Add Product</h1>
                <Form.Label>Name</Form.Label>
                <input type='text' className='form-control' onChange={(e) => setName(e.target.value)} />
                <Form.Label>Price Per Unit</Form.Label>
                <Form.Control type='text' onChange={(e) => setPrice(e.target.value)} />
                <Form.Label>Quantity in Kg</Form.Label>
                <Form.Control type='text' onChange={(e) => setQuantity(e.target.value)} />
                <Form.Label>Description</Form.Label>
                <textarea placeholder='Please do not exceed 100 words' onChange={(e) => setDescription(e.target.value)}  className='form-control' style={{
                    height: '100px'
                }}>
                </textarea>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Select File</Form.Label>
                    <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Form.Group>
                <Button onClick={() => {
                    const CLOUDINARY_UPLOAD_PRESET = 'ywxfkdjs';
                    console.log(file);
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
                    axios.post('https://api.cloudinary.com/v1_1/agri-rwanda/image/upload', formData)
                        .then(res => {
                            axios.post('https://agrirwanda.eu-4.evennode.com/api/product', {
                                productName: name,
                                pricePerUnit: price,
                                availableQuantity: quantity,
                                description: description,
                                sellerIdentifier: window.localStorage.getItem('phone'),
                                
                                image: res.data.secure_url
                            }).then((res) => {
                                alert(res.data.message);
                                history.push('/seller/product')
                        
                            }).catch(err => {
                                alert(err.response.data.message);
                                console.log(err.response.data.message);
                            })
                        
                        })
                        .catch(err => {
                            console.log(err.response);
                        })
                    
                }} variant='primary'
                style={{
                    width: '100%',
                    marginTop: 20,
                    marginBottom: 20
                }}>Save</Button>
            </div>
        </div>
        </>
    )
}

export default AddProduct;
