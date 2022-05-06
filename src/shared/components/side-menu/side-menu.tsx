import { NavLink } from "react-router-dom";
import "./side-menu.css";

export const SideMenu = () => {
  const menuItems = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/details",
      title: "Details",
    },
    {
      path: "/converter",
      title: "Converter",
    },
    {
      path: "/statistics",
      title: "Statistics",
    },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <NavLink
        to={item.path}
        style={({ isActive }) => {
          return {
            color: isActive ? "#e96f48" : "#222121",
            fontWeight: 600,
          };
        }}
      >
        {item.title}
      </NavLink>
    ));
  };
  return <div className="menu-item-container">{renderMenuItems()}</div>;
};
