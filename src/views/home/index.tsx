import React from "react";
import NavBar from "../../components/navBar";
import Slider from "./banner/slider";
import ShopBySpace from "./shopBySpace";
import PopularCategories from "./popularCategories";
import PopularProduct from "./popularProduct";
import ProductOnSales from "./productOnSales";
import MailingSection from "./mailingSection";
import Footer from "./footer";
import "./index.scss";

const Home = () => {
  const items = [1, 2, 3];
  return (
    <div className="home">
      <NavBar />
      {/* <Banner /> */}
      <Slider slides={items} autoPlay={items.length - 1} />
      <ShopBySpace />
      <PopularCategories />
      <PopularProduct />
      <ProductOnSales />
      <MailingSection />
      <Footer />
    </div>
  );
};

export default Home;
