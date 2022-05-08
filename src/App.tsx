import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BTCConverterPage } from "./pages/btc-converter/BTCConverterPage";
import { BTCDetailsPage } from "./pages/btc-details/BTCDetailsPage";
import { BTCStatisticsPage } from "./pages/btc-statistics/BTCStatisticsPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { SideMenu } from "./shared/components/side-menu/side-menu";

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
      <Box className="app-wrapper">
        <Box className="side-content">
          <SideMenu />
        </Box>
        <Box className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/statistics" element={<BTCStatisticsPage />}></Route>
            <Route path="/converter" element={<BTCConverterPage />}></Route>
            <Route path="/details" element={<BTCDetailsPage />}></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
