import React, { Component } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    width: 100%;
    height: 150px;
    background: pink;
`

class Searchbar extends Component {
    render() {
        return (
            <Search>
                <form>
                    <input type="text"></input>
                </form>
            </Search>
        )
    }
}

export default Searchbar;