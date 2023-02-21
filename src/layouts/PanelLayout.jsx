import React from "react";
import SearcheBar from "../components/SearchBar";
import Analytics from "../router/Analytics";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import EmailPage from "../router/EmailPage";
import ChatPage from "../router/ChatPage";
import InvoiceListPage from "../router/InvoiceListPage";
import InvoicePreviewPage from "../router/InvoicePreviewPage";
import "../style/responsive/responsive.scss";
// import Items from "../pages/Items";

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
            <Route path="/invoiceList" element={<InvoiceListPage />} />
            <Route path="/invoicePreview" element={<InvoicePreviewPage />} />
            {/* <Route path="/items" element={<Items />} /> */}
          </Routes>

        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
