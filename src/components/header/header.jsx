import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

import './header.less';

export default class Header extends React.Component {

  constructor() {
    super();
  }

    render() {
        return (
          <Navbar brand="Webshop MOB" inverse toggleNavKey={0}>
            <CollapsibleNav eventKey={0}>
              <Nav navbar>
                <NavItem eventKey={1} href={this.context.router.makeHref('about')}>About</NavItem>
                <NavItem eventKey={2} href={this.context.router.makeHref('featured')}>Featured</NavItem>
              </Nav>
            </CollapsibleNav>
          </Navbar>
         );
    }
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
};
