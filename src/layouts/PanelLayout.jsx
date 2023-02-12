import React from "react";
import SearcheBar from "../components/SearchBar";
import Analytics from "../router/Analytics";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import EmailPage from "../router/EmailPage";


const PanelLayout = () => {
  return (
    <div className="App main-app">
      <div className="row row-div">
        <div className="col-2 col-sm-2 col-md-2">
          <div className="sidebar-div">
            <SideBar />
          </div>
        </div>


        <div className="container col-10 col-sm-10 col-md-10 content-col">
          <div className="content-div">
            <SearcheBar />
            <Routes>
              <Route path="/" element={<Analytics />} />
              <Route path="/email" element={<EmailPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
