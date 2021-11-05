import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar';
import { useHistory } from 'react-router-dom';
import { FaRegCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forum = () => {
    const [datas, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getData();

    }, [])

    const getData = () => {
        axios.get('https://farmatalk.herokuapp.com/api/all_posts').then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log('Error',err.response)
        })

    }
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
                <h1 style={{
                    color: 'green'
                }}>Ask your Question</h1>
                <Link to='/ask'>
                <Button style={{
                    height: 40,
                }} variant='success'>Ask a Question</Button></Link>
            </div>
            <div style={{
                margin: 'auto',
                width: '60%'
            }}>
                {datas.length > 0 ? datas.map((item, idx) => {
                    return(
                        <div key={idx} style={{
                            backgroundColor: '#f2f1f1',
                            minHeight: 200,
                            width: '100%',
                            borderRadius: 20,
                            marginTop: 10,
                        }}>
                            <div style={{
                                display: 'flex'
                            }}>
                                <div style={{
                                    width: 5,
                                    minHeight: '200px',
                                    backgroundColor: 'green',
                                    borderRadius: 10,
                                    marginLeft: 20,
                                }}>
        
                                </div>
                                <div style={{
                                    marginLeft: 10,
                                    width: '90%'
                                }}>
                                <h1 style={{
                                    color: '#000',
                                    fontFamily: 'Urbanist',
                                    marginTop: 10,
                                }}>{item.topic}</h1>
                                <p style={{
                                    fontFamily: 'Urbanist',
                                    fontSize: 18
                                }}>{item.description}</p>
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        marginTop: 20,
                                        marginBottom: 20
                                    }}>
                                       <Button variant='primary' onClick={() => {
                                           window.localStorage.setItem('topicId', item._id);
                                           history.push('/comment');
                                       }} style={{
                                            paddingTop: 10
                                        }}><span style={{
                                            fontFamily: 'Urbanist',
                                            fontSize: 18,
                                            marginRight: 10
                                        }}>{item.comment.length} Comments</span>
                                        <FaRegCommentDots size='30px' color='#fff' style={{ marginTop: -10}} /></Button>
                                    </div>
                                </div>
                                </div>
        
                            </div>
        
                        </div>
                    )
                }): 'No Posts On the forum'}
            </div>
            
        </div>
    )
}

export default Forum
