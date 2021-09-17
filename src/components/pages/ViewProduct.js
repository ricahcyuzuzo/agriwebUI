import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios'
import { Form } from 'react-bootstrap';
import SearchInput , {createFilter} from 'react-search-input';
const KEYS_TO_FILTERS = ['productName', 'availableQuantity', 'description', 'pricePerUnit', 'productCategory']

function ViewProduct() {
    const [products, setProducts] = useState([]);
    const [searchText, setSeachText] = useState('');

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/products_approved').then((res) => {
            setProducts(res.data.data);
            console.log(res.data.data)
        })
    }, [])

    const filteredProducts = products.filter(createFilter(searchText, KEYS_TO_FILTERS));
    return(
        <>
        <Navbar />
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 100,
            paddingRight: 200,
            paddingLeft: 130
        }}>
                <h1 style={{marginTop: 200, color: 'green', fontFamily: 'Urbanist'}}>Products</h1>
                <Form.Control type='text' placeholder='Search' style={{ marginTop: 210, width: '20%'}} onChange={(e) => setSeachText(e.target.value)} />
            </div>
        <div style={{
            display: 'flex',
            width: '90%',
            marginTop: '60px',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 'auto',
            paddingLeft: 100,
            fontFamily: 'Urbanist',
        }}>
            {filteredProducts.map((item, idx) => {
                return (
                    <Link key={idx} onClick={() => {
                        window.localStorage.setItem('productName', item.productName);
                        window.localStorage.setItem('phone', item.sellerIdentifier);
                        window.localStorage.setItem('price', item.pricePerUnit);
                        window.localStorage.setItem('quantity', item.availableQuantity);

                    }} to='/farmers' style={{
                        textDecorationLine: 'none',
                        textDecorationColor: '#331974',
                        marginRight: 40
                    }}><div 
                    className='shadow-lg p-3 mb-5 bg-body' style={{
                        width: 200,
                        height: 250,
                        borderRadius: 20,
                        textAlign: 'center',
                        paddingTop: 20,
                        cursor: 'pointer',
                    }}>
                        <img src={item.image} style={{
                            width: 150,
                            height: 150,
                            borderRadius: 10,
                        }} />
                        <h4 style={{
                            marginTop: 20,
                            color: '#222222'
                        }}>{item.productName}</h4>
                        <span>{item.productCategory}</span>
                    </div></Link>
                )
            })}
        </div>
        </>
    )
}

export default ViewProduct;