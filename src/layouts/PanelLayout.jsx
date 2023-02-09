import React from "react";
import SearcheBar from "../components/SearchBar";


const PanelLayout = ({ children }) => {
  return (
    <div className="App main-app">
      <div className="row row-div">
        <div className="col-2">
          <div className="sidebar-div">{children}</div>
        </div>
        <div className="container col-10 content-col">
          <div className="content-div">
            <SearcheBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
