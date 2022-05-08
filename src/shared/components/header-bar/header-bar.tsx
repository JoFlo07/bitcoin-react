import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appBar, titleFontStyle } from "../../../constants/style-props";

interface HeaderBarProps {
  title: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={appBar}>
        <Typography sx={titleFontStyle}>{title}</Typography>
      </AppBar>
    </Box>
  );
};
