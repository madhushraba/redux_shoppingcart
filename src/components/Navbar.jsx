import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

import "./nav.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="navwrap">
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
        <span>
          <BsFillCartPlusFill />0
          {/* cart val:0 */}
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
