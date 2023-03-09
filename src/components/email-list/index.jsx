import React from "react";
import "../email-list/style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { VscRefresh } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImStarEmpty } from "react-icons/im";
import profile from "../../assets/images/avatar-1.129659bb.png";

const EmailList = () => {
  return (
    <div className="email-content">
      <ul className="list-group">
        <li className="list-group-item background">
          <div className="search-icon-holder">
            <AiOutlineSearch size="27px" color="#6d7286" />
            <input className="search-text" placeholder="Search email" />
          </div>
        </li>

        <li className="list-group-item background first-row">
          <div className="first-row-holder">
            <div className="refresh-three-dot">
              <div className="refresh-icon ">
                <VscRefresh
                  size="20px"
                  color="#6d7286"
                  className="main-refresh-icon"
                />
                <BsThreeDotsVertical
                  size="20px"
                  color="#6d7286"
                  className="main-thre-icon"
                />
              </div>
            </div>
          </div>
        </li>

        <li className="list-group-item background">
          <div className="email-row-holder">
            <div className="first-sec">

              <div className="star-holder">
                <div className="main-star-icon">
                  <ImStarEmpty size="23px" color="#6d7286" className="star" />
                </div>
              </div>

              <div class="avatar-image">
                <img src={profile} class="avatar" />
              </div>

              <div className="email-title">
                <div>Charles Cooper Fight account night short.</div>
              </div>
            </div>

            <div className="date-importance">
              <div className="importance-icon">
                <div className="label-importance"></div>
              </div>
              <div className="date">jul22</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EmailList;
