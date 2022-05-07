import { useEffect, useState } from "react";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { BTCStatistic } from "../../shared/models/interfaces";
import { getBTCStats } from "../../shared/services/api-service";

export const BTCDetailsPage = () => {
  const pageTitle = "Details";
  const [btcStats, setBtcStats] = useState<BTCStatistic>();

  useEffect(() => {
    const fetchBtcStats = async () => {
      const stats = await getBTCStats();
      if (stats) {
        console.log(stats);
        setBtcStats(stats);
      }
    };

    fetchBtcStats();
  }, []);
  
  return <HeaderBar title={pageTitle} />;
};
