import React from "react";
import "../email/email-page-style.scss";
import EmailList from "../../components/email-list";
import EmailSideBar from "../../components/email-side-bar";

const EmailForms = () => {
  return (
    <div className="background-email-form">
      <div className="main-email-form">

        <EmailSideBar />

        <EmailList/>   
         
      </div>
    </div>
  );
};

export default EmailForms;
