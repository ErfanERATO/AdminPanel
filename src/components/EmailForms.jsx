import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { BsStar } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import "../style/email-page-style.scss";

const EmailForms = () => {
  return (
    <div className="background-email-form">
      <div className="main-email-form">
        <div className="row">
          <div className="col-sm-3 col-md-3 border-between">
            <div className="email-side-bar">
              <div className="container sidebar-holder">
                <div className="compose-button">
                  <button className="main-compose-button">COMPOSE</button>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="inbox-button">
                      <div className="inbox-icon">
                        <AiOutlineMail size="20px" color="#c9cdd9" />
                      </div>
                      <div className="inbox-text">Inbox</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="sent-button">
                      <div className="sent-icon">
                        <TbSend size="20px" color="#c9cdd9" />
                      </div>
                      <div className="sent-text">Sent</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="draft-button">
                      <div className="draft-icon">
                        <TbPencil size="20px" color="#c9cdd9" />
                      </div>
                      <div className="draft-text">Draft</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="starred-button">
                      <div className="starred-icon">
                        <BsStar size="20px" color="#c9cdd9" />
                      </div>
                      <div className="starred-text">Starred</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="spam-button">
                      <div className="spam-icon">
                        <RiErrorWarningLine size="20px" color="#c9cdd9" />
                      </div>
                      <div className="spam-text">Spam</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="trash-button">
                      <div className="trash-icon">
                        <HiOutlineTrash size="20px" color="#c9cdd9" />
                      </div>
                      <div className="trash-text">Trash</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="labels">LABELS</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="personal-label">
                      <div className="personal-icon">
                        <div className="label-personal"></div>
                      </div>
                      <div className="label-text">Personal</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="company-label">
                      <div className="company-icon">
                        <div className="label-company"></div>
                      </div>
                      <div className="label-text">Company</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="important-label">
                      <div className="important-icon">
                        <div className="label-important"></div>
                      </div>
                      <div className="label-text">Important</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="private-label">
                      <div className="private-icon">
                        <div className="label-private"></div>
                      </div>
                      <div className="label-text">Private</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-9 col-md-9">
            <div className="email-content">
              <div>asdasdasdasd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForms;
