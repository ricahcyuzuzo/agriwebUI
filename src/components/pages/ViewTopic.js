import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CommentTopic = () => {
    const [topic, setTopic] = useState({});
    const [names, setNames] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    useEffect(() => {
        axios.get('https://agrirwanda.eu-4.evennode.com/api/one_topic', {params: {topic_id: window.localStorage.getItem('topicId')}})
        .then((res) => {
            console.log(res.data)
            setTopic(res.data.data)
        })
    }, []);
    return (
        <div style={{
            fontFamily: 'Urbanist'
        }}>
            <Navbar />
            <div className='container' style={{
                marginTop: 130,
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
            }}>
                <Button onClick={() => {
                    history.push('/forum');
                }} variant='success'>Go Back</Button>
                <Link to='/ask'>
                <Button style={{
                    height: 40,
                }} variant='success'>Ask a Question</Button></Link>
            </div>
            <div style={{
                margin: 'auto',
                width: '60%'
            }}>
                <div style={{
                    backgroundColor: '#f2f1f1',
                    minHeight: 200,
                    width: '100%',
                    borderRadius: 20,
                }}>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div style={{
                            width: 10,
                            minHeight: '200px',
                            backgroundColor: 'green',
                            borderRadius: 10,
                            marginLeft: 20,
                        }}>

                        </div>
                        <div style={{
                            marginLeft: 10,
                        }}>
                        <h1 style={{
                            color: '#000',
                            fontFamily: 'Urbanist',
                            marginTop: 10,
                        }}>{topic?.topic}</h1>
                        <p style={{
                            fontFamily: 'Urbanist',
                            fontSize: 18
                        }}>{topic?.description}</p>
                        <span style={{
                            marginLeft: 700,
                            color: 'green'
                        }}>Posted by {topic?.names}</span>
                        <div>
                            <div style={{
                                marginTop: 20,
                                marginBottom: 20
                            }}>
                                {topic?.comment?.length > 0 ? topic?.comment?.map((item, idx) => {
                                    return (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            marginTop: 20,
                                        }}>
                                            <div style={{
                                                width: '5px',
                                                height: 100,
                                                backgroundColor: 'indigo'
                                            }}>
        
                                            </div>
                                            <div style={{
                                                marginLeft: 10,
                                                fontFamily: 'Urbanist'
                                            }}>
                                                <h3 style={{
                                                    color: 'green'
                                                }}>{item.sender}</h3>
                                                <p style={{
                                                    color: '#7c7c7c'
                                                }}>{item.message}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }) : 'No Comments already posted please add one'}
                                <div style={{
                                    marginTop: 30,
                                    width: '70%'
                                }}>
                                <input style={{marginBottom: 10,}} type='text' className='form-control' placeholder='Names' onChange={(e) => setNames(e.target.value)} />
                                <textarea style={{marginBottom: 10,}} className='form-control' placeholder='Your Comment' onChange={(e) => setDescription(e.target.value)} />
                                <Button onClick={() => {
                                    axios.post('https://agrirwanda.eu-4.evennode.com/api/comment', {
                                        names: names,
                                        message: description
                                    }, {params: {topic_id: window.localStorage.getItem('topicId')}}).then((res) => {
                                        alert(res.data.message)
                                        window.location.reload();
                                    })
                                }} variant='success'>Add Comment</Button>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default CommentTopic
