import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GridViewIcon from "@mui/icons-material/GridView";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  menuItem,
  menuItemContainer,
  smMenuItemContainer,
} from "../../../constants/style-props";
import useIsMobile from "../../hooks/isMobile";
import { MainRoutes, PageTitle } from "../../models/enums";

export const SideMenu = () => {
  const isMobile = useIsMobile();
  const menuItems = [
    {
      path: MainRoutes.DASHBOARD,
      title: PageTitle.DASHBOARD,
      icon: <GridViewIcon />,
    },
    {
      path: MainRoutes.DETAIL,
      title: PageTitle.DETAIL,
      icon: <FactCheckIcon />,
    },
    {
      path: MainRoutes.CONVERTER,
      title: PageTitle.CONVERTER,
      icon: <CalculateIcon />,
    },
    {
      path: MainRoutes.STATISTICS,
      title: PageTitle.STATISTICS,
      icon: <TimelineIcon />,
    },
    {
      path: MainRoutes.WALLET,
      title: PageTitle.WALLET,
      icon: <AccountBalanceWalletIcon />,
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
