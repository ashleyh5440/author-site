import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation({ routes }) {
  return (
    <Navbar style={{backgroundColor: "rgb(67, 14, 24)"}}>
      <Nav className="mx-auto">
        {routes.map((route) => (
          <Nav.Link style={{color: "white"}}
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


