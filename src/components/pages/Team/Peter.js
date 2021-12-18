import React from 'react';
import Musecu from '../../../image/Musecu.jpeg';
import Navbarr from '../../Navbar';
import { P, Image } from '../Home/HomeStyles';

const Peter = () => {
    return (
        <div style={{
            width: '100%'
        }}>
            <Navbarr />
            <Image src={Musecu} style={{
                width: 250,
                height: 250,
                // marginTop: 100,
                display: 'block',
                margin: 'auto',
                marginTop: 200,
            }} />
            <h2 style={{
                color: 'green',
                textAlign: 'center',
                marginTop: 10,
            }}>Jean Pierre HABIMANA</h2>
            <P style={{
                width: '70%',
                fontSize: 18,
                textAlign: 'center',
                margin: 'auto'
            }}>Pierre is a profession Agri economist and businessman with diverse skills and experience in both Rwanda and internationally. Pierre has a bachelor degree in agriculture economics at university of Rwanda in 2017 and professional internship at kinneret college in Israel 2020 - 2021</P>
        </div>
        
    )
}

export default Peter
