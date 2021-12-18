import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import { SectionOne, Row, Col, H1, P, Image, Buttons, Card, H3 , PP, SectionTwo} from './HomeStyles';
import HomeImage from '../../../image/hom.png';
import Ads from '../../../image/Market.jpg';
import Mission from '../../../image/mission.png';
import Purpose from '../../../image/purpose.png';
import Statistics from '../../../image/Statistics.jpg';
import Exchange from '../../../image/Exchange.jpg';
import Irrigation from '../../../image/Irrigation.jpg';

const Home = () => {
    return (
        <div style={{
        }}>
            <Navbar />
            <SectionOne>  
                <Row>
                    <Col>
                        <H1 style={{
                            fontSize: 30,
                            fontWeight: 'bolder',
                            marginTop: 50,
                        }}>Welcome to FarmaTalk</H1>
                        <P style={{
                            fontSize: 20,
                            width: 350,
                        }}>
                            Farmatalk is a company that is bringing new solutions to improve Agriculture in Africa and Rwanda as well
                        </P>
                        <Link to='/signup'><Buttons variant='success'>Sign Up</Buttons></Link>
                    </Col>
                    <Col style={{
                        marginTop: 50
                    }}>
                        <Image src={HomeImage} />
                    </Col>
                </Row>
            </SectionOne>
            <SectionTwo>
                <div style={{
                    marginBottom: 50
                }}>
                    <h3 style={{
                        fontFamily: 'Urbanist',
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>Our main Services</h3>

                    <Row style={{
                        width: '90%',
                    }}>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} alt='Ads' />
                            <H3>Farmers Market</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We deliver farmer's produce to the market around the continent in a blink of an eye.</P>
                        </Card>
                        <Card>
                            <img src={Statistics} style={{
                                width: '100%',
                                height: 200,
                            }} alt='ads' />
                            <H3>Agri - Statistics</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide seamless statistics of Rwanda in agriculture with real and updated data.</P>
                        </Card>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} alt='ads' />
                            <H3>Agriculture advisory</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide advice to farmers on how they can improve their produce quality and quantity.</P>
                        </Card>

                        <Card>
                            <img src={Exchange} style={{
                                width: '100%',
                                height: 200,
                            }} alt='ads' />
                            <H3>Exchange program (Inbound & Outbound)</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide exchange program like trainings, internships and etc.</P>
                        </Card>

                        <Card>
                            <img src={Irrigation} style={{
                                width: '100%',
                                height: 200,
                            }} alt='ads' />
                            <H3>Irrigation Solutions</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide exchange program like trainings, internships and etc.</P>
                        </Card>
                    </Row>
                </div>
            </SectionTwo>
            <SectionTwo>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                    }}>
                        <img src={Mission} style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginTop: 100,
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontSize: 30,
                            fontFamily: 'Urbanist',
                        }}>Our Mission</h3>
                        <PP style={{
                            fontSize: 18,
                            width: '50%'
                        }}>We are here to define the success of the farmers in the whole country and Africa in General.</PP>
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
                                fontSize: 30,
                                textAlign: 'justify',
                                fontFamily: 'Urbanist',
                            }}>Our Purpose</h3>
                            <PP style={{
                                fontSize: 18,
                                width: '65%',
                                textAlign: 'justify'
                            }}>To help farmers get confidence in their proffession and gain skills by them selves in the modern agriculture</PP>
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
                    }}>
                        <Image src='https://www.getillustrations.com/packs/flat-vector-illustrations-for-websites/scenes/_1x/deisign%20_%20perspective,%20vision,%20view,%20designs,%20manager_md.png' style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%',
                        }} />
                        <div style={{
                            marginTop: 100,
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontSize: 39,
                            fontFamily: 'Urbanist',
                        }}>Our Vision</h3>
                        <PP style={{
                            fontSize: 18,
                            width: '50%'
                        }}>We are willing to offer good services to farmers and link them to thier customers in East Africa in no time.</PP>
                        </div>
                    </Col>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                        backgroundColor: '#f9f9f9',
                        minHeight: '50px'
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
