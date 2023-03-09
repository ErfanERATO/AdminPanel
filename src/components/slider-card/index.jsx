import React from "react";
import Object from "../../assets/images/sidebar-pic-1.png";
import "../slider-card/style.scss";

const SliderCard = () => {
  return (
    <div className="slider-div-holder">
      <div className="row">
        <div className="col-8 text-side-object-col-holder">
          <div className="text-side-object">
            <div className="main-text-holder-side-object">
              <div className="Analytics-text">Website Analytics</div>
              <div className="Total-text">Total 28.5% Conversion Rate</div>
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
  );
};

export default SliderCard;
