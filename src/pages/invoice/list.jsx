import React from "react";
import "../invoice/invoice-list.scss";
import Table from "../../components/Table";

const InvoiceList = () => {
  return (
    <div className="invoice-page">

      <div className="table-header">

        <div className="operation-header">
          
          <div className="col-sm-6">
            <select className="form-select show-select" id="specificSizeSelect">
              <option selected>Show</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

            <button type="button" className="btn btn-primary btn-lg col-sm-6">
              Create Invoice
            </button>

        </div>

        <div className="filter-header">
          <form className="row gx-3 gy-2 align-items-center">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control search-invoice"
                id="specificSizeInputName"
                placeholder="Search Invoice"
              />
            </div>

            <div className="col-sm-6">
              <select
                className="form-select status-select"
                id="specificSizeSelect"
              >
                <option selected>Select Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default InvoiceList;
