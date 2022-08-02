import React, { useState, useEffect } from "react";
import './App.css';
import { Link , Switch, Route, useParams} from 'react-router-dom'
import Styled from 'styled-components'
import Home from './homepage';
import Form from './Form';
import Confirmation from './Confirmation';
import axios from 'axios';
import orderSchema from './orderSchema';
import * as yup from 'yup';

const StyledApp = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  // border: solid 1px red;
  height: 100vh;
  margin: 1%;
  // width: 100vw;

  header {
    display: flex;
    flex-flow: column wrap;
    // border: solid 5px red;
    justify-content: center;
    align-items: center;
    padding: 2%;
  }
  .nav-bar {
    display: flex;
    padding: 0;
    width: 100%;
    /* border: solid 2px pink; */
    justify-content: center;
    align-items: center;
  }
  .link {
    padding: 2%;
    margin: 1%;
    text-decoration: none;
    font-size: 1.4rem;
    color: black;
    background-color: #fccf59;
    border-radius: 5px;
  }
  .link:hover {
    transform: scale(1.2);
    transition: ease-in-out .5s;
  }
  .link:not(:hover) {
    transform: scale(1);
    transition: ease-in-out .5s;
  }
  
  footer {
    // border: solid 2px purple;
    font-size: 12px;
  }
`

const initialValues = {
  nameinput: '',
  address: '',
  email: '',
  pizzaStyle: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  cheese: false,
  cheesyMac: false,
  salad: false,
  breadsticks: false,
  pasta: false,
  brisk: false,
  horchata: false,
  beer: false,
  wine: false,
  yerp: '',
  specialInstructions: '',
};

const initialErrors = {
  nameinput: '',
  address: '',
  email: '',
  pizzaStyle: '',
  pizzaSize: '',
  yerp: '',
  specialInstructions: '',
}


const App = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [openOrders, setOpenOrders] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [validate, setValidate] = useState(null);

  useEffect(() => {
    orderSchema.isValid(formValues) 
      .then(valid => {
        setValidate(valid);
      })
  }, [formValues])


  const submit = (e) => {
    // e.preventDefault();
    formSubmit();
  }


  const postOrder = (order) => {
    axios.post('https://reqres.in/api/orders', order)
      .then(res => {
        setOpenOrders(res.data);
      })
      .catch(err => console.log(err))
  }

  const formSubmit = () => {
    const orderInfo = {
      Name: formValues.nameinput,
      Address: formValues.address,
      Email: formValues.email,
      PieType: formValues.pizzaStyle,
      Size: formValues.pizzaSize,
      // 
      Toppings: ['pepperoni', 'sausage', 'mushrooms', 'cheese'].
      filter(topping => `${!!formValues[topping]}, `),
      Sides: ['cheesyMac', 'salad', 'breadsticks', 'pasta'].filter(side => `${!!formValues[side]}, `),
      Drinks: ['brisk', 'horchata', 'beer', 'wine'].filter(drink => `${!!formValues[drink]}, `),
      // 
      Yerr: formValues.yerp,
      Instructions: formValues.specialInstructions
      // OLD
      // Toppings: `Pepperoni: ${formValues.pepperoni}, Sausage: ${formValues.sausage}, Mushrooms: ${formValues.mushrooms}, Cheese: ${formValues.cheese}`,
      // Sides: `CheesyMac: ${formValues.cheesyMac}, Salad: ${formValues.salad}, Breadsticks: ${formValues.breadsticks}, Pasta: ${formValues.pasta}`,
      // Drinks: `Brisk: ${formValues.brisk}, Horchata: ${formValues.horchata}, Beer: ${formValues.beer}, Wine: ${formValues.wine}`,
    }
    postOrder(orderInfo);
    setFormValues(initialValues);
  }

  const validation = (name, value) => {
    yup.reach(orderSchema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const change = (name, value) => {
    validation(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <StyledApp>
      <header>
      <div>
      <h1>J's Pizza Kitchen</h1>
      </div>
      <nav className="nav-bar">
        <Link  id="home" className="link home" to='/'>Home</Link>
        <img className="App-logo" src="https://flyclipart.com/thumb2/september-free-clipart-download-156740.png" alt='pizza-clip-art' />
        <Link id="order-pizza" className="link order" to='/pizza'>Order</Link>
      </nav>
      </header>

      <div className="body">
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/pizza'>
          <Form submit={submit} formValues={formValues} change={change} errors={formErrors} validate={validate}/>
        </Route>
        <Route path='/confirmation'>
          <Confirmation openOrders={openOrders}/>
        </Route>
       </Switch> 
      </div>

      <footer>
      {/* <nav className="nav-bar">
        <Link className="link home" to='/'>Home</Link>
        <Link className="link order" to='/order-pizza'>Order</Link>
      </nav> */}
      <p>Copyright © 2022 JSPizzaKitchen, LLC. All Rights Reserved</p>
      </footer>
    </StyledApp>
  );
};
export default App;
