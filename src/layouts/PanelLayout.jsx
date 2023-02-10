import React from "react";
import Object from "../assets/sidebar-pic-1.png";
import SearcheBar from "../components/SearchBar";
import { TbShoppingCart } from "react-icons/tb";

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

            <div className="web-analytic">
              <div className="row web-analytic-main-row">
                <div className="col">
                  <div className="slider-div-holder">
                    <div className="row">
                      <div className="col text-side-object-col-holder">
                        <div className="text-side-object">
                          <div className="main-text-holder-side-object">
                            <div className="Analytics-text">
                              Website Analytics
                            </div>
                            <div className="Total-text">
                              Total 28.5% Conversion Rate
                            </div>
                            <div className="Revenue-text">Revenue Sources</div>

                            <div className="row-down-slider">
                              <div className="row">
                                <div className="col">
                                  <div className="first-section">
                                    <div className="h">55%</div>
                                    <div>Sessions</div>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="first-section">
                                    <div className="h">12h</div>
                                    <div>Order Size</div>
                                  </div>
                                </div>
                              </div>
                              <div className="row second-row">
                                <div className="col">
                                  <div className="first-section">
                                    <div className="h">145k</div>
                                    <div>Leads</div>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="first-section">
                                    <div className="h">240</div>
                                    <div>Campaign</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col text-side-object">
                        <div className="object-image">
                          <img src={Object} className="main-object-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="first-card-side-slider">
                        <div className="container first-card-container">
                          <div className="first-card-line row">
                            <div className="col first-section-of-line-one">
                              Sales Overview
                            </div>
                            <div className="col second-section-of-line-one">
                              +18.2%
                            </div>
                          </div>
                          <div className="row card-price">$42.5k</div>
                          <div className="row">
                            <div className="col-5 order-section">
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

                            <div className="col-2 vs-betwwen">Vs</div>

                            <div className="col-5 visit-section">
                              <div className="visit-icon">
                                <div className="visit-text">Visits</div>
                                <div className="link-icon">
                                  <TbShoppingCart
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
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="second-card-side-slider">x2</div>
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

export default PanelLayout;
