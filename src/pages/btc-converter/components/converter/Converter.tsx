import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import {
  convertedBTCField,
  convertedBTCText,
} from "../../../../constants/sx-style-props";
import { currencyOptions } from "../../../../constants/values";

interface ConverterProps {
  displayAmount: string;
  amount: string;
  selectedCurrency: string;
  convertedBTC: string;
  handleSelect: (e: SelectChangeEvent<string>, value: string) => void;
  handleInput: (values: NumberFormatValues) => void;
}

export const Converter: React.FC<ConverterProps> = ({
  displayAmount,
  selectedCurrency,
  amount,
  convertedBTC,
  handleSelect,
  handleInput,
}) => {
  return (
    <>
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
          onValueChange={handleInput}
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
    </>
  );
};
