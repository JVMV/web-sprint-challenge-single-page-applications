import React from 'react';
import Styled from 'styled-components';

const StyledConfirmation = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;

.orderDetails {
    width: 80%;
}

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
    const {openOrders} = props;
    const {address, drinks, email, instructions, name, pieType, sides, size, topping, yerr} = openOrders;
    
    return (
        <StyledConfirmation>
        <h1>We've got your order!</h1>
        <p>Your order has been received and will be made shortly</p>
        <p><em>Did you know that you can recieve 40% off your next order by referring a friend? Click here to learn more</em></p>
        <div className='orderDetails'>
            <div className='customerInfo iso'>
                Name: {name}<br />
                Address: {address}<br />
                Email: {email}<br />
            </div>
            <div className='orderInfo iso'>
                PieType: {pieType}<br />
                Size: {size}<br />
                Toppings: {topping}<br />
                Sides: {sides}<br />
                Drinks: {drinks}<br />
                Yerr: {yerr}
            </div>
            <div className='iso'>
                Instructions: {instructions}
            </div>
        </div>
        </StyledConfirmation>

    )
}