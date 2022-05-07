import { Card, CardContent, Typography } from "@mui/material";
import Flag from "react-flagkit";
import { countryFlagMap } from "../../../../shared/utils/ui";

interface BTCExchangeRateCardProps {
  currencyName: string;
  buyValue: string;
  sellValue: string;
}

export const BTCExchangeRateCard: React.FC<BTCExchangeRateCardProps> = ({
  currencyName,
  buyValue,
  sellValue,
}) => {
  const countryCode = countryFlagMap[currencyName];
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Flag country={countryCode} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {currencyName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {buyValue}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sellValue}
        </Typography>
      </CardContent>
    </Card>
  );
};
