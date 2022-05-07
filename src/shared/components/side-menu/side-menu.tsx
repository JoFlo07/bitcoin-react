import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GridViewIcon from "@mui/icons-material/GridView";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../hooks/isMobile";
import "./side-menu.css";

export const SideMenu = () => {
  const isMobile = useIsMobile();
  const menuItems = [
    {
      path: "/",
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
        {!isMobile && (
          <Typography
            sx={{
              paddingLeft: 1,
            }}
          >
            {item.title}
          </Typography>
        )}
      </NavLink>
    ));
  };
  return (
    <div className={isMobile ? 'sm-menu-item-container' : 'menu-item-container'}>
      {renderMenuItems()}
    </div>
  );
};
