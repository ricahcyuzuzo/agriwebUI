import { Navbar, Nav} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbarr() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home" style={{paddingLeft: '10px'}}><img src={logo} alt="Logo" className="logo"/><b style={{fontSize: 20}}>Agri <font color="346B33">Web</font></b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop: '30px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '30px'}}>
                    <Link to="/" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Shop</Link>
                    <Link to="/forum" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Forum</Link>
                    <Link to="/login" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Login</Link>
                    <Link to="/cart" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}><FiShoppingCart /></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr;