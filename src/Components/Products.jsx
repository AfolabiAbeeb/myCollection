import React, { useState, useEffect } from "react";
import { Await } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProduts();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <div className="btn btn-outline-primary me-2">All</div>
          <div className="btn btn-outline-primary me-2">Men's Clothing</div>
          <div className="btn btn-outline-primary me-2">Women's Clothing</div>
          <div className="btn btn-outline-primary me-2">Jewelery</div>
          <div className="btn btn-outline-primary me-2">Electronics</div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-primary">
              LATEST PRODUCTS
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
