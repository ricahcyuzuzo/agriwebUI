import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbarr from '../../ProtectedNavbar';
import RwandaLocations from './data.json';
import axios from 'axios';

const ProfileScreen = () => {

    const [locations, setLocations] = useState([]);
    const [provinceValue, setProvinceValue] = useState('');
    const [provinceName, setProvinceName] = useState('');
    const [districtValue, setDistrictValue] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [sectorValue, setSectorValue] = useState('');
    const [sectorName, setSectorName] = useState('');
    const [cellValue, setCellValue] = useState('');
    const [cellName, setCellName] = useState('');
    const [villageValue, setVillageValue] = useState('');
    const [villageName, setVillageName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [file, setFile] = useState('');

    useEffect(() =>{
        setLocations(RwandaLocations.provinces);
    }, []);

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
                    <input type='file' className='form-control' onChange={(e) => setFile(e.target.files[0])} />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Id number</Form.Label>
                    <Form.Control type='text' placeholder='Ex: 119XXXXXXXXXXXXX' maxLength='16' onChange={(e) => setIdNumber(e.target.value)} />
                    <Form.Label style={{
                        marginTop: 10,
                    }}>Address</Form.Label><br />
                    <Form.Label>Province</Form.Label>
                    <select className='form-control' onChange={(e) => {
                        console.log(e.target.value)
                        setProvinceValue(e.target.value)
                        setProvinceName(e.target.options[e.target.selectedIndex].text);
                        }}>
                        <option disabled>Choose Province</option>
                        {locations.map((item, idx) => {
                            return (<option value={idx}>{item.name}</option>)
                        })}
                    </select>
                    <Form.Label>District</Form.Label>
                    <select className='form-control' onChange={(e) => {
                        setDistrictValue(e.target.value)
                        setDistrictName(e.target.options[e.target.selectedIndex].text);
                        }}>
                        <option disabled>Choose District</option>
                        {
                            locations[provinceValue]?.districts.map((item, idx) => {
                                return(
                                    <option value={idx}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <Form.Label>Sector</Form.Label>
                    <select className='form-control'  onChange={(e) => {
                        console.log(e.target.value)
                        setSectorValue(e.target.value)
                        setSectorName(e.target.options[e.target.selectedIndex].text)
                        }}>
                        <option disabled>Choose Sector</option>
                        {
                            locations[provinceValue]?.districts[districtValue]?.sectors.map((item, idx) => {
                                return(
                                    <option value={idx}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <Form.Label>Cell</Form.Label>
                    <select className='form-control'  onChange={(e) => {
                        console.log(e.target.value)
                        setCellValue(e.target.value)
                        setCellName(e.target.options[e.target.selectedIndex].text)
                        }}>
                        <option disabled>Choose Cell</option>
                        {
                            locations[provinceValue]?.districts[districtValue]?.sectors[sectorValue]?.cells.map((item, idx) => {
                                return(
                                    <option value={idx}>{item.name}</option>
                                )
                            })
                        }
                    </select>

                    <Form.Label>Village</Form.Label>
                    <select className='form-control'  onChange={(e) => {
                        setVillageValue(e.target.value)
                        setVillageName(e.target.options[e.target.selectedIndex].text);
                        }}>
                        <option disabled>Choose Village</option>
                        {
                            locations[provinceValue]?.districts[districtValue]?.sectors[sectorValue]?.cells[cellValue]?.villages.map((item, idx) => {
                                return(
                                    <option value={idx}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <Button variant='primary' 
                    onClick={() =>{
                        const CLOUDINARY_UPLOAD_PRESET = 'ywxfkdjs';
                    console.log(file);
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
                    axios.post('https://api.cloudinary.com/v1_1/agri-rwanda/image/upload', formData)
                        .then(res => {
                            axios.patch('https://agrirwanda.eu-4.evennode.com/api/profile', {
                                idNumber: idNumber,
                                image: res.data.secure_url,
                                address: {
                                    province: provinceName,
                                    district: districtName,
                                    sector: sectorName,
                                    cell: cellName,
                                    village: villageName,
                                }
                            }, {params: {phone: window.localStorage.getItem('phone')}})
                            .then((res) => {
                                alert(res.data.message)
                                window.location.reload()
                            })
                        });
                    }}
                    style={{
                        marginTop: 50,
                        width:'100%'
                    }}>Update</Button>

                </div>
            </div>
        </>
    )
}

export default ProfileScreen
