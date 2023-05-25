import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

import "./nav.css";
import { useSelector } from "react-redux";
const Navbar = () => {
const cartitems=useSelector((state)=>state.cart)
console.log(cartitems);


  return (
    <div className="nav">
//       <div className="logo">iStore</div>
      <div className="navwrap">
        <Link to="/">iStore</Link>
        <Link to="/cart">
          {/* CART */}
        <span>
          <BsFillCartPlusFill />
          {cartitems.length}   {/* cart val:0 */}
        </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

