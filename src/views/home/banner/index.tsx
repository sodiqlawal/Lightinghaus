import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Slider from "react-slick";

import "./index.scss";

const style = {
  width: "30px",
  height: "2px",
  background: "white",
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
    customPaging: (i: any) => (
      <div className="ft-slick__dots--custom">
        <div className="line" style={style}></div>
      </div>
    ),
  };
  return (
    <section className="banner">
      <div className="container">
        <Slider {...settings}>
          <div className="card-container">
            {/* start card */}
            <div className="card">
              <h3>Explore our Showroom</h3>
              <p className="text">
                Not sure of what you’re looking for? No worries, use{" "}
                <span>Lighting Xplorer</span> to see what you can get.
              </p>
              <button>
                Proceed to Lightning Xplorer{" "}
                <span>
                  <CallMadeIcon className="arrow" />
                </span>
              </button>
            </div>
            {/* end card */}
          </div>

          <div className="card-container">
            {/* start card */}
            <div className="card">
              <h3>Explore our Showroom</h3>
              <p className="text">
                Not sure of what you’re looking for? No worries, use{" "}
                <span>Lighting Xplorer</span> to see what you can get.
              </p>
              <button>
                Proceed to Lightning Xplorer{" "}
                <span>
                  <CallMadeIcon className="arrow" />
                </span>
              </button>
            </div>
            {/* end card */}
          </div>

          <div className="card-container">
            {/* start card */}
            <div className="card">
              <h3>Explore our Showroom</h3>
              <p className="text">
                Not sure of what you’re looking for? No worries, use{" "}
                <span>Lighting Xplorer</span> to see what you can get.
              </p>
              <button>
                Proceed to Lightning Xplorer{" "}
                <span>
                  <CallMadeIcon className="arrow" />
                </span>
              </button>
            </div>
            {/* end card */}
          </div>

          <div className="card-container">
            {/* start card */}
            <div className="card">
              <h3>Explore our Showroom</h3>
              <p className="text">
                Not sure of what you’re looking for? No worries, use{" "}
                <span>Lighting Xplorer</span> to see what you can get.
              </p>
              <button>
                Proceed to Lightning Xplorer{" "}
                <span>
                  <CallMadeIcon className="arrow" />
                </span>
              </button>
            </div>
            {/* end card */}
          </div>

          <div className="card-container">
            {/* start card */}
            <div className="card">
              <h3>Explore our Showroom</h3>
              <p className="text">
                Not sure of what you’re looking for? No worries, use{" "}
                <span>Lighting Xplorer</span> to see what you can get.
              </p>
              <button>
                Proceed to Lightning Xplorer{" "}
                <span>
                  <CallMadeIcon className="arrow" />
                </span>
              </button>
            </div>
            {/* end card */}
          </div>
        </Slider>
        {/* <Slider slides={images} /> */}
      </div>
    </section>
  );
};

export default Banner;
