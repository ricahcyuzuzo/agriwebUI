import { Navbar, Nav} from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbarr() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home" style={{paddingLeft: '10px'}}><img src={logo} alt="Logo" style={{ marginTop: -10}} className="logo"/><b style={{fontSize:35, fontFamily: "Roboto"}}>Farma<font color="346B33">Talk</font></b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop: '30px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '30px', fontFamily: 'Urbanist'}}>
                    <Link to="/seller/home" style={{paddingRight: '30px', color: 'green', paddingBottom: '20px', paddingLeft: '30px'}}>Home</Link>
                    <Link to="/seller/product" style={{paddingRight: '30px', color: 'green', paddingBottom: '20px', paddingLeft: '30px'}}>Product</Link>
                    <Link to="/seller/profile" style={{paddingRight: '30px', color: 'green', paddingBottom: '20px', paddingLeft: '30px'}}>Profile</Link>
                    <Link to="/" onClick={() => {
                        window.localStorage.removeItem('token');
                    }}  style={{paddingRight: '30px', color: 'green', paddingBottom: '20px', fontSize: 20, marginTop: -5, paddingLeft: '30px'}}><FiLogOut /></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export default Navbarr;