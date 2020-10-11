import React, { useState } from "react";
import Card from "./card";
import data from "./data";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import CallMadeIcon from "@material-ui/icons/CallMade";
import "./index.scss";

const Popularcategory = () => {
  const [state, setState] = useState({
    properties: data.properties,
    property: data.properties[0],
  });

  const nextProperty = () => {
    const newIndex = state.property.index + 1;
    setState({
      ...state,
      property:
        state.property.index === data.properties.length - 1
          ? data.properties[0]
          : data.properties[newIndex],
    });
  };


  const prevProperty = () => {
    const newIndex = state.property.index - 1;
    setState({
      ...state,
      property:
        state.property.index === 0
          ? data.properties[data.properties.length - 1]
          : data.properties[newIndex],
    });
  };

  const { properties, property } = state;
  return (
    <div className="category-slider">
      <div className="container">
        <div className="title-container">
          <h3>Popular Categories</h3>
          <p className="view-text">View All</p>
        </div>
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${
                    property.index * (100 / properties.length)
                  }%)`,
                }}
              >
                {properties.map((property) => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="navigation">
          <CallReceivedIcon
            onClick={() => prevProperty()}
            className={`arrow ${property.index === 0 ? "disable" : ""}`}
          />

          <CallMadeIcon
            onClick={() => nextProperty()}
            className={`arrow ${data.properties.length - 1 ? "disable" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Popularcategory;
