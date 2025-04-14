import React from "react";
import CardList from "./CardList";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const ExplorePage = () => {
  return (
    <>
      <Header />
      <CardList/>
      <Footer />
    </>
  );
};

export default ExplorePage;
