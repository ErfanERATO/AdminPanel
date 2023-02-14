import React from "react";
import profile from "../assets/avatar-1.129659bb.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { BsStar } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { VscRefresh } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImStarEmpty } from "react-icons/im";
import "../style/chat-style.scss";

const Chat = () => {
  return (
    // <div className="background-chat-page">
    //   <div className="main-chat-form">
    //     <div className="container row">
    //       <div className="col-3 col-sm-3 col-md-3">
    //         <div className="chat-side-bar">
    //           <div className="container chat-view ">

    //             <div className="avatar-search ">
    //               <div class="avatar-image ">
    //                 <img src={profile} class="avatar" />
    //               </div>

    //               <div className="search-icon-holder ">
    //                 <AiOutlineSearch
    //                   size="20px"
    //                   color="#6d7286"
    //                   className="search-icon"
    //                 />
    //                 <input className="search-text" placeholder="Search..." />
    //               </div>
    //             </div>

    //             <div className="row chat-section-title">
    //               <div className="col-md-12">
    //                  <div className="title-holder">
    //                     <div className="title">Chats</div>
    //                  </div>
    //               </div>
    //             </div>

    //             <div className="row chats">
    //               <div className="col-md-12">
    //                 <div className="">

    //                 </div>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-9 col-sm-9 col-md-9">s</div>
    //     </div>
    //   </div>
    // </div>

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
                  <img src={profile} class="avatar" />
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
                  <img src={profile} class="avatar" />
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
                  <img src={profile} class="avatar" />
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
                  <img src={profile} class="avatar" />
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

        <div className="chat-content">
          <div className="no-message">
            <div className="no-message-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
