import React from "react";
import SpaceOne from "../../../assets/spaceOne.jpg";
import SpaceTwo from "../../../assets/spaceTwo.jpg";
import SpaceThree from "../../../assets/spaceThree.jpg";
import "./index.scss";

interface DataProps {
  id: number;
  img: string;
  text: string;
}

const ShopBySpace = () => {
  const data: DataProps[] = [
    { id: 1, img: SpaceOne, text: "HOME" },
    { id: 2, img: SpaceTwo, text: "OFFICE" },
    { id: 3, img: SpaceThree, text: "HOTEL" },
  ];

  return (
    <div className="shop-by-space">
      <div className="container">
        <div className="title-container">
          <h3>Shop By Space</h3>
          <p className="view-text">View All</p>
        </div>

        <p className="select-text">
          Select the type of apartment you want to light up.
        </p>

        <div className="card-container">
          {data.map((dat) => (
            <div className="card" key={dat.id}>
              <img src={dat.img} alt={dat.text} />
              <p className="overlay-text">{dat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBySpace;
