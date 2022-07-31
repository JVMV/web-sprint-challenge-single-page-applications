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
        font-weight: bold;
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
        // border: solid 1px red;
        margin: 1%;
        width: 30%;
        height: 40%;
        font-weight: bold;
        // color: white;
    }
    .grid-itm {
        // border: solid 1px black;
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
    .yerp {
        background-image: url('https://cdn.pastemagazine.com/www/articles/2019/02/22/DESUSMERO101-GregEndriesShowtime-Header.jpg');
        background-position: center;
        background-size: cover;
    }
    .pizza {
        background-image: url('https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/sbarro-pepperoni-pizza.jpg?quality=82&strip=1');
        background-position: center;
        background-size: cover;
    }
    .breadsticks {
        background-image: url('https://celebratingsweets.com/wp-content/uploads/2014/03/cheesy-garlic-heb-breadsticks-Celebrating-Sweets.jpg');
        background-position: center;
        background-size: cover;
    }
    .pasta {
        background-image: url('https://pinchandswirl.com/wp-content/uploads/2020/04/Lemon-Garlic-Pasta-sq.jpg');
        // background-position: center;
        background-size: cover;
    }
    .salad {
        background-image: url('https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/05/WU2710_So-Good-For-You-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1620241851446.jpeg');
        background-position: center;
        background-size: cover;
    }
    .drinks {
        background-image: url('https://la-mesa.com/wp-content/uploads/2016/10/la-mesa-mexican-restaurant-margarita-with-chips.jpg');
        background-position: center;
        background-size: cover;
    }
    .txt-ovrly {
        // border: solid 1px red;
        width: 50%;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .p1 {
        margin: 0 40% 0 0;
    }
    .p2 {
        margin: 0 0 0 20%;
    }
    .p3 {
        margin: 0 0 0 40%;
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
                        <span className='p1'>THE ALL NEW</span><br />
                        <span><em>Artisan Style</em></span><br /> 
                        <span className='p2'>THIN CRUST</span><br />
                        <span className='p3'>YERRRRRP!</span>
                    </div>
                    <Link className='bnr-btn' to='/pizza'>Order Now</Link>
                </div>
            </div>
            <div className='grid-container'>
                <h2>What'cha cravin'?</h2>
                <div className='grid-menu'>
                    <div className='grid-itm pizza'>
                        <p className='txt-ovrly'>Artisan Pizza</p>
                    </div>
                    <div className='grid-itm breadsticks'>
                        <p className='txt-ovrly'>Breadsticks</p>
                    </div>
                    <div className='grid-itm pasta'>
                        <p className='txt-ovrly'>Pasta</p>
                    </div>
                    <div className='grid-itm salad'>
                        <p className='txt-ovrly'>Salad</p>
                    </div>
                    <div className='grid-itm drinks'>
                        <p className='txt-ovrly'>Drinks</p>
                    </div>
                    <div className='grid-itm yerp'>
                        <p className='txt-ovrly'>Yerrrp</p>
                    </div>
                </div>
            </div>   
        </StyledHomepage>
    )
}