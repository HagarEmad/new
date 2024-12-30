
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function ArabicNavbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  navbar-custom sticky-top"
      style={{
        // width: "100vw",
        zIndex: 9,
      }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex" id="navbarExample01">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 w-25 d-flex align-items-center p-3">
            <img
              src="/images/photo_6008331511490790566_x.jpg"
              alt="An abstract design"
              style={{ width: "20%" }}
            />
            <h2 className="ms-2 logeen">LOGEEN</h2>
          </div>
          {screenWidth <= 992 ? (
            <>
              <svg
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                id="hamburger"
                class="Header__toggle-svg  d-flex align-items-center"
                viewbox="0 0 60 40"
              >
                <g
                  stroke="#fff"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path id="top-line" d="M10,10 L50,10 Z"></path>
                  <path id="middle-line" d="M10,20 L50,20 Z"></path>
                  <path id="bottom-line" d="M10,30 L50,30 Z"></path>
                </g>
              </svg>
              <button className="btn third mt-3">Contact Us</button>{" "}
              {/* Add Contact Us button */}
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Navigation Menu
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Web Designing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Mobile Apps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Digital Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Desktop Apps
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-between w-75">
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center items gap-4">
                <li className="nav-item active">
                  <a className="nav-link home" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Web Designing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mobile Apps
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Digital Marketing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Desktop Apps
                  </a>
                </li>
              </ul>
              <button className="btn third">Contact Us</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default ArabicNavbar;
