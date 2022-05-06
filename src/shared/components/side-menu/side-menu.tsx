import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./side-menu.css";
import GridViewIcon from "@mui/icons-material/GridView";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export const SideMenu = () => {
  const menuItems = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: <GridViewIcon />,
    },
    {
      path: "/details",
      title: "Details",
      icon: <FactCheckIcon />,
    },
    {
      path: "/converter",
      title: "Converter",
      icon: <CalculateIcon />,
    },
    {
      path: "/statistics",
      title: "Statistics",
      icon: <TimelineIcon />,
    },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <NavLink
        to={item.path}
        style={({ isActive }) => {
          return {
            color: isActive ? "#e96f48" : "#ffffff",
            fontWeight: isActive ? 500 : 400,
          };
        }}
      >
        {item.icon}
        <Typography
          sx={{
            paddingLeft: 1,
          }}
        >
          {item.title}
        </Typography>
      </NavLink>
    ));
  };
  return <div className="menu-item-container">{renderMenuItems()}</div>;
};
