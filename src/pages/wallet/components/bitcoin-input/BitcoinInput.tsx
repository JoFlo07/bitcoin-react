import { Box, OutlinedInput } from "@mui/material";
import NumberFormat, { NumberFormatValues } from "react-number-format";

interface BitcoinInputProps {
  btcAmount: string;
  handleInput: (values: NumberFormatValues) => void;
}

export const BitcoinInput: React.FC<BitcoinInputProps> = ({
  btcAmount,
  handleInput,
}) => {
  return (
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
        thousandSeparator={false}
        value={btcAmount}
        decimalScale={4}
        onValueChange={handleInput}
      />
    </Box>
  );
};
