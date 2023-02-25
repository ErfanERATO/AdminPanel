import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import { BsLink45Deg } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import ProgressBar from "../../components/progress";
import Object from "../../assets/images/sidebar-pic-1.png";

const Dashboard = () => {
  return (
    <div className="web-analytic">
      <div className="row web-analytic-main-row">
        <div className="col-md-6">
          <div className="slider-div-holder">
            <div className="row">
              <div className="col-8 text-side-object-col-holder">
                <div className="text-side-object">
                  <div className="main-text-holder-side-object">
                    <div className="Analytics-text">Website Analytics</div>
                    <div className="Total-text">
                      Total 28.5% Conversion Rate
                    </div>
                    <div className="Revenue-text">Revenue Sources</div>

                    <div className="row-down-slider">
                      <div className="row">
                        <div className="col-3">
                          <div className="first-section">
                            <div className="h">55%</div>
                            <div>Sessions</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="first-section2">
                            <div className="h">12h</div>
                            <div>Order</div>
                          </div>
                        </div>
                      </div>
                      <div className="row second-row">
                        <div className="col-3">
                          <div className="first-section3">
                            <div className="h">145k</div>
                            <div>Leads</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="first-section4">
                            <div className="h">240</div>
                            <div>Campaign</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-side-object">
                  <div className="object-image">
                    <img src={Object} className="main-object-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="first-card-side-slider">
                <div className="container first-card-container">
                  <div className="first-card-line">
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="first-section-of-line-one">
                          Sales Overview
                        </div>
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
            </div>

            <div className="col-md-6">
              <div className="second-main-card-side-slider">
                <div className="container second-card-side-slider">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pay-icon-holder">
                        <div className="pay-icon">
                          <MdOutlinePayment
                            size="25px"
                            color="#2db573"
                            className="main-pay-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-12 col-md-12">
                      <div className="mount-view">97.5K</div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-sm-12 col-md-12">
                      <div className="Revenue-text">Revenue Generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
