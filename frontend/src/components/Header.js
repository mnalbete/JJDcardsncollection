import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src=""
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            JJDcardsncollection
                        </Navbar.Brand></LinkContainer>


                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link> <i className='fas fa-user'></i>Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
