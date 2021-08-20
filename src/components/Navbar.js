import { Navbar, Nav} from 'react-bootstrap';
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbarr() {
    return (
        <Navbar style={{
            position: 'fixed',
            backgroundColor: '#331974',
            width: '100%',
            top: 0,
        }}>
            <Navbar.Brand href="#home" style={{paddingLeft: '10px'}}><img src={logo} alt="Logo" className="logo"/><b style={{fontSize: 20, color: '#fff'}}>Agri <font color="#8FDAB1">Web</font></b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop: '30px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '20px'}}>
                    <Link to="/" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>Home</Link>
                    <Link to="/about" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>About</Link>
                    <Link to="/services" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>Services</Link>
                    <Link to="/product" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>Products</Link>
                    <Link to="/contact" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>Contact Us</Link>
                    <Link to="/forum" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px', color: '#fff'}}>Forum</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr;