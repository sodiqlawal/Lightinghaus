import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Card = ({ property }: any) => {
  const { index, picture, category } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={category} />
      <p className="overlay-text">{category}</p>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
