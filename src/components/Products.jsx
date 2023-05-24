import React, { useEffect, useState } from "react";

const Products = () => {
  // useState useEffect
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/" //category/jewelery
      );
      const data = await res.json()

    //   console.log(data);
      setproducts(data.slice(1));
    };

    fetchproducts();
  }, []);

  return (
    <div className="cardwrap">
      {/* <h1>productlist</h1> */}
      {products.map((pro) => (
        <div className="card">
          <img src={pro.image} alt="" />
          <h4>{pro.title}</h4>
          <h5>${pro.price}</h5>
          <button>cart+</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
