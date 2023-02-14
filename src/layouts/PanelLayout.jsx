import React from "react";
import SearcheBar from "../components/SearchBar";
import Analytics from "../router/Analytics";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import EmailPage from "../router/EmailPage";
import ChatPage from "../router/ChatPage";

const PanelLayout = () => {
  return (
    <div className="App main-app">
      <SideBar />
      <div className="content-div">
        <div className="container col-md-12 ">
          <SearcheBar />
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
