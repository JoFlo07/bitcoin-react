import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { statsToLoad } from "../../constants/btc-statistics";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { BTCStatistics } from "../../shared/models/interfaces";
import { getBTCStatistic } from "../../shared/services/api-service";
import { BTCStatisticCard } from "./components/btc-statistics-card/BtcStatisticsCard";

export const BTCDetailsPage = () => {
  const pageTitle = "Details";
  const [btcStats, setBtcStats] = useState<BTCStatistics>();

  useEffect(() => {
    const getAllStats = async () => {
      try {
        const stats = await Promise.all(
          statsToLoad.map(async (stat) => {
            return await getBTCStatistic(stat);
          })
        );
        const combinedStats = stats.reduce<BTCStatistics>((obj, statObj) => {
          const statKey = Object.keys(statObj)[0] as keyof BTCStatistics;
          obj[statKey] = statObj[statKey];
          return obj;
        }, {} as BTCStatistics);
        setBtcStats(combinedStats);
      } catch (error) {
        console.error("Error loading btc statistics", error);
      }
    };

    getAllStats();
  }, []);

  return (
    <>
      <HeaderBar title={pageTitle} />
      <Container sx={{ height: "100%" }}>
        <Grid container sx={{ marginTop: 5 }}>
          {btcStats && <BTCStatisticCard btcStats={btcStats} />}
        </Grid>
      </Container>
    </>
  );
};
