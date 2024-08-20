import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div classNameName="hero">
      {/* <div className="card text-bg-dark border-0">
        <img
          src="/Assets/caro2.jpg"
          classNameName="card-img"
          alt="Background"
          height="700px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div classNameName="container">
            <h5 className="card-title display-3 fw-bolder mb-0" >NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div> */}
      <Products/>
    </div>
  );
};

export default Home;
