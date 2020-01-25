import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//All Components
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';

import './App.css';

function App() {
  return (
      <React.Fragment>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={ProductList}/>
            <Route path='/details' exact component={Details}/>
            <Route path='/cart'exact component={Cart}/>
            <Route component={Default}/>
          </Switch>
          <Modal/>
      </React.Fragment>
  );
}

export default App;
