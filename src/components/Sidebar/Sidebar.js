import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { SIDEBAR_ITEMS } from "../../utils/constants/SidebarItem";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = SIDEBAR_ITEMS.findIndex(
      (item) => item.section === curPath
    );

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar__menu">
        {SIDEBAR_ITEMS.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="txt-logout">Đăng xuất</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
