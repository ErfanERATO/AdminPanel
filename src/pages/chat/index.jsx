import React from "react";
import profile from "../../assets/images/avatar-1.129659bb.png";
import profile1 from "../../assets/images/avatar-2.11d6be6e.png";
import profile2 from "../../assets/images/avatar-3.47317f35.png";
import profile3 from "../../assets/images/avatar-4.b0163f21.png";
import { AiOutlineSearch } from "react-icons/ai";
import "../chat/chat-style.scss";

const Chat = () => {
  return (
    <div className="background-chat-page">
      <div className="main-chat-page">
        <div className="chat-side-bar">
          <div className="container sidebar-holder">
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

            <div className="chats-section-title">
              <div>Chats</div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Gavin Griffith</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile1} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Erfan Gharche</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile2} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Ali SeydAbadi</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile3} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Farhad FalahPour</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Omid Zarei</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>

            <div className="chat-straucture">
              <div className="content-avatar">
                <div class="avatar-image ">
                  <img src={profile1} class="avatar" />
                </div>
              </div>

              <div className="content-info">
                <div className="content-name">
                  <div>Arsalan Khoram</div>
                </div>
                <div className="contetn-message">
                  <div>I will purchase it for sure.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-content"></div>
      </div>
    </div>
  );
};

export default Chat;
