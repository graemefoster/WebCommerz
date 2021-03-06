import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Navbar brand="Mobi-Commerz" toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}>
                        <Nav navbar>
                            <NavItem eventKey={1}><Link to='/about'>About</Link></NavItem>
                            <NavItem eventKey={2}><Link to='/featured'>Featured</Link></NavItem>
                        </Nav>
                    </CollapsibleNav>
                    <ButtonToolbar>
                        <Button><Glyphicon glyph="user"/></Button>
                        <Button className="pull-right"
                                onClick={ () => this.setState({ open: !this.state.open })}><Glyphicon
                            glyph="search"/></Button>
                    </ButtonToolbar>
                </Navbar>
                <Panel expanded={this.state.open} >
                    <Input type="text" placeholder="Search..."/>
                </Panel>
            </div>
        );
    }
}

