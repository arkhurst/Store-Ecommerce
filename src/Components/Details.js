import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render(){
        return (
           <ProductConsumer>
               {(value) => {
                   const {id, company, img, info, title, price,inCart} = value.detailProducts;
                   return(
                       <div className="container py-5">
                            {/*-- Start of title template --*/}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                  <h1>{title}</h1>
                               </div>
                           </div>
                           {/*-- End of title --*/}
                            {/*-- Start of product info --*/}
                           <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                  <img  src={img} className="img-fluid" alt="image"/>
                              </div>
                              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h3> model: {title}</h3>
                                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> 
                                    made by:
                                    <span className="text-uppercase"> 
                                    {company}
                                    </span>
                                 </h4>
                                 <h4 className="text-green">
                                     <strong>
                                         Price : <span>GHS</span> {price}
                                     </strong>
                                 </h4>
                                 <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                     relevant info about product
                                 </p>
                                 <p className="text-muted lead"> {info}</p>
                                  {/*-- Start of Buttons --*/}
                                 <div>
                                     <Link to='/'>
                                       <ButtonContainer>
                                             back to products
                                       </ButtonContainer>
                                     </Link>
                                     <ButtonContainer 
                                        cart
                                        disable={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                     >
                                         {inCart ? 'in cart' : 'add to cart'}
                                     </ButtonContainer>
                                 </div>
                              </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}

export default Details;