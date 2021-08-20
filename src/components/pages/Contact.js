import Navbar from '../Navbar';
import React, {useEffect, useState} from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap';

function Contact() {

    return(
        <div className="App" style={{
            backgroundColor: '#331974',
            color: '#fff'
          }}>
            <Navbar />
            <div style={{
              height: '700px',
              paddingLeft: '100px',
              paddingRight: '100px',
              display: 'flex',
            }}>
                <div style={{
                    width: '40%',
                    margin: 'auto'
                }}>
                    <h1 style={{
                    textAlign: 'center',
                }}>Contact us</h1>

                <Form.Control type='text' placeholder='Names' style={{
                    marginTop: 20,
                }} />
                <Form.Control type='text' placeholder='Email' style={{
                    marginTop: 20,
                }}  />
                <textarea className='form-control' placeholder='Message' style={{
                    marginTop: 20, 
                }}></textarea>
                <Button style={{
                    marginTop: 20,
                    width: '100%',
                }} variant='success'>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
