import React, {useState} from 'react';
import Navbar from '../Navbar';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddTopic = () => {

    const [names, setNames] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const history = useHistory();

    return (
        <div style={{
            fontFamily: 'Urbanist'
        }}>
            <Navbar />
            <div className='container' style={{
                marginTop: 200,
            }}>
                <div style={{
                    margin: 'auto',
                    width: '70%'
                }}>
                    <h1 style={{
                        color: 'green'
                    }}>Ask a Question</h1>
                    <label style={{
                        fontFamily: 'Urbanist',
                        fontSize: 18,
                    }}>Names</label>
                    <input type='text' className='form-control' onChange={(e) => setNames(e.target.value)} />
                    <label style={{
                        fontFamily: 'Urbanist',
                        fontSize: 18,
                        marginTop: 10,
                    }}>Title</label>
                    <input type='text' className='form-control' onChange={(e) => setTitle(e.target.value)} />
                    <label style={{
                        fontFamily: 'Urbanist',
                        fontSize: 18,
                        marginTop: 10,
                    }}>Description</label>
                    <textarea type='text' className='form-control' onChange={(e) => setDescription(e.target.value)}  />
                    <Button variant='success' onClick={() => {
                        axios.post('https://farmatalk.herokuapp.com/api/post_topic', {
                            topic: title,
                            names: names,
                            description: description
                        }, ).then((res) =>{
                            alert(res.data.message);
                            history.push('forum');
                        })
                    }} className='form-control' style={{
                        marginTop: 20,
                        fontSize: 18
                    }}>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default AddTopic