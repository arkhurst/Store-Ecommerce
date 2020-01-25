import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

import logo from '../images/logo-final.png';

class NavBar extends Component {
    render(){
        return(
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              <Link to='/'>
                  <img src={logo} alt="logo" className="navbar-brand img-fluid img-thumbnail"></img>
              </Link>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to='/' className="nav-link">
                      <h4>Products</h4>
                  </Link>
               </li>
             </ul>
             <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                   <span className="mr-2">
                     <i className="fas fa-cart-plus"/>
                   </span>  
                    my cart
                </ButtonContainer>
             </Link>  
           </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
   background: var(--mainGreen);
   .navLink{
       color: var(--mainWhite) !important;
       font-size: 1.3rem;
       text-transform: capitalize !important;
   }
`



export default NavBar;