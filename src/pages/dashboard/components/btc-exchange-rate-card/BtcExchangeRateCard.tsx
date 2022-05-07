import { Card, CardContent, Typography } from "@mui/material";

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
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
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
