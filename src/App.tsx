import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BTCConverterPage } from "./pages/btc-converter/BTCConverterPage";
import { BTCDetailsPage } from "./pages/btc-details/BTCDetailsPage";
import { BTCStatisticsPage } from "./pages/btc-statistics/BTCStatisticsPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}></Route>
      <Route path="/statistics" element={<BTCStatisticsPage />}></Route>
      <Route path="/converter" element={<BTCConverterPage />}></Route>
      <Route path="/details" element={<BTCDetailsPage />}></Route>
    </Routes>
  );
}

export default App;
