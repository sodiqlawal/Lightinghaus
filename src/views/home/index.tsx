import React from "react";
import NavBar from "../../components/navBar";
import Banner from "./banner";
import ShopBySpace from "./shopBySpace";
import PopularCategories from "./popularCategories";
import PopularProduct from "./popularProduct";
import ProductOnSales from "./productOnSales";
import MailingSection from "./mailingSection";
import Footer from "./footer";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Banner />
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
