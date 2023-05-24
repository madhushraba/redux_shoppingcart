import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import { del } from "../store/cartslice";


const Cart = () => {
  const productz = useSelector((state) => state.cart);
  const dispx=useDispatch()

  const delprod=(productdel)=>{
    dispx(del(productdel))
  }

  return (
    <div>
      <h3>Cart</h3>
            <div className="cartwrapp">
                {productz.map((product) => (
                    <div key={product.id} className="cartcard">
                        <img src={product.image} alt="" />
                        <h5>{product.title.substring(0,25)}</h5>
                        <h5>${product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => delprod(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Cart;
