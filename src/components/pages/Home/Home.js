import React from 'react';
import Navbar from '../../Navbar';
import { SectionOne, Row, Col, H1, P, Image, Buttons, Card, H3 , SectionTwo} from './HomeStyles';
import HomeImage from '../../../image/hom.png';
import Ads from '../../../image/ads.png';
import Honore from '../../../image/honore.png';
import Rich from '../../../image/rich2.png';
import Mission from '../../../image/mission.png';
import Purpose from '../../../image/purpose.png';
import Footer from '../Footer';
import { Form } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{
        }}>
            <Navbar />
            <SectionOne> 
                <Row>
                    <Col>
                        <H1 style={{
                            fontSize: 50,
                            fontWeight: 'bolder'
                        }}>Welcome to Farma Talk</H1>
                        <P style={{
                            fontSize: 25,
                        }}>Gaining knowledge is one of the best ways to success.
                            Signup to the forum and get to know others in your field and exchange knowledge.
                        </P>
                        <Buttons variant='success'>Sign Up</Buttons>
                    </Col>
                    <Col>
                        <Image src={HomeImage} />
                    </Col>
                </Row>
            </SectionOne>
            <SectionTwo>
                <div style={{
                    marginBottom: 200
                }}>
                    <h2 style={{
                        fontFamily: 'Urbanist',
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>Our main Services</h2>

                    <Row style={{
                        width: '80%'
                    }}>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Advertisement</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We can take your message or business to your target market around the continent in a blink of an eye.</P>
                        </Card>
                        <Card>
                            <img src='https://cdni.iconscout.com/illustration/premium/thumb/discussion-forum-2691866-2231679.png' style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Forum</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide a free platform to discuss your various problems and share knowledge to other farmers in the field.</P>
                        </Card>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Product Post</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide a free place to post your produce ready to sell so you can get customers quickly.</P>
                        </Card>
                    </Row>
                </div>
            </SectionTwo>
            <SectionTwo>
                <div style={{
                    marginBottom: 200
                }}>
                    <h2 style={{
                        fontFamily: 'Urbanist',
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 50,
                    }}>Our Team</h2>
                    <P style={{
                        margin: 'auto',
                        textAlign: 'center',
                        width: '600px',
                        marginTop: 30,
                        marginBottom: 100,
                        fontSize: 25,
                    }}>We are a team of young Innovators willing to bring best performace in agriculture through communication </P>

                    <Col style={{
                        marginTop: 100,
                        margin: 'auto',
                        display: 'flex',
                        borderColor: 'green',
                        width: '80%',
                        padding: 20,
                        borderRadius: 550
                    }}>
                        <Image src={Honore} style={{
                            width: 250,
                            height: 250,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            width: '30%',
                            marginTop: 40,
                            marginLeft: 40
                        }}>
                        <h3 style={{
                            fontFamily: 'Urbanist',
                            color: 'green'
                        }}>Honore NGABOYURWANDA</h3>
                        <P>"I am a student at IPRC Ngoma in the last year where I'm persuing my Information technology degree"</P>
                        </div>
                    </Col>
                    <Col style={{
                        marginTop: 50,
                        margin: 'auto',
                        display: 'flex',
                        borderColor: 'green',
                        width: '80%',
                        padding: 20,
                        borderRadius: 550,
                        textAlign: 'right',
                    }}>
                        <div style={{
                            width: '30%',
                            marginTop: 40,
                            marginRight: 40,
                            float: 'right',
                            marginLeft: 600
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontFamily: 'Urbanist'
                        }}>Richard NSHIMYUMUKIZA</h3>
                        <P>"I am a student at IPRC Ngoma in the last year where I'm persuing my Information technology degree and mostly spesialized in software development."</P>
                        </div>
                        <Image src={Rich} style={{
                            width: 250,
                            height: 250,
                            borderRadius: '50%',
                            float: 'right',
                        }} />
                    </Col>
                </div>
            </SectionTwo>
            <SectionTwo>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                    }}>
                        <Image src={Mission} style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginTop: 100,
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontSize: 40
                        }}>Our Mission</h3>
                        <P style={{
                            fontSize: 35,
                            width: '50%'
                        }}>We are here to define the success of the farmers in the whole country and Africa in General.</P>
                        </div>
                    </Col>
                    <Col style={{
                        marginLeft: 100,
                        marginRight: 100,
                        display: 'flex'
                    }}>
                        <div style={{
                            marginTop: 100,
                            marginLeft: 80
                        }}>
                            <h3 style={{
                                color: 'green',
                                fontSize: 40,
                                textAlign: 'justify'
                            }}>Our Purpose</h3>
                            <P style={{
                                fontSize: 35,
                                width: '65%',
                                textAlign: 'justify'
                            }}>To help farmers get confidence in their proffession and gain skills by them selves in the modern agriculture</P>
                        </div>
                        <Image src={Purpose} style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%'
                        }} />
                    </Col>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                        backgroundColor: '#f9f9f9',
                        minHeight: '100px'
                    }}>
                       <h3 style={{
                           color: 'green',
                           fontFamily: 'Urbanist',
                           margin: 'auto'
                       }}>Farma Talk @ 2021</h3> 
                    </Col>
            </SectionTwo>
            
            </div>
    )
}

export default Home
