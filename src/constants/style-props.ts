import { SxProps, Theme } from "@mui/material";
import React from "react";

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

export const converterGrid: SxProps<Theme> = {
  marginY: 10,
  marginX: 2,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  paddingY: 5,
  paddingX: 1,
  border: "1px solid black",
  borderRadius: 5,
};
export const converterGridMobile: SxProps<Theme> = {
  ...converterGrid,
  flexDirection: "column",
};

export const convertedBTCField: SxProps<Theme> = {
  border: "1px solid #000000DE",
  width: 200,
  height: 50,
  borderRadius: 4,
};

export const convertedBTCText: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingRight: 2,
  height: "100%",
};

export const appWrapper: SxProps<Theme> = {
  width: "100%",
  display: "flex",
};
export const mainContent: SxProps<Theme> = {
  backgroundColor: "#f7f7f7",
  width: "85%",
  height: "100vh",
  overflow: "hidden",
};
export const sideContent: SxProps<Theme> = {
  height: "100vh",
  overflow: "hidden",
  width: "15%",
  backgroundColor: "#f2a900",
};

export const menuItemContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const smMenuItemContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const menuItem: React.CSSProperties = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  height: 30,
}