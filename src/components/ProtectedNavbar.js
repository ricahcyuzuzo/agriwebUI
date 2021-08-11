import { Navbar, Nav} from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi'
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
                    <Link to="/seller/home" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Home</Link>
                    <Link to="/seller/product" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Product</Link>
                    <Link to="/seller/profile" style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}>Profile</Link>
                    <Link to="/login" onClick={() => {
                        window.localStorage.removeItem('token');
                    }}  style={{paddingRight: '30px', color: '#000', paddingBottom: '20px', paddingLeft: '30px'}}><FiLogOut /></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr;