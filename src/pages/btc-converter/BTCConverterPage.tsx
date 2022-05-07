import {
  Box, Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import { useState } from "react";
import NumberFormat from "react-number-format";
import {
  convertedBTCField,
  convertedBTCText,
  converterGrid,
  converterGridMobile
} from "../../constants/default.styles";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { convertCurrencyToBTC } from "../../shared/services/api-service";

export const BTCConverterPage = () => {
  const pageTitle = "BTC Converter";
  const [displayAmount, setDisplayAmount] = useState<string>();
  const [amount, setAmount] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [convertedBTC, setConvertedBTC] = useState("");
  const currencyOptions = ["EUR", "USD", "AUD", "NZD", "GBP"];
  const isMobile = useIsMobile();

  const handleSelect = async (event: SelectChangeEvent, amount: string) => {
    setSelectedCurrency(event.target.value);
    await calculateBTCValue(event.target.value, amount);
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
          <Box
            sx={{
              display: "flex",
            }}
          >
            <NumberFormat
              allowNegative={false}
              allowLeadingZeros={false}
              customInput={OutlinedInput}
              isNumericString={true}
              thousandSeparator={true}
              value={displayAmount}
              decimalScale={2}
              onValueChange={async (values) => {
                const { formattedValue, value } = values;
                setDisplayAmount(formattedValue);
                setAmount(value);
                if (value) {
                  await calculateBTCValue(selectedCurrency, value);
                } else {
                  setConvertedBTC("");
                }
              }}
            />
            <Select
              value={selectedCurrency}
              onChange={(e) => handleSelect(e, amount)}
              sx={{ minWidth: 100 }}
            >
              {currencyOptions.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography>=</Typography>
          <Box sx={convertedBTCField}>
            <Typography sx={convertedBTCText}>{convertedBTC} BTC</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
