import "../../pages/email/email-page-style.scss";
import { AiOutlineMail } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { BsStar } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { Layout, Menu, theme, Button } from "antd";
import React from "react";
const { Header, Content, Sider } = Layout;

const EmailForms = () => {
  const {
    token: { sideBarBackground, sideBarTextColor, searchBarBackground },
  } = theme.useToken();

  return (
    <div className="background-email-form">
      <div className="main-email-form">
        <Layout>
          <Sider
            style={{
              backgroundColor: sideBarBackground,
              zIndex: 14142124124,
              position: "relative",
              overflowY: "hidden",
              borderRight: "1px solid #43485e",
            }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="compose-button">
              <Button className="main-compose-button">Compose</Button>
            </div>
            <Menu
              style={{
                backgroundColor: "transparent",
                color: sideBarTextColor,
              }}
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={[
                {
                  key: "1",
                  icon: <AiOutlineMail size="20px" color="#c9cdd9" />,
                  label: "Inbox",
                },
                {
                  key: "2",
                  icon: <TbSend size="20px" color="#c9cdd9" />,
                  label: "Sent",
                },
                {
                  key: "3",
                  icon: <TbPencil size="20px" color="#c9cdd9" />,
                  label: "Draft",
                },
                {
                  key: "4",
                  icon: <BsStar size="20px" color="#c9cdd9" />,
                  label: "Starred",
                },
                {
                  key: "5",
                  icon: <RiErrorWarningLine size="20px" color="#c9cdd9" />,
                  label: "Spam",
                },
                {
                  key: "6",
                  icon: <HiOutlineTrash size="20px" color="#c9cdd9" />,
                  label: "Trash",
                },
                {
                  key: "7",
                  icon: (
                    <div className="personal-icon">
                      <div className="label-personal"></div>
                    </div>
                  ),
                  label: "Personal",
                },
                {
                  key: "8",
                  icon: (
                    <div className="company-icon">
                      <div className="label-company"></div>
                    </div>
                  ),
                  label: "Company",
                },
                {
                  key: "9",
                  icon: (
                    <div className="important-icon">
                      <div className="label-important"></div>
                    </div>
                  ),
                  label: "Important",
                },
                {
                  key: "10",
                  icon: (
                    <div className="private-icon">
                      <div className="label-private"></div>
                    </div>
                  ),
                  label: "Private",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: searchBarBackground,
                borderBottom: "1px solid #43485e",
              }}
            />
            <Content
              style={{
                margin: "0px",
              }}
              id="content-email"
            >
              <div
                style={{
                  padding: 24,
                  minHeight: 500,
                  background: searchBarBackground,
                }}
              >
                content
              </div>
            </Content>
          </Layout>
        </Layout>

        {/* <EmailSideBar />

        <EmailList/>    */}
      </div>
    </div>
  );
};

export default EmailForms;
