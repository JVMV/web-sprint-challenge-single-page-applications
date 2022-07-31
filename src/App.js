import React from "react";
import './App.css';
import { Link , Switch, Route, useParams} from 'react-router-dom'
import Styled from 'styled-components'
import Home from './homepage';
import Form from './Form';

const StyledApp = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  // border: solid 2px red;
  height: 100vh;

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
    width: 100vw;
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
  }
`

const App = () => {
  return (
    <StyledApp>
      <header>
      <div>
      <h1>Lambda Eats</h1>
      </div>
      <nav className="nav-bar">
        <Link className="link home" to='/'>Home</Link>
        <img className="App-logo" src="https://flyclipart.com/thumb2/september-free-clipart-download-156740.png" alt='pizza-clip-art' />
        <Link className="link order" to='/order-pizza'>Order</Link>
      </nav>
      </header>

      <div className="body">
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/order-pizza'>
          <Form />
        </Route>
       </Switch> 
      </div>

      <footer>
      <nav className="nav-bar">
        <Link className="link home" to='/'>Home</Link>
        <Link className="link order" to='/order-pizza'>Order</Link>
      </nav>
      </footer>
    </StyledApp>
  );
};
export default App;
