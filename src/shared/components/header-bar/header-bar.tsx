import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { appBar, mobileTitleFontStyle, titleFontStyle } from "../../../constants/style-props";
import useIsMobile from "../../hooks/isMobile";

interface HeaderBarProps {
  title: string;
  children?: ReactNode;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ title, children }) => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={appBar}>
        <Typography sx={isMobile ? mobileTitleFontStyle : titleFontStyle}>
          {title}
        </Typography>
        {children}
      </AppBar>
    </Box>
  );
};
