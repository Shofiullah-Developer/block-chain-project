import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandlogo from '../../../Images/brandlogo.png';
const Navigations = () => {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" variant="dark"
                style={{ paddingTop: '30px' }}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={brandlogo} alt="" width="200px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">                    
                            

                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Marketplace"
                    style={{fontSize: 'medium'}}
                    menuVariant="dark"
                    >
                    <NavDropdown.Item as={Link} to="/popularcomments">
                            <small style={{fontWeight: 'bold' }}>Popular items</small>
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/featuredcomments">
                            <small style={{ fontWeight: 'bold'}}>Featured Assets</small>
                        </NavDropdown.Item>
                    </NavDropdown>

                            <Nav.Link as={Link} to='/nfts' className='px-5'>
                                <small style={{ color: '#FFFFFF'}}>MyNFTs</small>
                            </Nav.Link>
                            <Nav.Link href="#video">
                                <small style={{ color: '#FFFFFF' }}>Videro foods</small>
                            </Nav.Link>
                            <Nav.Link href="#video">
                                <Button variant="info" className='px-3 mx-3 my-0 py-1'
                                    style={{ fontWeight: 'bold', color: '#FFFFFF' }}
                                >Use TrApp</Button>{' '}
                            </Nav.Link>
                            {/* </Nav>
                        <Nav> */}
                            <Nav.Link href="#sign in">
                                <small style={{ color: '#FFFFFF' }}>Sign in</small>
                            </Nav.Link>
                            <Nav.Link href="#signup">
                                <small style={{ color: '#FFFFFF' }}>Sign Up</small>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Navigations;