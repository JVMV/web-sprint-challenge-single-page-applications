import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHomepage = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    // height: 80vh;
    // border: solid 3px green;

    .banner {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-around;
        // border: solid 1px red;
        width: 100%;
        height: 50vh;
        position: static;
        overflow: hidden;
    }
    .bnr-txt {
        text-align: center;
        font-size: 1.4rem;
        line-height: 1.8;
        // border: solid 2px purple;
        width: 100%
    }
    .bnr-btn {
        text-decoration: none;
        font-size: 1.4rem;
        color: black;
        // border: solid 1px red;
        padding: 1%;
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
    .grid-container {
        // border: solid 5px black;
        width: 100%;
        height: 50vh;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin: 2% 0;
    }
    .grid-menu {
        display: flex;
        flex-wrap: wrap;
        // border: solid 2px orange;
        width: 100%;
        height: 80%;
        justify-content: center;
        align-items: center;
    }
    .grid-itm {
        border: solid 1px red;
        margin: 1%;
        width: 30%;
        height: 40%;
    }

    .bnr-img {
        position: absolute;
        opacity: 0.35;
        width: 100%;
        // height: 80%;
        // object-fit: contain;
    }
    .bnr-content {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: center;
        position: relative;
        height: 100%;
        width: 100%;
    }
    em {
        color: #bd1d2c;
        text-decoration: underline;
        text-decoration-color: black;
        font-size: 2.4rem;
    }
    .offset {
        
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
                    <div className='bnr-txt'>
                        <span className='offset'>THE ALL NEW</span><br />
                        <span><em>Artisan Style</em></span><br /> 
                        THIN CRUST<br />
                        YERRRRRP!
                    </div>
                    <Link className='bnr-btn' to='/order-pizza'>Order Now</Link>
                </div>
            </div>
            <div className='grid-container'>
                <h2>What'cha cravin'?</h2>
                <div className='grid-menu'>
                    <div className='grid-itm'>Artisan Pizza</div>
                    <div className='grid-itm'>Breadsticks</div>
                    <div className='grid-itm'>Pasta</div>
                    <div className='grid-itm'>Salad</div>
                    <div className='grid-itm'>Drinks</div>
                    <div className='grid-itm'>Yerrrp</div>
                </div>
            </div>   
        </StyledHomepage>
    )
}