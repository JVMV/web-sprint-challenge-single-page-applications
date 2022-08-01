import React from 'react';
import Styled from 'styled-components';







const StyledConfirmation = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;

.iso {
    margin: 5% 0;
    border: solid 2px black;
    line-height: 2;
    padding: 2%
}
h1, p {
    width: 100%;
    text-align: center;

}
`

export default function(props) {

    const { nameinput, address, email, 
            pizzaStyle, pizzaSize, pepperoni, 
            sausage, mushrooms, cheese, cheesyMac, 
            salad, breadsticks, pasta, brisk, horchata, 
            beer, wine, yerp, specialInstructions} = props
    
    
    
    
    


    return (
        <StyledConfirmation>
        <h1>We've got your order!</h1>
        <p>Your order has been received and will be made shortly</p>
        <p><em>Did you know that you can recieve 40% off your next order by referring a friend? Click here to learn more</em></p>
        <div className='orderDetails'>
            <div className='customerInfo iso'>
                Name: {nameinput}<br />
                Address: {address}<br />
                Email: {email}<br />
            </div>
            <div className='orderInfo iso'>
                PieType: {pizzaStyle}<br />
                Size: {pizzaSize}<br />
                Toppings: {`Pepperoni: ${pepperoni}, Sausage: ${sausage}, Mushrooms: ${mushrooms}, Cheese: ${cheese}`}<br />
                Sides: {`CheesyMac: ${cheesyMac}, Salad: ${salad}, Breadsticks: ${breadsticks}, Pasta: ${pasta}`}<br />
                Drinks: {`Brisk: ${brisk}, Horchata: ${horchata}, Beer: ${beer}, Wine: ${wine}`}<br />
                Yerr: {yerp}
            </div>
            <div className='iso'>
                Instructions: {specialInstructions}
            </div>
        </div>
        </StyledConfirmation>

    )
}