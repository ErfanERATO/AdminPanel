import React, { Children } from "react";
import SearcheBar from "../components/searchbar";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/sidebar";
import "../assets/styles/responsive/responsive.scss";
// import Items from "../pages/Items";

const PanelLayout = ({ children }) => {
  return (
    <div className="App main-app">
      <SideBar />
      <div className="content-div">
        <div className="container col-md-12 ">
          <SearcheBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
