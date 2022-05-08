import { useEffect, useState } from "react";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { PageTitle } from "../../shared/models/enums";
import { BTCChartDataPoint } from "../../shared/models/interfaces";
import { getBTCMarketPriceinUSD } from "../../shared/services/api-service";
import { BTCChart } from "./components/btc-chart/BTCChart";

export const BTCStatisticsPage = () => {
  const [chartData, setChartData] = useState<BTCChartDataPoint[]>();
  const pageTitle = PageTitle.STATISTICS;
  useEffect(() => {
    const getChartData = async () => {
      try {
        const btcDataPoints = await getBTCMarketPriceinUSD("1year");
        setChartData(btcDataPoints);
      } catch (error) {
        console.error("Error loading chart data", error);
      }
    };
    getChartData();
  }, []);

  return (
    <>
      <HeaderBar title={pageTitle} />
      {chartData && <BTCChart chartData={chartData} />}
    </>
  );
};
