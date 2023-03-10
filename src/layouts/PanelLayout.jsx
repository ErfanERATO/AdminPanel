import React, { useState } from "react";
import Logo from "../assets/images/mohr.png";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineChat } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import "../assets/styles/custom.scss";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Input, Button, Avatar, Badge } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../utils/theme";

const { Header, Sider, Content } = Layout;

const PanelLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { sideBarBackground, sideBarTextColor, searchBarBackground },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }} className="layout">
      <Sider
        className="sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        minHeight="100vh"
        style={{
          backgroundColor: sideBarBackground,
          zIndex: 14142124124,
          position: "relative",
          minHeight: "100vh",
          overflowY: "hidden",
        }}
        breakpoint="lg"
      >
        <div className="logo-holder">
          <img src={Logo} className="main-logo" />
          <div className="company-name">AkoTeam</div>
        </div>

        <Menu
          mode="inline"
          style={{
            backgroundColor: "transparent",
            color: sideBarTextColor,
          }}
          defaultSelectedKeys={["1"]}
          selectedKeys={[pathname]}
          items={[
            {
              key: "/",
              icon: <TbSmartHome size="20px" color="#c9cdd9"/>,
              label: <Link to={"/"}>Dashboards</Link>,
            },
            {
              key: "/email",
              icon: <AiOutlineMail size="20px" color="#c9cdd9" />,
              label: <Link to={"/email"}>Email</Link>,
            },
            {
              key: "/chat",
              icon: <MdOutlineChat size="20px" color="#c9cdd9" />,
              label: <Link to={"/chat"}>Chat</Link>,
            },
            {
              key: "4",
              icon: <SlCalender size="20px" color="#c9cdd9" />,
              label: "Calender",
            },
            {
              key: "/invoice-list",
              icon: <AiOutlineFile size="20px" color="#c9cdd9" />,
              label: <Link to={"/invoice-list"}>Invoice List</Link>,
            },
            {
              key: "/invoice-preview",
              icon: <AiOutlineFile size="20px" color="#c9cdd9" />,
              label: <Link to={"/invoice-preview"}>Invoice Preview</Link>,
            },
            {
              key: "6",
              icon: <AiOutlineUser size="20px" color="#c9cdd9" />,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header"
          style={{
            background: searchBarBackground,
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            {React.createElement(MenuOutlined, {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
              style: { fontSize: "20px" },
            })}

            <Button shape="circle" icon={<SearchOutlined />} />
          </div>

          <div className="serach-bar-icons">
            <IoLanguageOutline size="25px" color="#abadc2" />
            <BsSun size="25px" color="#abadc2" />
            <AiOutlineAppstoreAdd size="25px" color="#abadc2" />
            <BiBell size="25px" color="#abadc2" />
            <Badge dot>
              <Avatar
                shape="circle"
                src={require("../assets/images/avatar-1.129659bb.png")}
              />
            </Badge>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;
