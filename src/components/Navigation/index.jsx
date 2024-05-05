import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Navigation({ routes }) {
  return (
    <Navbar bg="dark">
      <Nav className="mx-auto">
        {routes.map((route) => (
          <Nav.Link
            key={route.path}
            as={NavLink}
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end>
              {route.name}
            </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
}

export default Navigation;