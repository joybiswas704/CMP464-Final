import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
     return (
          <>
               <Navbar bg='dark' data-bs-theme='dark'>
                    <Container>
                         <Navbar.Brand href='#'>BuzCart</Navbar.Brand>
                         <Nav className='me-auto'>
                              <Nav.Link>
                                   <Link
                                        style={{
                                             textDecoration: 'none',
                                        }}
                                        to='/'
                                   >
                                        Home
                                   </Link>
                              </Nav.Link>
                              <Nav.Link>
                                   <Link
                                        style={{ textDecoration: 'none' }}
                                        to='products'
                                   >
                                        Products
                                   </Link>
                              </Nav.Link>
                              <Nav.Link>
                                   <Link
                                        style={{ textDecoration: 'none' }}
                                        to='orders'
                                   >
                                        Order History
                                   </Link>
                              </Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>
          </>
     );
}

export default NavBar;
