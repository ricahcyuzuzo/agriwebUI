import React from 'react'
import Navbarr from '../Navbar'
import Honore from '../../image/honore.png';
import Rich from '../../image/rich2.png';
import Musecu from '../../image/Musecu.jpeg';
import Private from '../../image/Privat.jpeg';
import Fred from '../../image/Fred.jpeg';
import { Col, P, Image, SectionTwo} from './Home/HomeStyles';


const About = () => {
    return (
        <div>
            <Navbarr />
            <SectionTwo>
                <div style={{
                    marginBottom: '100px'
                }}>
                    <h2 style={{
                        fontFamily: 'Urbanist',
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 50,
                        marginTop: 200,
                    }}>Our Team</h2>
                    <p style={{
                        margin: 'auto',
                        textAlign: 'center',
                        width: '600px',
                        marginTop: 30,
                        marginBottom: 100,
                        fontSize: 25,
                    }}>We are a team of young Innovators willing to bring best performance in Africa agriculture farming.</p>

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
                            marginTop: 40,
                            marginLeft: 40,
                            width: 400
                        }}>
                        <h3 style={{
                            fontFamily: 'Urbanist',
                            color: 'green'
                        }}>Honore NGABOYURWANDA</h3>
                        <p>IT Specialist, supporter and Internal technology services consultant</p>
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
                            marginTop: 40,
                            marginRight: 100,
                            float: 'right',
                            marginLeft: 400
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontFamily: 'Urbanist'
                        }}>Richard NSHIMYUMUKIZA</h3>
                        <p>Software Engineer, deliver satisfying software tools for the company.</p>
                        </div>
                        <Image src={Rich} style={{
                            width: 250,
                            height: 250,
                            borderRadius: '50%',
                            float: 'right',
                        }} />
                    </Col>

                    <Col style={{
                        marginTop: 100,
                        margin: 'auto',
                        display: 'flex',
                        borderColor: 'green',
                        width: '80%',
                        padding: 20,
                        borderRadius: 550
                    }}>
                        <Image src={Musecu} style={{
                            width: 250,
                            height: 250,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginTop: 40,
                            marginLeft: 40,
                            width: 400
                        }}>
                        <h3 style={{
                            fontFamily: 'Urbanist',
                            color: 'green'
                        }}>Jean Pierre HABIMANA</h3>
                        <p>Agronomist, Consultant in Agriculture related activities</p>
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
                            width: 350,
                            marginTop: 40,
                            marginRight: 100,
                            float: 'right',
                            marginLeft: 500
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontFamily: 'Urbanist'
                        }}>Private DUKUNDIMANA</h3>
                        <p>Agronomist, Consultant in Agriculture related activities</p>

                        </div>
                        <Image src={Private} style={{
                            width: 220,
                            height: 250,
                            borderRadius: '50%',
                            float: 'right',
                        }} />
                    </Col>

                    <Col style={{
                        marginTop: 100,
                        margin: 'auto',
                        display: 'flex',
                        borderColor: 'green',
                        width: '80%',
                        padding: 20,
                        borderRadius: 550
                    }}>
                        <Image src={Fred} style={{
                            width: 250,
                            height: 250,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginTop: 40,
                            marginLeft: 40
                        }}>
                        <h3 style={{
                            fontFamily: 'Urbanist',
                            color: 'green'
                        }}>Fred MANIRAKIZA</h3>
                        <p>Agronomist, Consultant in Agriculture related activities</p>
                        </div>
                    </Col>
                </div>
            </SectionTwo>
        </div>
    )
}

export default About
