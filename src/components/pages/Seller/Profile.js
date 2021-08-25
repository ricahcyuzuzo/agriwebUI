import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbarr from '../../ProtectedNavbar';

const ProfileScreen = () => {
    return (
        <>
            <Navbarr />
            <div className='container'>
                <h1 style={{
                    textAlign: 'center',
                    color: 'green',
                    fontFamily: 'Urbanist',
                    fontWeight: 'bolder',
                    marginTop: 50,
                }}>Profile</h1>
                <div style={{
                    width: '50%',
                    margin: 'auto'
                }}>
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Profile Picture</Form.Label>
                    <input type='file' className='form-control' />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Names</Form.Label>
                    <Form.Control type='text' placeholder='Ex: John Doe' />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Phone Number</Form.Label>
                    <Form.Control type='text' placeholder='Ex: 0780000000' maxLength='10' />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Id number</Form.Label>
                    <Form.Control type='text' placeholder='Ex: 119XXXXXXXXXXXXX' maxLength='16' />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Address</Form.Label>
                    <Form.Control type='text' placeholder='Ex: City/District/Sector/Cell/Village' maxLength='10' />
                    <Button variant='primary' style={{
                        marginTop: 50,
                        width:'100%'
                    }}>Update</Button>

                </div>
            </div>
        </>
    )
}

export default ProfileScreen
