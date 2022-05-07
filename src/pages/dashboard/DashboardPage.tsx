import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { ExChangeRate } from "../../shared/models/interfaces";
import { getExchangeRates } from "../../shared/services/api-service";
import { BTCExchangeRateCard } from "./components/btc-exchange-rate-card/BtcExchangeRateCard";

export const DashboardPage = () => {
  const pageTitle = "Dashboard";
  const [exChangeRates, setExChangeRates] = useState<ExChangeRate>({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const rates = await getExchangeRates();
      if (rates) {
        console.log(rates);
        setExChangeRates(rates);
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
        <Grid item xs={3}>
          <BTCExchangeRateCard
            key={key}
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
      <Container sx={{ overflow: "auto", height: '100%', paddingY: 5, }}>
        <Grid container spacing={2} sx={{ marginBottom: 20 }}>
          {renderExchangeRateCards(exChangeRates)}
        </Grid>
      </Container>
    </>
  );
};
