import React from 'react';
import Styled from'styled-components';

const StyledForm = Styled.div`
display: flex;
flex-flow: column wrap;
width: 100vw;
border: solid 1px pink;
align-items: center;

    .form-container {
        display: flex;
        flex-flow: column wrap;
        width: 75%;
        border: solid 1px red;
    }
    .order-btn {
        width: 50%;
        align-self: center;
        padding: 2%;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: lightGreen;
    }
`

export default function() {
    return (
        <StyledForm>
            <h2>Your Order</h2>
            <div className='form-container'>
                <fieldset>
                    <legend>Personal Info</legend>
                    <label>First Name:<br />
                        <input 
                            name='firstName'
                            type='text'
                        />
                    </label>
                        <br />
                    <label>Last Name:<br />
                    <input 
                            name='lastName'
                            type='text'
                        />
                    </label>
                    <br />
                    <label>Address:<br />
                    <input 
                            name='address'
                            type='text'
                        />
                    </label>
                    <br />
                    <label>Email::<br />
                        <input 
                            name='email'
                            type='email'
                        />
                    </label>
                </fieldset>
                
                <fieldset>
                    <legend>Order</legend>
                    <label>Pizza:<br />
                    <select name='pizza'>
                        <option value='artisan'>ArtisanThin Crust</option>
                        <option value='deepdish'>Deep Dish</option>
                        <option value='original'>Original</option>
                    </select>
                        <br />
                    </label>
                    <label>Toppings:<br />
                        <input
                            name='toppings'
                            type='checkbox'
                        ></input>
                    </label>
                        <br />
                    <label>Sides:<br /></label>
                        <br />
                    <label>Drinks:<br /></label>
                        <br />
                    <label>Yerp:<br /></label>
                </fieldset>
                <button className='order-btn'>Submit Order</button>
            </div>
        </StyledForm>
    )
}