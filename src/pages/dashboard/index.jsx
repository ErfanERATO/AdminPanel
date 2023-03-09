import React from "react";
import SliderCard from "../../components/slider-card";
import SaleOverView from "../../components/sales-overview";

const Dashboard = () => {
  return (
    <div className="web-analytic">
      <div className="row web-analytic-main-row">
        <div className="col-md-6">
          <SliderCard />
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <SaleOverView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
