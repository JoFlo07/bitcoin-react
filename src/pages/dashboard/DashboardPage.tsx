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
      const currencyName =  exchangeRatesInfo[key].symbol;
      return (
        <BTCExchangeRateCard
          key={key}
          buyValue={buyValue}
          sellValue={sellValue}
          currencyName={currencyName}
        />
      );
    });
  };
  return (
    <>
      <HeaderBar title={pageTitle} />
      {renderExchangeRateCards(exChangeRates)}
    </>
  );
};
