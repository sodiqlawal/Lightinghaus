import React from "react";
import PopularOne from "../../../assets/popularOne.jpg";
import PopularTwo from "../../../assets/popularTwo.jpg";
import PopularThree from "../../../assets/popularThree.png";
import "./index.scss";

interface DataProps {
  id: number;
  img: string;
  text: string;
  amount: string;
}

const ProductOnSales = () => {
  const data: DataProps[] = [
    { id: 1, img: PopularOne, text: "Standing Lamp", amount: "₦45,000" },
    { id: 2, img: PopularTwo, text: "Wooden Chandelier", amount: "₦45,000" },
    { id: 3, img: PopularThree, text: "Pendant Lamp", amount: "₦15,000" },
    { id: 4, img: PopularTwo, text: "Standing Lamp", amount: "₦425,000" },
    { id: 5, img: PopularTwo, text: "Standing Lamp", amount: "₦45,000" },
    { id: 6, img: PopularThree, text: "Standing Lamp", amount: "₦425,000" },
    { id: 7, img: PopularThree, text: "Pendant Lamp", amount: "₦15,000" },
    { id: 8, img: PopularOne, text: "Wooden Chandelier", amount: "₦45,000" },
  ];

  return (
    <div className="product-on_sales">
      <div className="container">
        <div className="title-container">
          <h3>Product On Sales</h3>
          <p className="view-text">View All</p>
        </div>

        <hr />

        <div className="card-container">
          {data.map((dat) => (
            <div className="card" key={dat.id}>
              <img src={dat.img} alt={dat.text} />
              <p className="text">{dat.text}</p>
              <p className="amount">{dat.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOnSales;
