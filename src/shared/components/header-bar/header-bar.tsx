import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { appBar, titleFontStyle } from "../../../constants/style-props";

interface HeaderBarProps {
  title: string;
  children?: ReactNode
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ title, children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={appBar}>
        <Typography sx={titleFontStyle}>{title}</Typography>
        {children}
      </AppBar>
    </Box>
  );
};
