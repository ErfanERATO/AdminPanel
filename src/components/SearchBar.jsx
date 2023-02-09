import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import profile from "../assets/avatar-1.129659bb.png";

const SearcheBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 search-bar">
          <div className="row search-bar-row-holder justify-content-between">
            <div className="col-4">
              <div className="search-bar-search-row-holder">
                <div className="icon-search">
                  <AiOutlineSearch size="25px" color="#dde2f5" />
                </div>
                <div className="search-color">Search</div>
              </div>
            </div>

            <div className="col-4">
              <div className="avatar-row-holder">
                <div className="icons">
                  <IoLanguageOutline size="25px" color="#dde2f5" />
                </div>
                <div className="icons">
                  <BsSun size="25px" color="#dde2f5" />
                </div>
                <div className="icons">
                  <AiOutlineAppstoreAdd size="25px" color="#dde2f5" />
                </div>
                <div className="icons">
                  <BiBell size="25px" color="#dde2f5" />
                </div>
                <div class="avatar-image">
                  <img src={profile} class="avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearcheBar;
