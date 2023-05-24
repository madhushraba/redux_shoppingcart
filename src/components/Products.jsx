import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartslice";

const Products = () => {
  const dispatc = useDispatch();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/" //category/jewelery
      );
      const data = await res.json();

      //   console.log(data);
      setproducts(data.slice(1));
    };

    fetchproducts();
  }, []);

  const addprod = (prodx) => {
    dispatc(add(prodx));
  };

  return (
    <div className="cardwrap">
   
      {products.map((pro) => (
        <div className="card" key={pro.id}>
          <img src={pro.image} alt="" />
          <h4>{pro.title.substring(0,32)}</h4>
          <h5>${pro.price}</h5>
          <button onClick={() => addprod(pro)}>cart+</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
