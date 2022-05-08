import { Chip, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { btcValueChip, dashboardTitle } from "../../constants/style-props";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { Currency, PageTitle, StorageKey } from "../../shared/models/enums";
import { ExChangeRate } from "../../shared/models/interfaces";
import { getExchangeRates } from "../../shared/services/api-service";
import { retrieveItemFromStorage } from "../../shared/services/local-storage-service";
import { convertBTCtoCurrency } from "../../shared/utils/calc";
import { BTCExchangeRateCard } from "./components/btc-exchange-rate-card/BtcExchangeRateCard";

export const DashboardPage = () => {
  const pageTitle = PageTitle.DASHBOARD;
  const [exChangeRates, setExChangeRates] = useState<ExChangeRate>();
  const [myBtcAmount, setMyBtcAmount] = useState({
    btc: "",
    eur: "",
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const rates = await getExchangeRates();
        if (rates) {
          setExChangeRates(rates);
          const storedBtcAmount = retrieveItemFromStorage(StorageKey.MY_BTC);
          if (storedBtcAmount) {
            const btcAmountInEur = convertBTCtoCurrency(
              Currency.EUR,
              rates,
              storedBtcAmount
            );
            setMyBtcAmount({ btc: storedBtcAmount, eur: btcAmountInEur });
          }
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
      <HeaderBar title={pageTitle}>
        {myBtcAmount.btc && (
          <Chip
            label={`My Wallet: ${myBtcAmount.btc} BTC | ${myBtcAmount.eur} €`}
            sx={btcValueChip}
            color="primary"
          />
        )}
      </HeaderBar>
      <Container sx={{ overflow: "auto", height: "100%" }}>
        <Chip
          variant="outlined"
          color="primary"
          sx={dashboardTitle}
          label={" Current BTC Market Price"}
        />
        <Grid container spacing={2} sx={{ marginBottom: 20 }}>
          {exChangeRates && renderExchangeRateCards(exChangeRates)}
        </Grid>
      </Container>
    </>
  );
};
