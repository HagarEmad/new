import React from "react";
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <div className="container my-5">
      <div id="blogCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#blogCarousel" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="../../assets/images/imagevector.png"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="../../assets/images/imagevector.png"
                    alt="Image 2"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="../../assets/images/imagevector.png"
                    alt="Image 3"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="../../assets/images/imagevector.png"
                    alt="Image 4"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="../../assets/images/imagevector.png"
                    alt="Image 5"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="https://via.placeholder.com/250"
                    alt="Image 6"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="https://via.placeholder.com/250"
                    alt="Image 7"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img
                    src="https://via.placeholder.com/250"
                    alt="Image 8"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#blogCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#blogCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselComponent;
