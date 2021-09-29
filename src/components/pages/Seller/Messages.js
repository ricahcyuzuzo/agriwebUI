import Navbarr from './../../ProtectedNavbar';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MessageScreen = () => {
    const [messages, setMessages] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/message', {params: {phone: window.localStorage.getItem('phone')}}).then((res) => {
            setMessages(res.data.data);
        }).catch((err) => console.log(err.response.data))
    }, []);

    return (
        <div>
            <Navbarr />
            <div className='container'>
                <h1 style={{
                    fontFamily: 'Urbanist'
                }}>Message Inbox</h1>
                { messages.map((item, idx) =>(
                    <Card key={idx} style={{
                        padding: 20,
                        marginTop: 100,
                    }}>
                        <div>
                        <h1 style={{
                            fontFamily: 'Urbanist',
                        }}>Name: {item.name}</h1>
                        <h5 style={{
                            fontFamily: 'Urbanist',
                        }}>Message: {item.message}</h5>
                        </div>
                        <h6 style={{
                            fontFamily: 'Urbanist',
                        }}>Phone: {item.clientPhone}</h6>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MessageScreen
