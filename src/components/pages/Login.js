import Navbar from '../Navbar';
import React, {useEffect, useState} from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap';

function Services() {
    const [isLogin, setIsLogin] = useState(true);
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
              marginTop: '30px',
              display: 'flex',
            }}>
                <div style={{
                    width: '50%',
                    marginTop: 150
                }}>
                    <h3 style={{
                        fontWeight: '100'
                    }}>Our Services</h3>
                    <p style={{
                        fontSize: '40px'
                    }}>We offer a platform to every farmer to talk about farming to get knowledge. We help them to get customers for their produce.</p>
                </div>
                <div>
                <div style={{
                    marginTop: 100,
                    marginLeft: 100
                }}>
                <img src='https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFncmljdWx0dXJlJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' style={{
                        width: '150px',
                        height: '200px',
                        marginRight: 100,
                        borderRadius: 20,
                    }} />

<img src='https://images.unsplash.com/photo-1518931169559-527a99b4074d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' style={{
                        width: '150px',
                        height: '200px',
                        borderRadius: 20,
                    }} />
                </div>
                <div>
                <img src='https://images.unsplash.com/photo-1622676566956-b42b50c84c31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFncmljdWx0dXJlJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' style={{
                        width: '150px',
                        height: '200px',
                        marginLeft: 225,
                        marginTop: 20,
                        borderRadius: 20,
                    }} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
