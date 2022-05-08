import { Chip, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  btcValueChip,
  statItemTitle,
  titleFontStyle,
} from "../../constants/style-props";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { PageTitle, StorageKey } from "../../shared/models/enums";
import { ExChangeRate } from "../../shared/models/interfaces";
import { getExchangeRates } from "../../shared/services/api-service";
import { retrieveItemFromStorage } from "../../shared/services/local-storage-service";
import { BTCExchangeRateCard } from "./components/btc-exchange-rate-card/BtcExchangeRateCard";

export const DashboardPage = () => {
  const pageTitle = PageTitle.DASHBOARD;
  const [exChangeRates, setExChangeRates] = useState<ExChangeRate>();
  const [myBtcAmount, setMayBtcAmount] = useState("");
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
    const storedBtcAmount = retrieveItemFromStorage(StorageKey.MY_BTC);
    if (storedBtcAmount) setMayBtcAmount(storedBtcAmount);
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
      <HeaderBar title={pageTitle}>
        {myBtcAmount && (
          <Chip
            label={`My BTC: ${myBtcAmount}`}
            sx={btcValueChip}
            color="primary"
          />
        )}
      </HeaderBar>
      <Container sx={{ overflow: "auto", height: "100%" }}>
        <Typography sx={{ ...titleFontStyle, marginY: 5 }}>
          Current BTC Market Price
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 20 }}>
          {exChangeRates && renderExchangeRateCards(exChangeRates)}
        </Grid>
      </Container>
    </>
  );
};
