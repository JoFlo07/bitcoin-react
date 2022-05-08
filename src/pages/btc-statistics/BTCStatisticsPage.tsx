import { useEffect } from "react";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { getBTCMarketPriceinUSD } from "../../shared/services/api-service";

export const BTCStatisticsPage = () => {
  const pageTitle = "Statistics";
  useEffect(() => {
    const getChartData = async () => {
      try {
        const chartData = await getBTCMarketPriceinUSD("all");
        console.log(chartData);
      } catch (error) {
        console.error("Error loading chart data", error);
      }
    };
    getChartData();
  }, []);
  
  return <HeaderBar title={pageTitle} />;
};
