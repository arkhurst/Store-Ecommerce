import React from 'react';
import {Link} from 'react-router-dom';

const CartTotals = ({value}) => {
    const {cartTax, cartTotal, cartSubtotal,clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                              onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal: </span> <strong>GHS {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax: </span> <strong>GHS {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total: </span> <strong>GHS {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartTotals;