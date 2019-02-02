import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = styled.div`
    width: 100vw;
    height: 75px;
    background: white;
    position: fixed;
`

const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
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
                <NavList>
                    <NavItem>
                        <Link to="/mentor">Mentor</Link>
                    </NavItem>
                    <NavItem>Link 2</NavItem>
                    <NavItem>Link 3</NavItem>
                </NavList>
            </Navbar>
        )
    }
}

export default Nav;