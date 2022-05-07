import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BtcIcon from "../../../../assets/icons/btc.svg";
import { detailsTitle } from "../../../../constants/default.styles";
import { BTCStatistics } from "../../../../shared/models/interfaces";
import { BTCStatisticMap } from "../../../../shared/utils/ui";
import { BTCStatisticItem } from "../btc-statistic-item/BtcStatisticItem";
interface BTCStatisticCardProps {
  btcStats: BTCStatistics;
}

export const BTCStatisticCard: React.FC<BTCStatisticCardProps> = ({
  btcStats,
}) => {
  const renderInfoxBoxes = (stats: BTCStatistics) => {
    const keys = Object.keys(stats);
    return keys.map((key) => {
      return (
        <Grid item xs={8} md={6} lg={3} key={key}>
          <BTCStatisticItem
            label={BTCStatisticMap[key as keyof BTCStatistics].title}
            unit={BTCStatisticMap[key as keyof BTCStatistics].unit}
            value={stats[key as keyof BTCStatistics]}
          />
        </Grid>
      );
    });
  };
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img src={BtcIcon} alt="icon bitcoin" height={30} width={30} />
          <Typography sx={{ ...detailsTitle, paddingLeft: 2 }}>
            BTC Bitcoin
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {renderInfoxBoxes(btcStats)}
        </Grid>
      </CardContent>
    </Card>
  );
};
