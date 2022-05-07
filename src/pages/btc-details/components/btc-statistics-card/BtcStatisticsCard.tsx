import { Card, CardContent, Typography } from "@mui/material";
import { BTCStatistics } from "../../../../shared/models/interfaces";

interface BTCStatisticCardProps {
  btcStats: BTCStatistics;
}

export const BTCStatisticCard: React.FC<BTCStatisticCardProps> = ({
  btcStats,
}) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography>{btcStats.marketcap}</Typography>
        <Typography>{btcStats.totalbc}</Typography>
        <Typography>{btcStats["24hrtransactioncount"]}</Typography>
        <Typography>{btcStats["24hrbtcsent"]}</Typography>
        <Typography>{btcStats.hashrate}</Typography>
        <Typography>{btcStats.getdifficulty}</Typography>
      </CardContent>
    </Card>
  );
};
