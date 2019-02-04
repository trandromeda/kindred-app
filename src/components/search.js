import React, { Component } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    width: 100%;
    height: 150px;
    background: #F2DC5D;
    border-bottom: 2px solid #32DBC4;
`

const Heading = styled.h1`
    margin: 0;
    padding: 10px 0;
    text-align: center;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Button = styled.div`
    width: 250px;
    height: 55px;
    padding: 10px 15px;
    background: #32DBC4;
    
    p {
        margin: 0;
    }
`;

class Searchbar extends Component {
    render() {
        return (
            <Search>
                <Heading>What will it be?</Heading>
                <Options>
                    <Button><p>I want to be a better cook</p></Button>
                    <Button><p>I want to better manage my finances</p></Button>
                    <Button><p>I want to...</p>
                    <form>
                        <input type="text"></input>
                    </form>
                        </Button>
                </Options>
            </Search>
        )
    }
}

export default Searchbar;