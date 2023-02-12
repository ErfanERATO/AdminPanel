import React from "react";
import Logo from "../assets/mohr.png";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineChat } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="logo-holder">
            <img src={Logo} className="main-logo" />
            <div className="company-name">AkoTeam</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="dashboard-button">
            <div className="dashboard-icon">
              <TbSmartHome size="20px" color="#c9cdd9" />
            </div>
            <div className="dashboard-text">Dashboards</div>
            <div className="dashboard-arrow"> {">"} </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="app-pages">APPS & PAGES</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="email-button">
            <div className="email-icon">
              <AiOutlineMail size="20px" color="#c9cdd9" />
            </div>
            <div className="email-text">Email</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="chat-button">
            <div className="chat-icon">
              <MdOutlineChat size="20px" color="#c9cdd9" />
            </div>
            <div className="chat-text">Chat</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="calender-button">
            <div className="calender-icon">
              <SlCalender size="20px" color="#c9cdd9" />
            </div>
            <div className="calender-text">Calender</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="invoice-button">
            <div className="invoice-icon">
              <AiOutlineFile size="20px" color="#c9cdd9" />
            </div>
            <div className="invoice-text">Invoice</div>
            <div className="invoice-arrow"> {">"} </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="user-button">
            <div className="user-icon">
              <AiOutlineUser size="20px" color="#c9cdd9" />
            </div>
            <div className="user-text">User</div>
            <div className="user-arrow"> {">"} </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="pages-button">
            <div className="pages-icon">
              <AiOutlineFile size="20px" color="#c9cdd9" />
            </div>
            <div className="pages-text">Pages</div>
            <div className="pages-arrow"> {">"} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;