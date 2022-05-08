import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GridViewIcon from "@mui/icons-material/GridView";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  menuItem,
  menuItemContainer,
  smMenuItemContainer,
} from "../../../constants/style-props";
import useIsMobile from "../../hooks/isMobile";

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
        key={item.path}
        to={item.path}
        style={({ isActive }) => {
          return {
            ...menuItem,
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
    <Box sx={isMobile ? smMenuItemContainer : menuItemContainer}>
      {renderMenuItems()}
    </Box>
  );
};
