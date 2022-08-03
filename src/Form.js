import React, { useState } from 'react';
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
    .errorMessage {
        color: red;
    }
    .btnError{
        background-color: lightGray;
        color: gray;
    }
    .btnError:hover {
        color: white;
        background-color: red;
    }
`


export default function(props) {

    const {submit, formValues, change, errors, validate} = props;
    const {nameinput, address, email, pizzaStyle, pizzaSize, pepperoni, sausage, mushrooms, cheese, cheesyMac, salad, breadsticks, pasta, brisk, horchata, beer, wine , yerp} = formValues;
    
    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const checkedValue = type === 'checkbox' ? checked : value;
        change(name, checkedValue);
        console.log(e.target.name, e.target.value);
    }






    return (
        <StyledForm>
            <h2>Your Order</h2>
            <span className='errorMessage'>{errors.nameinput}</span>
            <span className='errorMessage'>{errors.address}</span>
            <span className='errorMessage'>{errors.email}</span>
            <span className='errorMessage'>{errors.pizzaStyle}</span>
            <span className='errorMessage'>{errors.pizzaSize}</span>
            <form id='pizza-form' className='form-container pizza-form' onSubmit={submit}>
                <fieldset>
                    <legend>Personal Info</legend>
                    <label>Full Name: <br />
                        <input 
                            id='name-input'
                            name='nameinput'
                            type='text'
                            placeholder='enter full name'
                            value={nameinput}
                            onChange={onChange}
                        />
                    </label>
                    <br />
                    <label>Address:<br />
                    <input 
                            name='address'
                            type='text'
                            placeholder='enter address'
                            value={address}
                            onChange={onChange}
                        />
                    </label>
                    <br />
                    <label>Email:<br />
                        <input 
                            name='email'
                            type='email'
                            placeholder='enter email'
                            value={email}
                            onChange={onChange}
                        />
                    </label>
                </fieldset>
                
                <fieldset>
                    <legend>Order</legend>
                    <fieldset>
                        <legend>Pizza</legend>
                        <label>Select Size:<br />
                            <select id='size-dropdown' name='pizzaSize' value={pizzaSize} onChange={onChange}>
                                <option value=''>--select size--</option>
                                <option value='personal'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                            </select>
                        </label><br />
                        <label>Select Pizza:<br />
                        <select name='pizzaStyle' value={pizzaStyle} onChange={onChange}>
                            <option value=''>--select style--</option>
                            <option value='artisan'>ArtisanThin Crust</option>
                            <option value='deepdish'>Deep Dish</option>
                            <option value='original'>Original</option>
                        </select>
                            <br />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Choose Toppings</legend>
                        <label>
                            <input name='pepperoni' type='checkbox' value='pepperoni' checked={pepperoni} onChange={onChange}/>
                            Pepperoni
                        </label>
                        <label>
                            <input name='sausage' type='checkbox' value='sausage' checked={sausage} onChange={onChange}/>
                            Sausage
                        </label>
                        <label>
                            <input name='mushrooms' type='checkbox' value='mushrooms' checked={mushrooms} onChange={onChange}/>
                            Mushrooms
                        </label>
                        <label>
                            <input name='cheese' type='checkbox' value='cheese' checked={cheese} onChange={onChange}/>
                            Cheeese
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Additionals</legend>
                        <fieldset>
                        <legend>Sides</legend>
                        <label>
                            <input name='cheesyMac' type='checkbox' value='cheesyMac' checked={cheesyMac} onChange={onChange}/>
                            Cheesy Mac
                        </label>
                        <label>
                            <input name='salad' type='checkbox' value='salad' checked={salad} onChange={onChange}/>
                            Salad
                        </label>
                        <label>
                            <input name='breadsticks' type='checkbox' value='breadsticks' checked={breadsticks} onChange={onChange}/>
                            Breadsticks
                        </label>
                        <label>
                            <input name='pasta' type='checkbox' value='pasta' checked={pasta} onChange={onChange}/>
                            Pasta
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Drinks</legend>
                        <label>
                            <input name='brisk' type='checkbox' value='brisk' checked={brisk} onChange={onChange}/>
                            Brisk
                        </label>
                        <label>
                            <input name='horchata' type='checkbox' value='horchata' checked={horchata} onChange={onChange}/>
                            Horchata
                        </label>
                        <label>
                            <input name='beer' type='checkbox' value='beer' checked={beer} onChange={onChange}/>
                            Draft Beer
                        </label>
                        <label>
                            <input name='wine' type='checkbox' value='wine' checked={wine} onChange={onChange}/>
                            Wine
                        </label>
                    </fieldset>
                            <br />
                        <label>Yerrrr?!<br />
                            <select name='yerp' value={yerp} onChange={onChange}>
                                <option value=''>--select one--</option>
                                <option value='yerp'>YERRRRR!!!</option>
                                <option value='nah'>Nah...</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Special Instructions</legend>
                        <input id='special-text' name='specialInstructions' onChange={onChange} placeholder='extra sauce, extra napkins, no pickles, etc.'/>
                    </fieldset>
                </fieldset>
                {validate 
                ? 
                // <Link to='/confirmation' id='order-button' className='order-btn' onClick={submit}>Submit Order</Link>
                <button id='order-button' className='order-btn' >Submit Order</button>
                :
                <span name='deactBtn' className='order-btn btnError'>Submit Order</span>
                }
            </form>
        </StyledForm>
    )
}