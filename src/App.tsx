import {
  createTheme,
  Palette,
  PaletteOptions,
  ThemeProvider,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BTCConverterPage } from "./pages/btc-converter/BTCConverterPage";
import { BTCDetailsPage } from "./pages/btc-details/BTCDetailsPage";
import { BTCStatisticsPage } from "./pages/btc-statistics/BTCStatisticsPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { SideMenu } from "./shared/components/side-menu/side-menu";

declare module "@mui/material/styles" {
  interface Theme {
    palette: Palette;
  }
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-wrapper">
        <nav className="side-content">
          <SideMenu />
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/statistics" element={<BTCStatisticsPage />}></Route>
            <Route path="/converter" element={<BTCConverterPage />}></Route>
            <Route path="/details" element={<BTCDetailsPage />}></Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
