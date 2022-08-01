import React from 'react';
import Styled from'styled-components';
import { Link } from 'react-router-dom';

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
        text-align: center;
        text-decoration: none;
        color: black;
        border: solid 3px black;
        border-radius: 5px;
    }
    .order-btn:hover {
        transform: scale(1.1);
        transition: ease-in-out .5s;
      }
      .order-btn:not(:hover) {
        transform: scale(1);
        transition: ease-in-out .5s;
      }
    fieldset {
        margin: 2% 0;
    }
    #special-text {
        width: 100%;
    }
`


export default function(props) {

    const {submit, initialValues} = props;
    const {nameinput, address, email, pizzaStyle, pizzaSize, toppings, sides, drinks, yerp} = initialValues;
    const onChange = e => {
        return console.log(e.target);
    }






    return (
        <StyledForm>
            <h2>Your Order</h2>
            <form id='pizza-form' className='form-container'>
                <fieldset>
                    <legend>Personal Info</legend>
                    <label>Full Name:<br />
                        <input 
                            id='name-input'
                            name='nameinput'
                            type='text'
                            placeholder='enter full name'
                            value={nameinput}
                        />
                    </label>
                    <br />
                    <label>Address:<br />
                    <input 
                            name='address'
                            type='text'
                            placeholder='enter address'
                            value={address}
                        />
                    </label>
                    <br />
                    <label>Email:<br />
                        <input 
                            name='email'
                            type='email'
                            placeholder='enter email'
                            value={email}
                        />
                    </label>
                </fieldset>
                
                <fieldset>
                    <legend>Order</legend>
                    <fieldset>
                        <legend>Pizza</legend>
                        <label>Select Pizza:<br />
                        <select name='pizzaStyle' value={pizzaStyle}>
                            <option value=''>--select style--</option>
                            <option value='artisan'>ArtisanThin Crust</option>
                            <option value='deepdish'>Deep Dish</option>
                            <option value='original'>Original</option>
                        </select>
                            <br />
                        <label id='size-selector'>Select Size:<br />
                            <select name='pizzaSize' value={pizzaSize}>
                                <option>--select size--</option>
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
                            <input name='toppings' type='checkbox' value='pepperoni' checked={toppings}/>
                            Pepperoni
                        </label>
                        <label>
                            <input name='toppings' type='checkbox' value='sausage' checked={toppings}/>
                            Sausage
                        </label>
                        <label>
                            <input name='toppings' type='checkbox' value='mushrooms' checked={toppings}/>
                            Mushrooms
                        </label>
                        <label>
                            <input name='toppings' type='checkbox' value='cheese' checked={toppings}/>
                            Cheeese
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Additionals</legend>
                        <fieldset>
                        <legend>Sides</legend>
                        <label>
                            <input name='sides' type='checkbox' value='cheesy-mac' checked={sides}/>
                            Cheesy Mac
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='salad' checked={sides}/>
                            Salad
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='breadsticks' checked={sides}/>
                            Breadsticks
                        </label>
                        <label>
                            <input name='sides' type='checkbox' value='pasta' checked={sides}/>
                            Pasta
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Drinks</legend>
                        <label>
                            <input name='drinks' type='checkbox' value='brisk' checked={drinks}/>
                            Brisk
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='horchata' checked={drinks}/>
                            Horchata
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='beer' checked={drinks}/>
                            Draft Beer
                        </label>
                        <label>
                            <input name='drinks' type='checkbox' value='wine' checked={drinks}/>
                            Wine
                        </label>
                    </fieldset>
                            <br />
                        <label>Yerrrr?!<br />
                            <select name='yerp' value={yerp}>
                                <option value=''>--select one--</option>
                                <option value='yerp'>YERRRRR!!!</option>
                                <option value='nah'>Nah...</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Special Instructions</legend>
                        <input id='special-text' name='specialInstructions' placeholder='extra sauce, extra napkins, no pickles, etc.'/>
                    </fieldset>
                </fieldset>
                <Link to='/confirmation' id='order-button' className='order-btn' onClick={true ? null : {submit}}>
                    Submit Order
                </Link>
            </form>
        </StyledForm>
    )
}