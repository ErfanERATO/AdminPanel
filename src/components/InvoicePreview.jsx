import React from "react";
// import { FiSend } from "react-icons/fi";
import Logo from "../assets/mohr.png";
import "../style/invoice-preview-style.scss";

const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="invoice-form container">
        <div className="invoice-form-header">

          <div className="address">
            <div className="logo-holder">
              <img src={Logo} className="main-logo" />
              <div className="company-name">AkoTeam</div>
            </div>

            <div className="adress-description">
              <p>Office 149, 450 South Brand Brooklyn</p>
              <p>San Diego County, CA 91905, USA</p>
              <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
            </div>
          </div>

          <div className="invoice-information">
            <h5>Invoice #5036</h5>
            <div>
              <p>
                <span>Date Issued:</span>
                <span> 2023-02-19</span>
              </p>
              <p className="due">
                <span>Due Date:</span>
                <span> 2023-02-25</span>
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="invoice-form-information">information</div>
        <div className="">table</div>
        <div className="invoice-form-resault">resault</div>
        <div className="invoice-form-footer">footer</div>
      </div>
      <div className="invoice-operation container">
        <button className="send">SEND INVOICE</button>
        <button className="download">DOWNLOAD</button>
        <button className="print">PRINT</button>
        <button className="edit">EDIT INVOICE</button>
        <button className="add">ADD PAYMENT</button>
      </div>
    </div>
  );
};

export default InvoicePreview;
