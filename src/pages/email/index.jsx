import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { BsStar } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { VscRefresh } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImStarEmpty } from "react-icons/im";
import profile from "../../assets/images/avatar-1.129659bb.png";
import "../../assets/styles/email-page-style.scss";

const EmailForms = () => {
  return (
    <div className="background-email-form">
      <div className="main-email-form">
        <div className="email-side-bar">
          <div className="container sidebar-holder">
            <div className="compose-button">
              <button className="main-compose-button">COMPOSE</button>
            </div>

            <div className="inbox-button">
              <div className="inbox-icon">
                <AiOutlineMail size="20px" color="#c9cdd9" />
              </div>
              <div className="inbox-text">Inbox</div>
            </div>

            <div className="sent-button">
              <div className="sent-icon">
                <TbSend size="20px" color="#c9cdd9" />
              </div>
              <div className="sent-text">Sent</div>
            </div>

            <div className="draft-button">
              <div className="draft-icon">
                <TbPencil size="20px" color="#c9cdd9" />
              </div>
              <div className="draft-text">Draft</div>
            </div>

            <div className="starred-button">
              <div className="starred-icon">
                <BsStar size="20px" color="#c9cdd9" />
              </div>
              <div className="starred-text">Starred</div>
            </div>

            <div className="spam-button">
              <div className="spam-icon">
                <RiErrorWarningLine size="20px" color="#c9cdd9" />
              </div>
              <div className="spam-text">Spam</div>
            </div>

            <div className="trash-button">
              <div className="trash-icon">
                <HiOutlineTrash size="20px" color="#c9cdd9" />
              </div>
              <div className="trash-text">Trash</div>
            </div>

            <div className="labels">LABELS</div>

            <div className="personal-label">
              <div className="personal-icon">
                <div className="label-personal"></div>
              </div>
              <div className="label-text">Personal</div>
            </div>

            <div className="company-label">
              <div className="company-icon">
                <div className="label-company"></div>
              </div>
              <div className="label-text">Company</div>
            </div>

            <div className="important-label">
              <div className="important-icon">
                <div className="label-important"></div>
              </div>
              <div className="label-text">Important</div>
            </div>

            <div className="private-label">
              <div className="private-icon">
                <div className="label-private"></div>
              </div>
              <div className="label-text">Private</div>
            </div>
          </div>
        </div>

        <div className="email-content">
          <div className="search-icon-holder">
            <AiOutlineSearch size="27px" color="#6d7286" />
            <input className="search-text" placeholder="Search email" />
          </div>

          <div className="first-row-holder">
            <div className="check-box">
              <div className="main-check-box"></div>
            </div>

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

          <div className="email-row-holder">
            <div className="check-box">
              <div className="main-check-box"></div>
            </div>

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

            <div className="date-importance">
              <div className="importance-icon">
                <div className="label-importance"></div>
              </div>
              <div className="date">jul22</div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EmailForms;
