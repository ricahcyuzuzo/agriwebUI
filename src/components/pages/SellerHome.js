import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../ProtectedNavbar';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function SellerHome() {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('token');
        if(!isLoggedIn){
            history.push('/login')
        }
        axios.get('https://agrirwanda.eu-4.evennode.com/api/seller_products', {params: {phoneNumber: window.localStorage.getItem('phone')}}).then((res) => {
            setProducts(res.data.data);
        });     
    }, []);
    return(
        <div>
            <Navbar />
            <div className='container'>
                <h1>Hallo Seller</h1>
                <p style={{
                    fontWeight: 500,
                    color: 'green'
                }}>Your account is active</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <div style={{
                    backgroundColor:"#c4c4c4",
                    width: '209px',
                    height: '150px',
                    borderRadius: 5,
                    textAlign: 'center',
                    justifyContent: 'center',
                    paddingTop: 60
                }}>
                    {products.length} Products
                </div>

                
                <div style={{
                    backgroundColor:"#c4c4c4",
                    height: '150px',
                    width: '209px',
                    borderRadius: 5,
                    textAlign: 'center',
                    justifyContent: 'center',
                    paddingTop: 60
                }}>
                    15 Sales
                </div>
                
                <div style={{
                    backgroundColor:"#c4c4c4",
                    height: '150px',
                    width: '209px',
                    borderRadius: 5,
                    textAlign: 'center',
                    justifyContent: 'center',
                    paddingTop: 60
                }}>
                    Total Revenue
                </div>
                </div>
                <h1 style={{
                    marginTop: 100,
                    marginBottom: 50
                }}>Sales</h1>
                <Table striped bordered hover size="md">
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Amount</th>
      <th>Customer Name</th>
      <th>Customer Address</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mangoes</td>
      <td>20 Kg</td>
      <td>20000 RWF</td>
      <td>Richard</td>
      <td>Kigali/Gasabo/Gatsata/Nyamabuye/Juru</td>
      <td>0784218000</td>
    </tr>
    <tr>
    <td>2</td>
      <td>Mangoes</td>
      <td>20 Kg</td>
      <td>20000 RWF</td>
      <td>Richard</td>
      <td>Kigali/Gasabo/Gatsata/Nyamabuye/Juru</td>
      <td>0784218000</td>
    </tr>
    <tr>
       <td>3</td>
      <td>Mangoes</td>
      <td>20 Kg</td>
      <td>20000 RWF</td>
      <td>Richard</td>
      <td>Kigali/Gasabo/Gatsata/Nyamabuye/Juru</td>
      <td>0784218000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Mangoes</td>
      <td>20 Kg</td>
      <td>20000 RWF</td>
      <td>Richard</td>
      <td>Kigali/Gasabo/Gatsata/Nyamabuye/Juru</td>
      <td>0784218000</td>
    </tr>
  </tbody>

</Table>
            </div>
        </div>  
    )
}

export default SellerHome;
