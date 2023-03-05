import React from "react";
import ProductList from "../components/MensList";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <div>{/* <Navbar/> */}</div>
      <div>
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
