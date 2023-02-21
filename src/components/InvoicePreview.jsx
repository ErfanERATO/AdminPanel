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

        <hr />

        <div className="invoice-form-information">
          <div className="invoice-to">
            <h6>Invoice To:</h6>
            <div>
              <p>Andrew Burns</p>
              <p>Richardson and Sons LLC</p>
              <p>78083 Laura Pines, Bhutan</p>
              <p>(687) 660-2473</p>
              <p>pwillis@cross.org</p>
            </div>
          </div>

          <div className="bill-to">
            <h6>Bill To:</h6>
            <table>
              <tr>
                <td className="title-table">Total Due: </td>
                <td>$12,110.55</td>
              </tr>
              <tr>
                <td>Bank Name: </td>
                <td>American Bank</td>
              </tr>
              <tr>
                <td>Country: </td>
                <td>$12,110.55</td>
              </tr>
              <tr>
                <td>IBAN: </td>
                <td>ETD95476213874685</td>
              </tr>
              <tr>
                <td>SWIFT Code: </td>
                <td>BR91905</td>
              </tr>
            </table>
          </div>
        </div>

        <hr />

        <div className="invoice-form-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ITEM</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">HOURS</th>
                <th scope="col">QTY</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Premium Branding Package</th>
                <td>Branding & Promotion</td>
                <td>15</td>
                <td>1</td>
                <td>$32</td>
              </tr>
              <tr>
                <th scope="row">SMM </th>
                <td>Social media templates</td>
                <td>14</td>
                <td>1</td>
                <td>$28</td>
              </tr>
              <tr>
                <th scope="row">Web Design</th>
                <td>Web designing package </td>
                <td>12</td>
                <td>1</td>
                <td>$24</td>
              </tr>
              <tr>
                <th scope="row">SEO</th>
                <td>Search engine optimization</td>
                <td>5</td>
                <td>1</td>
                <td>$22</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <div className="invoice-form-information">
          <div className="invoice-to">
            <div>
              <p>Salesperson: Jenny Parker</p>
              <p>Thanks for your business</p>
            </div>
          </div>

          <div className="resualt">
            <table>
              <tr>
                <td className="resualt-table">Subtotal: </td>
                <td>$154.25</td>
              </tr>
              <tr>
                <td>Discount: </td>
                <td>$00.00</td>
              </tr>
              <tr>
                <td>Tax: </td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>Total: </td>
                <td>$204.25</td>
              </tr>
            </table>
          </div>
        </div>

        <hr />
        <div className="invoice-form-footer">
          <div>
            Note: <br />
            It was a pleasure working with you and your team. We hope you will
            keep us in mind for future freelance projects.
            <br /> Thank You!
          </div>
        </div>
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
