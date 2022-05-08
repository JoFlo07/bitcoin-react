import { Grid, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { NumberFormatValues } from "react-number-format";
import {
  converterGrid,
  converterGridMobile,
} from "../../constants/sx-style-props";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { convertCurrencyToBTC } from "../../shared/services/api-service";
import { Converter } from "./components/converter/Converter";

export const BTCConverterPage = () => {
  const pageTitle = "BTC Converter";
  const [displayAmount, setDisplayAmount] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [convertedBTC, setConvertedBTC] = useState("");
  const isMobile = useIsMobile();

  const handleSelect = async (event: SelectChangeEvent, amount: string) => {
    setSelectedCurrency(event.target.value);
    await calculateBTCValue(event.target.value, amount);
  };

  const handleInput = async (values: NumberFormatValues) => {
    const { formattedValue, value } = values;
    setDisplayAmount(formattedValue);
    setAmount(value);
    if (value) {
      await calculateBTCValue(selectedCurrency, value);
    } else {
      setConvertedBTC("");
    }
  };

  const calculateBTCValue = async (currency: string, value: string) => {
    const valueAsNumber = Number(value);
    const btcAmount = await convertCurrencyToBTC(currency, valueAsNumber);
    setConvertedBTC(String(btcAmount));
  };

  return (
    <>
      <HeaderBar title={pageTitle} />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={8}
          md={10}
          sm={12}
          xs={12}
          sx={isMobile ? converterGridMobile : converterGrid}
        >
          <Converter
            convertedBTC={convertedBTC}
            displayAmount={displayAmount}
            amount={amount}
            selectedCurrency={selectedCurrency}
            handleSelect={handleSelect}
            handleInput={handleInput}
          />
        </Grid>
      </Grid>
    </>
  );
};
