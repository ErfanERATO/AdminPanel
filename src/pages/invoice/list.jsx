import React from "react";
import "../../assets/styles/invoice-list.scss";
import Table from "../../components/Table";

const InvoiceList = () => {
  return (
    <div className="invoice-page">
      {/* <div className="container table-header">
        <div className="operation-header">
          <div className="limit-table">
            <label>Show :</label>
            <select>
              {Array(10)
                .fill(1)
                .map((i, _d) => {
                  return _d + 10;
                })
                .map((number) => {
                  return <option key={number}>{number}</option>;
                })}
            </select>
          </div>
          <div className="new-table">
            <button>
              <span>
                <AiOutlinePlus color="white" />
              </span>
              <span>CREATE INVOICE</span>
            </button>
          </div>
        </div>
        <div className="filter-header">
          <div className="search-table">
            <input placeholder="Search Invoice" />
          </div>
        </div>

      </div> */}

      {/* <div className="table-invoice">
        <div className="table-information">
          <div className="first-section">
            <div className="id-info">#id</div>
            <div>CLIENT</div>
          </div>

          <div className="second-section">
            <div>TOTAL</div>
            <div>ISSUED DATE</div>
            <div className="balance-info">BALANCE</div>
            <div>ACTIONS</div>
          </div>
          
        </div>

        <div className="table-user-invoice">

          <div className="sec-one">
            
            <div className="invoice-id" tooltip="this is tooltip">#5036</div>

            <div className="invoice-user">
              <div className="invoice-user-avatar">
                <div className="content-avatar">
                  <div class="avatar-image">
                    <img src={profile2} class="avatar"/>
                  </div>
                </div>
              </div>

              <div className="invoice-user-info">
                <div className="invoice-user-name"> Erfan Gharche</div>

                <div className="invoice-user-email">
                  erfan.erato.79@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="sec-two">
            <div className="invoice-total">$3171</div>

            <div className="invoice-date">2023-02-19</div>

            <div className="invoice-balance">-$205</div>

            <div className="invoice-actions">
              <div>
                <AiOutlineMail size="25px" color="#c9cdd9" />
              </div>
              <div>
                <AiOutlineEye size="25px" color="#c9cdd9" />
              </div>
              <div>
                <FiMoreVertical size="25px" color="#c9cdd9" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
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

          <div>
            <button type="button" className="btn btn-primary btn-lg col-sm-6">
              Create Invoice
            </button>
          </div>
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
