import { Nav } from 'react-bootstrap';

function CategoriesNavigation() {
    return (
        <div style={{paddingLeft: '30px', paddingTop: '50px'}}>
            <Nav>
                <Nav.Item>
                    <Nav.Link>Fruits</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Grains</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Vegies</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default CategoriesNavigation;