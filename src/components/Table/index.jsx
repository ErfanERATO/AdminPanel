import React from "react";
import "../Table/style.scss";
import profile2 from "../../assets/images/avatar-3.47317f35.png";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const Table = () => {
  return (
    <div>
      <div className="invoice-table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CLIENT</th>
              <th scope="col">TOTAL</th>
              <th scope="col">ISSUED DATE</th>
              <th scope="col">BALANCE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" tooltip="this is tooltip">#5036</th>
              <td>
                <div className="invoice-user">
                  <div className="invoice-user-avatar">
                    <div className="content-avatar">
                      <div class="avatar-image">
                        <img src={profile2} class="avatar" />
                      </div>
                    </div>
                  </div>

                  <div className="invoice-user-info">
                    <div className="invoice-user-name"> Erfan Gharche</div>

                    <div className="invoice-user-email">
                      erfan.erato.79@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td>$3171 </td>
              <td>2023-02-19</td>
              <td>-$205</td>
              <td>
                <div className="invoice-actions">
                  <div>
                    <AiOutlineMail size="25px" color="#c9cdd9" />
                  </div>
                  <div>
                    <AiOutlineEye size="25px" color="#c9cdd9" />
                  </div>
                  <div>
                    <FiMoreVertical size="25px" color="#c9cdd9" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
