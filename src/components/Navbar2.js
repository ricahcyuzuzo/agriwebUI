import { Navbar, Nav, Button} from 'react-bootstrap';
import { FiMail } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbarr2() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home" style={{paddingLeft: '10px'}}><img src={logo} alt="Logo" style={{
                marginTop: -15
            }} className="logo"/><span style={{fontSize: 35, fontWeight: 'bold', color: '#000', fontFamily: 'Roboto'}}>Agri <font color="#fff">Web</font></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop: '30px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '30px', fontFamily: 'Urbanist'}}>
                    <Link to="/" style={{paddingRight: '30px', color: '#fff', paddingBottom: '20px', paddingLeft: '30px'}}>Home</Link>
                    <Link to="/seller/product" style={{paddingRight: '30px', color: '#fff', paddingBottom: '20px', paddingLeft: '30px'}}>Product</Link>
                    <Link to="/seller/profile" style={{paddingRight: '30px', color: '#fff', paddingBottom: '20px', paddingLeft: '30px'}}>Profile</Link>
                    <Link to="/forum" style={{paddingRight: '30px', color: '#fff', paddingBottom: '20px', paddingLeft: '30px' }}>Forum</Link>
                    <Button>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr2;
