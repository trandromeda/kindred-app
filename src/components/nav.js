import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from '../kindred-logo.png';

const Navbar = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 75px;
    padding: 0 25px;
    background: white;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 999;
`

const NavList = styled.ul`
    padding: 0;
    flex: none;
    list-style-type: none;
`

const NavItem = styled.li`
    display: inline-block;
    margin: 0 15px;
`

class Nav extends Component {
    render() {
        return (
            <Navbar>
                <img src={logo} />
                <NavList>
                    <NavItem>
                        <Link to="/mentor">Mentor</Link>
                    </NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                </NavList>
            </Navbar>
        )
    }
}

export default Nav;