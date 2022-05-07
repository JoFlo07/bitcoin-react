import {
  Box,
  Container,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { convertCurrencyToBTC } from "../../shared/services/api-service";

export const BTCConverterPage = () => {
  const pageTitle = "Converter";
  const [displayAmount, setDisplayAmount] = useState<string>();
  const [amount, setAmount] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [convertedBTC, setConvertedBTC] = useState("");
  const currencyOptions = ["EUR", "USD", "AUD", "NZD", "GBP"];

  const handleSelect = async (event: SelectChangeEvent, amount: string) => {
    setSelectedCurrency(event.target.value);
    await calculateBTCValue(event.target.value, amount);
  };

  const calculateBTCValue = async (currency: string, value: string) => {
    const valueAsNumber = Number(value);
    const btcAmount = await convertCurrencyToBTC(
      currency,
      valueAsNumber
    );
    setConvertedBTC(String(btcAmount));
  };

  return (
    <>
      <HeaderBar title={pageTitle} />
      <Container
        sx={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "60%",
          padding: 5,
          border: "1px solid black",
          borderRadius: 5,
        }}
      >
        <Box>
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
              await calculateBTCValue(selectedCurrency, value);
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
        <Box
          sx={{
            border: "1px solid #000000DE",
            width: 200,
            height: 50,
            borderRadius: 4,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 2,
              height: "100%",
            }}
          >
            {convertedBTC} BTC
          </Typography>
        </Box>
      </Container>
    </>
  );
};
