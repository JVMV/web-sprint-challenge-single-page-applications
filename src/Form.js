import React from 'react';
import Styled from'styled-components';
import Confirmation from './Confirmation';

const StyledForm = Styled.div`
display: flex;
flex-flow: column wrap;
width: 100vw;
// border: solid 10px #dcc3aa;
align-items: center;

    .form-container {
        display: flex;
        flex-flow: column wrap;
        width: 75%;
        // border: solid 1px red;
    }
    .order-btn {
        width: 50%;
        align-self: center;
        padding: 2%;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: lightGreen;
    }
    fieldset {
        margin: 2% 0;
    }
    #special-text {
        width: 100%;
    }
`

const submit = (e) => {
    e.preventDefault();
    <Confirmation />
}

export default function() {
    return (
        <StyledForm>
            <h2>Your Order</h2>
            <form id='pizza-form' className='form-container'>
                <fieldset>
                    <legend>Personal Info</legend>
                    <label>Full Name:<br />
                        <input 
                            id='name-input'
                            name='name-input'
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
                    <label>Email:<br />
                        <input 
                            name='email'
                            type='email'
                        />
                    </label>
                </fieldset>
                
                <fieldset>
                    <legend>Order</legend>
                    <fieldset>
                        <legend>Pizza</legend>
                        <label>Select Pizza:<br />
                        <select name='pizza-style'>
                            <option value='artisan'>ArtisanThin Crust</option>
                            <option value='deepdish'>Deep Dish</option>
                            <option value='original'>Original</option>
                        </select>
                            <br />
                        <label id='size-selector'>Select Size:<br />
                            <select name='pizza-size'>
                                <option value='artisan'>Personal 6"</option>
                                <option value='deepdish'>Medium 14"</option>
                                <option value='original'>Large 22"</option>
                            </select>
                        </label>
                            <br />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Choose Toppings</legend>
                        <label>
                            <input name='pepperoni' type='checkbox' value='pepperoni' />
                            Pepperoni
                        </label>
                        <label>
                            <input name='sausage' type='checkbox' value='sausage' />
                            Sausage
                        </label>
                        <label>
                            <input name='mushrooms' type='checkbox' value='mushrooms' />
                            Mushrooms
                        </label>
                        <label>
                            <input name='cheese' type='checkbox' value='cheese' />
                            Cheeese
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Additionals</legend>
                        <fieldset>
                        <legend>Sides</legend>
                        <label>
                            <input name='sides' type='checkbox' value='cheesy-mac' />
                            Cheesy Mac
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='salad' />
                            Salad
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='breadsticks' />
                            Breadsticks
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='pasta' />
                            Pasta
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Drinks</legend>
                        <label>
                            <input name='drinks' type='checkbox' value='brisk' />
                            Brisk
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='horchata' />
                            Horchata
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='beer' />
                            Draft Beer
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='wine' />
                            Wine
                        </label>
                    </fieldset>
                            <br />
                        <label>Yerrrr?!<br />
                            <select>
                                <option value=''>--select one--</option>
                                <option value='yerp'>YERRRRR!!!</option>
                                <option value='nah'>Nah...</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Special Instructions</legend>
                        <input id='special-text' name='special-text' />
                    </fieldset>
                </fieldset>
                <button id='order-button' className='order-btn' onClick={submit}>Submit Order</button>
            </form>
        </StyledForm>
    )
}