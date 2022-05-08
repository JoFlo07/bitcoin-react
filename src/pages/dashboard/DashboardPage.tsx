import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { PageTitle } from "../../shared/models/enums";
import { ExChangeRate } from "../../shared/models/interfaces";
import { getExchangeRates } from "../../shared/services/api-service";
import { BTCExchangeRateCard } from "./components/btc-exchange-rate-card/BtcExchangeRateCard";

export const DashboardPage = () => {
  const pageTitle = PageTitle.DASHBOARD;
  const [exChangeRates, setExChangeRates] = useState<ExChangeRate>();
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const rates = await getExchangeRates();
        if (rates) {
          setExChangeRates(rates);
        }
      } catch (error) {
        console.error("Error loading exchange rates", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const renderExchangeRateCards = (exchangeRatesInfo: ExChangeRate) => {
    const keys = Object.keys(exchangeRatesInfo);
    return keys.map((key) => {
      const buyValue = exchangeRatesInfo[key].buy.toString();
      const sellValue = exchangeRatesInfo[key].buy.toString();
      const currencyName = exchangeRatesInfo[key].symbol;
      return (
        <Grid item xs={isMobile ? 12 : 6} md={3} lg={3} key={key}>
          <BTCExchangeRateCard
            buyValue={buyValue}
            sellValue={sellValue}
            currencyName={currencyName}
          />
        </Grid>
      );
    });
  };
  return (
    <>
      <HeaderBar title={pageTitle} />
      <Container sx={{ overflow: "auto", height: "100%" }}>
        <Grid container spacing={2} sx={{ marginBottom: 20, marginTop: 5 }}>
          {exChangeRates && renderExchangeRateCards(exChangeRates)}
        </Grid>
      </Container>
    </>
  );
};
