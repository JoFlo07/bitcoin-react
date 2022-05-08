import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { appWrapper, mainContent, sideContent } from "./constants/style-props";
import { BTCConverterPage } from "./pages/btc-converter/BTCConverterPage";
import { BTCDetailsPage } from "./pages/btc-details/BTCDetailsPage";
import { BTCStatisticsPage } from "./pages/btc-statistics/BTCStatisticsPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { SideMenu } from "./shared/components/side-menu/side-menu";
import { MainRoutes } from "./shared/models/enums";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: "#f2a900",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f7f7f7",
      contrastText: "#2a2a2a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={appWrapper}>
        <Box sx={sideContent}>
          <SideMenu />
        </Box>
        <Box sx={mainContent}>
          <Routes>
            <Route
              path={MainRoutes.DASHBOARD}
              element={<DashboardPage />}
            ></Route>
            <Route
              path={MainRoutes.STATISTICS}
              element={<BTCStatisticsPage />}
            ></Route>
            <Route
              path={MainRoutes.CONVERTER}
              element={<BTCConverterPage />}
            ></Route>
            <Route
              path={MainRoutes.DETAIL}
              element={<BTCDetailsPage />}
            ></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
