import * as React from "react";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import AppContext from '../components/AppContext';

class Layout extends React.Component {

  render() {


    return (
      <AppContext.Consumer>
        {({ menu }) => (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Demo</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>

              <NavDropdown eventKey={1} title="Home" id="nav-home">
              {
                menu.map(function(obj, index){
                    return <LinkContainer to={obj.url}>
                    <MenuItem eventKey={index+1}>{obj.title}</MenuItem>
                  </LinkContainer>
                  })
                }

              </NavDropdown>
            </Nav>
          </Navbar>

        )}

      </AppContext.Consumer>


    );
  }

}

export default Layout;
