import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHomepage = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100vw;

    .banner {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-around;
        border: solid 1px red;
        width: 100%;
        height: 50vh;
    }
    .grid {
        border: solid 1px orange;
        width: 100%;
        height: 50vh;
    }
`

export default function() {
    return (
        <StyledHomepage>
            <div className='banner'>
                <div className='bnr-txt'>
                <h2>Homepage Banner Title</h2>
                </div>
                <div className='bnr-btn'>
                <Link to='/'>Pizza?</Link>
                </div>
            </div>
            <div className='grid'>
                <h2>Homepage grid</h2>
            </div>
        </StyledHomepage>
    )
}