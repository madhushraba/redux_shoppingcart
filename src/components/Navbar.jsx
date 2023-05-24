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
      <div className="logo">IKart</div>
      <div className="navwrap">
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
        <span>
          <BsFillCartPlusFill />
          {cartitems.length}   {/* cart val:0 */}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

// // import { useSelector } from 'react-redux';

// const Navbar = () => {
//     // const items = useSelector((state) => state.cart);
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//             }}
//         >
//
//                 {/* <span className="cartCount">Cart items: {items.length}</span> */}
//
//         </div>
//     );
// };

// export default Navbar;
