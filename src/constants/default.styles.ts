import { SxProps, Theme } from "@mui/material";

export const titleFontStyle: SxProps<Theme> = {
  fontSize: 20,
  fontWeight: 500,
};

export const detailsTitle: SxProps<Theme> = {
  fontSize: 16,
  fontWeight: 600,
  paddingY: 2,
};

export const statItemTitle: SxProps<Theme> = {
  fontSize: 16,
  fontWeight: 300,
  marginBottom: 2,
};

export const paperItem: SxProps<Theme> = {
  height: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 2,
};
