import { Navbar, Nav, Button} from 'react-bootstrap';
// import { FiMail, FiShoppingCart } from 'react-icons/fi'
import logo from './images/NavLogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './global.module.css';
import menu from '../image/menu.png'
import close from '../image/close.png'


function Navbarr() {
    useEffect(() => {
        console.log(window.localStorage.getItem('userType'))
    }, [])

    const handleOpenRespNav = () => {
        const respNav = document.getElementById('respNav');
        respNav.style.display = 'block';
    }

    const handleClose = () => {
        const respNav = document.getElementById('respNav');
        respNav.style.display = 'none';
    }

    return (
        <>
        <Navbar className={styles.navbar}>
            <Navbar.Brand href="#home" className='brandIcon'><img src={logo} alt="Logo" className="logo" style={{
                marginTop: -15,
            }} /><span className={styles.brandName}>Farma<font color="green">Talk</font></span></Navbar.Brand>
            <div className={styles.collapse} id="basic-navbar-nav">
                <Nav className="ml-auto" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <Nav.Link><Link to="/" style={{paddingRight: '10px', color: 'green', paddingBottom: '20px', paddingLeft: '10px', fontFamily: 'Urbanist'}}>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about" style={{paddingRight: '10px', color: 'green', paddingBottom: '20px', paddingLeft: '10px', fontFamily: 'Urbanist'}}>About</Link></Nav.Link>
                    <Nav.Link><Link to="/product" style={{paddingRight: '10px', color: 'green', paddingBottom: '20px', paddingLeft: '10px', fontFamily: 'Urbanist'}}>Product</Link></Nav.Link>                  
                    <Nav.Link><Link to="/forum" style={{paddingRight: '10px', color: 'green', paddingBottom: '20px', paddingLeft: '10px', fontFamily: 'Urbanist'}}>Forum</Link></Nav.Link>
                    <Nav.Link><Link to="/contact" style={{paddingRight: '20px', color: 'green', paddingBottom: '20px', paddingLeft: '10px', fontFamily: 'Urbanist'}}>Contact us</Link></Nav.Link>
                    {window.localStorage.getItem('userType') === 'cutomer' ? <div>{window.localStorage.getItem('names')} <Link to='/'><Button onClick={() => {
                        window.localStorage.setItem('isLoggedIn', false);
                        window.localStorage.setItem('userType', null);
                    }}>Logout</Button></Link></div> : <Link to='/signup'><Button  style={{
                        marginTop: 5,
                        fontSize: 16
                    }} variant='success'>Login / Sign Up</Button></Link> }
                </Nav>
            </div>

            <button onClick={handleOpenRespNav} className={styles.respButton}>
                <img src={menu} style={{
                    width: 25,
                    height: 30
                }} />
            </button>

        </Navbar>
        <div id='respNav' className={styles.respoNav}>
            <button onClick={handleClose} className={styles.respButton}>
                <img src={close} style={{
                    width: 25,
                    height: 30
                }} />
            </button>
            <ul className={styles.unStyledLists}>
                <li>Home</li>
                <li>Data</li>
                <li>Home</li>
                <li>Data</li>
            </ul>
        </div>
        </>
    );    
}

export default Navbarr;