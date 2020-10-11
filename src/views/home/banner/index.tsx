import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Dots from "./dots";

import "./index.scss";

const Banner = ({ slides, activeIndex }: any) => {
  return (
    <section className="banner">
      {/* <Slider slides={images} /> */}
      <div className="container">
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

        {/* start navaigations */}
        <Dots slides={slides} activeIndex={activeIndex} />
        {/* end navigations */}
      </div>
    </section>
  );
};

export default Banner;
