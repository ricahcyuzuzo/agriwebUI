import Navbar from '../Navbar';
import React, {useEffect, useState} from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import Rich from '../../image/rich.PNG';
import Hon from '../../image/honore.png';
function About() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div style={{
            backgroundColor: '#331974',
            color: '#fff',
            paddingTop: 10
          }}>
              <Navbar />
            <div style={{
              minHeight: '700px',
              paddingLeft: '100px',
              paddingRight: '100px',
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
              minHeight: '500px',
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
                
                </div>
              <div style={{
              minHeight: '700px',
              paddingLeft: '100px',
              paddingRight: '100px',
              marginTop: '30px',
              backgroundColor: '#2C6E84',
            }}>
                <div style={{
                    marginTop: 200,
                    paddingTop: 20
                }}>
                <div style={{
                    display: 'flex',

                }}>
                    <img style={{
                        width: 200,
                        height: 300,
                        borderRadius: 20
                    }} src={Hon} />
                    <div style={{
                        marginTop: 50,
                        marginLeft: 30
                    }}>
                        <h3>NGABOYURWANDA Honore</h3>
                        <p>He is a stududent at IPRC NGOMA College where he is persuing his Information technology degree</p>
                        <p>He is specialized in Information technology</p>
                    </div>
                </div>
                <div style={{
                    marginTop: 20,
                    display: 'flex'
                }}>
                    <img style={{
                        width: 200,
                        height: 300,
                        borderRadius: 20
                    }} src={Rich} />
                    <div style={{
                        marginTop: 50,
                        marginLeft: 30
                    }}>
                        <h3>NSHIMYUMUKIZA Richard</h3>
                        <p>He is a stududent at IPRC NGOMA College where he is persuing his Information technology degree</p>
                        <p>He is specialized in Information technology</p>
                        <p>Mobile App Developer</p>
                    </div>
                </div>

                </div>    
            </div>
        </div>
    )
}

export default About;
