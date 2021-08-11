import React, {useEffect, useState} from 'react';
import Navbarr from '../../ProtectedNavbar';
import { Badge, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://agrirwanda.eu-4.evennode.com/api/seller_products', {params: {phoneNumber: window.localStorage.getItem('phone')}}).then((res) => {
            setProducts(res.data.data);
        })
    }, [])
    return (
        <>
            <Navbarr />
            <div className='container'>
                <div style={{
                    marginTop: 100,
                    marginBottom: 50,
                    display: 'flex',
                    justifyContent:"space-between"
                }}>
                <h1>Products</h1>
                <Link to='/seller/add_product'>
                <Button variant='primary'>Add Product</Button>
                </Link>
                </div>
                <Table striped bordered hover size="md">
  <thead>
    <tr>
        <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Category</th>
      <th>Update Product</th>
    </tr>
  </thead>
  <tbody>
      {products.map((item, idx) => {
          return(
            <tr key={idx}>
            <td><img src={item.image} style={{
                borderRadius: '50%',
                width: 50,
                height: 50
            }} /></td>
            <td>{item.productName}</td>
            <td>{item.pricePerUnit} Rwf</td>
            <td>{item.availableQuantity} Kg</td>
            <td>{item.productCategory}</td>
            <td style={{
            }}><Link to='/seller/update_product'><FaPencilAlt size={24} style={{
                marginLeft: 100
            }} /></Link></td>
            </tr>
          )
      })}
  </tbody>

</Table>
            </div>
        </>
    )
}

export default ProductsScreen
