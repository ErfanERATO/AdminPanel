import React from "react";
import { FiSend } from "react-icons/fi";
import "../style/invoice-preview-style.scss";

const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="invoice-form container">
        <div className="invoice-form-header">header</div>
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
