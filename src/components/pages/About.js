import Navbar from '../Navbar';
import React, {useEffect, useState} from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap';

function About() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className="App" style={{
            backgroundColor: '#331974',
            color: '#fff'
          }}>
            <Navbar />
            <div style={{
              minHeight: '650px',
              paddingLeft: '100px',
              paddingRight: '100px',
              marginTop: '30px',
            }}>
                <div style={{
                    marginTop: 100,
                    display: 'flex',
                }}>
                <div>
                <h3 style={{
                    color: '#fff',
                    fontWeight: '100',
                    marginTop: 80,
                }}>Our mission</h3>
                
                <p style={{
                    fontSize: 55,
                    width: '70%'
                }}>We are here to define the success of the farmers in the whole country.</p>
                </div>
                <img style={{
                    width: 400,
                    height: 500,
                    borderRadius: 20
                }} src='https://images.unsplash.com/photo-1612238209744-1a1c4f399b17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHN1Y2Nlc3NmdWwlMjAlMjBmYXJtZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                </div>
              </div>
              <div style={{
              minHeight: '750px',
              backgroundColor: '#66CC82', 
              paddingLeft: '100px',
              paddingRight: '100px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
                <div style={{  
                    width: '50%'
                }}>
                    <img style={{
                    width: 400,
                    height: 500,
                    borderRadius: 20,
                    marginTop:100,
                }} src='https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                </div>
                <div style={{
                    width: '70%'
                }}>
                <h3 style={{
                    color: '#fff',
                    fontWeight: '100',
                    marginTop: 150,
                    textAlign: 'right'
                }}>Our Purpose</h3>
                <p style={{
                    fontSize: 55,
                    textAlign: 'left'
                }}>To help farmers get confidence in their proffession and gain skills by them selves</p>
                </div>
              </div>
              <div style={{
              minHeight: '700px',
              paddingLeft: '100px',
              paddingRight: '100px',
              display: 'flex'
            }}>
                <div>
                <h3 style={{
                    color: '#fff',
                    fontWeight: '100',
                    marginTop: 100,
                }}>Our Team</h3>
                <p style={{
                    fontSize: 55,
                    width: '90%'
                }}>We are a team of young innovators who are willing to bring best performance in agriculture through technology and communication to improve productivity</p>

                </div>
                <div style={{
                    display: 'flex',
                    marginTop: 200
                }}>
                <img style={{
                    width: 200,
                    height: 300,
                    borderRadius: 20
                }} src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                <img style={{
                    width: 200,
                    height: 300,
                    marginTop: 150,
                    marginLeft: 50,
                    borderRadius: 20
                }} src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />

                </div>
                </div>
              <div style={{
              minHeight: '650px',
              paddingLeft: '100px',
              paddingRight: '100px',
              marginTop: '30px',
              backgroundColor: '#2C6E84',
            }}>
                <div style={{
                    width: '40%',
                    margin: 'auto'
                }}>
                    <h1 style={{
                    textAlign: 'center',
                    paddingTop: '50px'
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

export default About;
