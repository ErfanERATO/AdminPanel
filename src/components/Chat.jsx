import React from "react";
import profile from "../assets/avatar-1.129659bb.png";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/chat-style.scss";

const Chat = () => {
  return (
    <div className="background-chat-page">
      <div className="main-chat-form">
        <div className="container row">
          <div className="col-3 col-sm-3 col-md-3">
            <div className="chat-side-bar">
              <div className="container chat-view ">

                <div className="avatar-search ">
                  <div class="avatar-image ">
                    <img src={profile} class="avatar" />
                  </div>

                  <div className="search-icon-holder ">
                    <AiOutlineSearch
                      size="20px"
                      color="#6d7286"
                      className="search-icon"
                    />
                    <input className="search-text" placeholder="Search..." />
                  </div>
                </div>


                <div className="row chat-section-title">
                  <div className="col-md-12">
                     <div className="title-holder">
                        <div className="title">Chats</div>
                     </div>
                  </div>
                </div>


                <div className="row chats">
                  <div className="col-md-12">
                    <div className="">

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-9 col-sm-9 col-md-9">s</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
