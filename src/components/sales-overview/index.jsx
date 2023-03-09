import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import { BsLink45Deg } from "react-icons/bs";
import ProgressBar from "../../components/progress";
import "../sales-overview/style.scss";

const SaleOverView = () => {
  return (
    <div className="first-card-side-slider">
      <div className="container first-card-container">
        <div className="first-card-line">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="first-section-of-line-one">Sales Overview</div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="second-section-of-line-one">+18.2%</div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12">
            <div className="card-price">$42.5k</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-md-5 order-section">
            <div className="order-icon">
              <div className="shopping-icon">
                <TbShoppingCart
                  className="main-shopping-icon"
                  size="20px"
                  color="#03b4bc"
                />
              </div>
              <div className="order-text">Order</div>
            </div>
            <div className="number-1">62.2%</div>
            <div className="number-2">6,440</div>
          </div>

          <div className="col-2 col-md-2">
            <div className="vs-holder">
              <div className="vs-betwwen">Vs</div>
            </div>
          </div>

          <div className="col-sm-5 col-md-5 visit-section">
            <div className="visit-icon">
              <div className="visit-text">Visits</div>
              <div className="link-icon">
                <BsLink45Deg
                  className="main-shopping-icon"
                  size="20px"
                  color="#685fca"
                />
              </div>
            </div>
            <div className="number-3">25.5%</div>
            <div className="number-4">12,749</div>
          </div>
        </div>

        <div className="progrss-bar-div">
          <ProgressBar done="70" />
        </div>
      </div>
    </div>
  );
};

export default SaleOverView;
