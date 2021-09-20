import React, {useEffect, useState} from 'react';
import Navbarr from '../../ProtectedNavbar';
import { Badge, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/seller_products', {params: {phoneNumber: window.localStorage.getItem('phone')}}).then((res) => {
            setProducts(res.data.data);
        }).catch((err) => console.log(err.response.data))
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
      <th>Delete Product</th>
    </tr>
  </thead>
  <tbody>
      { products.length > 0 ? products.map((item, idx) => {
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
            <td style={{
            }}><Button variant='light' style={{
                width: 50,
                height: 50,
            }} onClick={() => {
                axios.delete('https://agrirwanda.eu-4.evennode.com/api/delete', {params: {product_id: item._id}}).then((res) => {
                    alert(res.data.message)
                    window.location.reload(false)
                });
            }}><FiTrash2 size={24} style={{
                color: 'red'
            }} /></Button></td>
            </tr>
          )
      }) : <span style={{
          textAlign: 'center'
      }}>No Products Found</span>}
  </tbody>

</Table>
            </div>
        </>
    )
}

export default ProductsScreen
