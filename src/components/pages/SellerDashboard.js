import Navbarr from '../ProtectedNavbar';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/seller_products', {params: {phoneNumber: window.localStorage.getItem('phone')}}).then((res) => {
            setProducts(res.data.data);
        }).catch((err) => console.log(err.response.data))
    }, []);

    return (
        <div>
            <Navbarr />
            <div className='container'>
                <Card style={{
                    padding: 20,
                    marginTop: 100
                }}>
                <h1 style={{
                    color: 'green',
                }}>Hello Farmer!</h1>
                <h2>You have {products.length} products</h2>
                </Card>
                <Card style={{
                    marginTop: 50,
                    padding: 20,
                }}>
                    <h1 style={{
                        color: 'green'
                    }}>Profile Update</h1>
                    <p style={{
                        fontSize: '20px'
                    }}>Please Update your profile if not yet.</p>
                    <Button style={{
                        width: '200px'
                    }} variant='primary' onClick={() => {
                        history.push('/seller/profile');
                    }}>Update Profile</Button>
                </Card>
            </div>
        </div>
    )
}

export default SellerDashboard
