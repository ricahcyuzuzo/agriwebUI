import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../App.css';
import Navbar from '../Navbar';
import {useHistory} from 'react-router-dom';
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import Anima from '../../image/anima.gif'

function Shop() {
  const [fullNames, setFullNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  let history = useHistory();
  
  return (
    <div className="App" style={{
      backgroundColor: '#331974',
      color: '#fff',
      paddingTop: 10,
    }}>
      <Navbar />
      <div style={{
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '100px',
        paddingRight: '100px',
        marginTop: '100px',
      }}>
        <div style={{
          width: '45%',
          marginTop: 100
        }}>
          <img src={Anima} style={{
            width: 1000,
            height: 500
          }} />
        </div>
        <div style={{
        backgroundColor: '#fff',
        marginTop: 100,
        width: '30%',
        height: '400px',
        borderRadius: 10,
        }}>
          <div>
          <Button onClick={() => setIsLogin(true)} variant='primary' style={{
              borderRadius: 0,
              width: '50%'
            }}>Login</Button>
            <Button onClick={() => setIsLogin(false)} variant='light' style={{
              borderRadius: 0,
              width: '50%'
            }}>SignUp</Button>
          </div>
          { isLogin ? <div>
            <h2 style={{
             color: '#000',
             textAlign: 'center',
             marginTop: '20px',
             marginBottom: '20px'
            }}>Sign in</h2>
            <div style={{
              marginLeft: 60,
            }}>
            <Form.Control type='text' maxLength='10' onChange={(e) => setPhoneNumber(e.target.value)} minLength='10' placeholder='Phone' style={{
              width: '80%'
            }} />
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{
              width: '80%',
              marginTop: 10,
              marginBottom: 10,
            }} />
            <span style={{
              color: '#000',
              marginLeft: 105,
            }}>Forgot your Password?</span>
            <Button onClick={() => {
              setLoading(!loading);
              axios.post('https://agrirwanda.eu-4.evennode.com/api/login', {
                  phoneNumber,
                  password,
              }).then((res) => {
                  window.localStorage.setItem('token', res.data.token);
                  window.localStorage.setItem('isLoggedIn', true);
                  window.localStorage.setItem('phone', phoneNumber)
                  history.push('/seller/home');
              }).catch((err) => {
                alert(err.response.data.message)
              })
            }} style={{
              marginTop: 10,
              width: '80%'
            }} variant='success'>{loading ? 'Loading ...' : 'Login'}</Button>
            </div>
          </div> : <div style={{
          }}>
           <h2 style={{
             color: '#000',
             textAlign: 'center',
             marginTop: '20px',
             marginBottom: '20px'
           }}>Sign up</h2>
           <div style={{
              marginLeft: 60,
            }}>
            <Form.Control type='text' placeholder='Names' onChange={(e) => setFullNames(e.target.value)} style={{
              width: '80%'
            }} />
            <Form.Control type='text' placeholder='phone' onChange={(e) => setPhoneNumber(e.target.value)} maxLength='10' minLength='10' style={{
              width: '80%',
              marginTop: 10,
            }} />
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}  style={{
              width: '80%',
              marginTop: 10,
              marginBottom: 10,
            }} />
            <Button onClick={() => {
              setLoading(!loading);
              axios.post('https://agrirwanda.eu-4.evennode.com/api/user', {
                  fullNames,
                  phoneNumber,
                  password,
                  userType: 'seller'
              }).then((res) => {
                  window.localStorage.setItem('token', res.data.token);
                  window.localStorage.setItem('isLoggedIn', true);
                  window.localStorage.setItem('phone', phoneNumber);
                  history.push('/seller/home');
              }).catch((err) => {
                alert(err.response.data.message)
              })
            }} style={{
              marginTop: 10,
              width: '80%'
            }} variant='success'>{loading ? 'Loading...' : 'Sign up'}</Button>
            </div>
          </div> }
          
          
        </div>
      </div>
    </div>
  );
}

export default Shop;
