import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 // to link the page to to other page we use Link from react-router-dom

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" style={{height: "69px"}}>
                <Container>
                    {/* can also be like this but it will break bootstrap: you it without bootstrap direcctly
                     <Link to="/" className='text-decoration-none text-light mx-4'>Home</Link> */}
                    <Navbar.Brand ><Link to="/" className='text-decoration-none text-light mx-2'>Home</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        { /* link this register to the register page we made */}
                        <Nav.Link ><Link to="/register" className='text-decoration-none text-light'>Register</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header