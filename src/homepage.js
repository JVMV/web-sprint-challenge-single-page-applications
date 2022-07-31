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
        position: relative;
        overflow: hidden;
    }
    .bnr-txt {
        text-align: center;
        font-size: 1.8rem;
        line-height: 1.5;
    }
    .bnr-btn {
        text-decoration: none;
        font-size: 1.4rem;
        color: black;
        // border: solid 1px red;
        padding: 2%;
        background-color: #fccf59;
        border-radius: 5px;
    }
    .bnr-btn:hover {
        transform: scale(1.2);
        transition: ease-in-out .5s;
      }
      .bnr-btn:not(:hover) {
        transform: scale(1);
        transition: ease-in-out .5s;
      }
    .grid {
        border: solid 1px orange;
        width: 100%;
        height: 50vh;
    }
    .bnr-img {
        position: absolute;
        opacity: 0.35;
        background-color: black;
    }
    .bnr-content {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: center;
        position: relative;
        height: 100%;
    }
    em {
        color: #bd1d2c;
        text-decoration: underline;
        text-decoration-color: black;
        font-size: 2.4rem;
    }
`

export default function() {
    return (
        <StyledHomepage>
            <div className='banner'>
                <img 
                    className='bnr-img' 
                    src='https://coolwallpapers.me/th700/6119426-pizza-food-onion-cheese.jpg' 
                    alt='banner-background-img' 
                />
                <div className='bnr-content'>
                    <h2 className='bnr-txt'>
                        All new <br />
                        <em>Artisan Style</em><br /> 
                        thin crust
                    </h2>
                    <Link className='bnr-btn' to='/order-pizza'>Order Now</Link>
                </div>
            </div>
            <div className='grid'>
                <h2>Homepage grid</h2>
            </div>   
        </StyledHomepage>
    )
}