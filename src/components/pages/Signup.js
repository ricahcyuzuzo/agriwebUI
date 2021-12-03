import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../Navbar';
import {useHistory} from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    const [fullNames, setFullNames] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('');
    
    useEffect(() => {
      console.log(window.localStorage.getItem('userType'))
    })

    let history = useHistory();
  
    
    return (
        <div>
            <Navbar />
            <div style={{
              height: 200,
            }}></div>
            <div style={{
                backgroundColor: '#fff',
                width: '30%',
                height: '400px',
                borderRadius: 10,
                margin: 'auto',
                fontFamily: 'Urbanist'
            }}>
                <div>
                    <Button onClick={() => setIsLogin(true)} variant={isLogin ? 'success' : 'light'} style={{
                        borderRadius: 0,
                        width: '50%'
                    }}>Login</Button>
                    <Button onClick={() => setIsLogin(false)} variant={isLogin ? 'light' : 'success'} style={{
                        borderRadius: 0,
                        width: '50%'
                    }}>SignUp</Button>
                </div>
                {
                    isLogin ? <div>
                    <h2 style={{
                     color: '#000',
                     textAlign: 'center',
                     marginTop: '20px',
                     marginBottom: '20px'
                    }}>Login</h2>
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
                      axios.post('http://127.0.0.1:7000/api/login', {
                          phoneNumber,
                          password,
                      }).then((res) => {
                          window.localStorage.setItem('token', res.data.token);
                          window.localStorage.setItem('isLoggedIn', true);
                          window.localStorage.setItem('phone', phoneNumber);
                          window.localStorage.setItem('userType', res.data.user.type);
                          window.localStorage.setItem('names', res.data.user.name)
                          if(res.data.user.type === 'seller'){
                            history.push('/seller/home');
                          }else{
                            history.push('/');
                          }
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
            <select className='form-control' style={{ width: '80%'}} onChange={e => setUserType(e.target.value)}>
              <option disabled={true}>Choose usertype</option>
              <option value="cutomer">Customer</option>
              <option value="seller">Seller</option>
            </select>
            <Button onClick={() => {
              console.log(userType);
              setLoading(!loading);
              axios.post('http://127.0.0.1:7000/api/user', {
                  fullNames,
                  phoneNumber,
                  password,
                  userType: userType
              }).then((res) => {
                  window.localStorage.setItem('token', res.data.token);
                  window.localStorage.setItem('isLoggedIn', true);
                  window.localStorage.setItem('phone', phoneNumber);
                  window.localStorage.setItem('userType', userType);
                  window.localStorage.setItem('names', fullNames);
                  if (userType === 'seller'){
                    history.push('/seller/home');
                  } else {
                    history.push('/')
                  }
              }).catch((err) => {
               console.log(err)
              })
            }} style={{
              marginTop: 10,
              width: '80%'
            }} variant='success'>{loading ? 'Loading...' : 'Sign up'}</Button>
            </div>
          </div> }
            </div>
        </div>
    )
}

export default Signup
