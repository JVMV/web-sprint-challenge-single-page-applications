import React from "react";
import './App.css';
import { Link , Switch, Route, useParams} from 'react-router-dom'

const App = () => {
  return (
    <>
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

      <body>
       <Switch>
        <Route>

        </Route> 
       </Switch> 
      </body>

      <footer>
      <nav className="nav-bar">
        <Link className="link home" to='/'>Home</Link>
        <Link className="link order" to='/order-pizza'>Order</Link>
      </nav>
      </footer>
    </>
  );
};
export default App;
