import React from 'react'
import Navbarr from '../Navbar'
import Honore from '../../image/honore.png';
import Rich from '../../image/rich2.png';
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
        </div>
    )
}

export default About
