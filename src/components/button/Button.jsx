import React from "react";
import "./Button.css";

const CartIcon = ({ num }) => {

  return (
    <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="btn p-0 " >
      <i className="fa-solid fa-cart-shopping btn position-relative fs-2 p-0 ">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {num}
        </span>
      </i> 
        
    </div>
  );
};

export default CartIcon;
