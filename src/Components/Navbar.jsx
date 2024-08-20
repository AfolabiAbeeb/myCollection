import React from "react";

export default function Navbar() {
  const spacing = 10;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
            BEEBAH COLLECTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav mx-auto me-auto my-2 my-lg-0 navbar-nav-scroll "
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item ">
                <a className="nav-link active text-primary" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-primary" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div classNameName="button">
              <a href="http://" className="btn btn-outline-primary">
                <i className="bi bi-box-arrow-in-left me-2"></i>LOGIN
              </a>
              <a href="http://" className="btn btn-outline-primary ms-2">
                <i className="bi bi-box-arrow-in-left me-2"></i>REGISTER
              </a>
              <a href="http://" className="btn btn-outline-primary ms-2">
                <i className="bi bi-cart4 me-2"></i>CART (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
