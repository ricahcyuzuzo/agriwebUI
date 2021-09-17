import { Navbar, Nav, Button} from 'react-bootstrap';
import { FiMail, FiShoppingCart } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbarr() {
    return (
        <Navbar style={{
            position: 'fixed',
            backgroundColor: '#fff',
            fontSize: '20px',
            width: '100%',
            top: 0,
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)'
        }}>
            <Navbar.Brand href="#home" style={{paddingLeft: '10px', paddingTop: '5px'}}><img src={logo} alt="Logo" className="logo" style={{
                marginTop: -15,
            }} /><span style={{fontSize: 35, fontWeight: 'bold', fontFamily: 'Roboto'}}>Farma<font color="green">Talk</font></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop: '30px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    <Nav.Link><Link to="/" style={{paddingRight: '30px', color: 'green', paddingBottom: '20px', paddingLeft: '30px', fontFamily: 'Urbanist'}}>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about" style={{paddingRight: '30px', color: 'green', paddingBottom: '10px', paddingLeft: '30px', fontFamily: 'Urbanist'}}>About</Link></Nav.Link>
                    <Nav.Link><Link to="/product" style={{paddingRight: '30px', color: 'green', paddingBottom: '10px', paddingLeft: '30px', fontFamily: 'Urbanist'}}>Product</Link></Nav.Link>                  
                    <Nav.Link><Link to="/forum" style={{paddingRight: '30px', color: 'green', paddingBottom: '10px', paddingLeft: '30px', fontFamily: 'Urbanist'}}>Forum</Link></Nav.Link>
                    <Nav.Link><Link to="/contact" style={{paddingRight: '30px', color: 'green', paddingBottom: '10px', paddingLeft: '30px', fontFamily: 'Urbanist'}}>Contact us</Link></Nav.Link>
                    <Link to='/signup'><Button style={{
                        marginTop: 5
                    }} variant='success'>Login / Sign Up</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr;