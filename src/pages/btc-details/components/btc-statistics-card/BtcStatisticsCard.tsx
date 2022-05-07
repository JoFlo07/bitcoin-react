import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BtcIcon from "../../../../assets/icons/btc.svg";
import { statItemTitle } from "../../../../constants/default.styles";
import { BTCStatistics } from "../../../../shared/models/interfaces";
import { BTCStatisticMap } from "../../../../shared/utils/ui";
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
          <Paper
            elevation={1}
            sx={{
              height: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 2,
            }}
          >
            <Typography sx={statItemTitle}>
              {BTCStatisticMap[key as keyof BTCStatistics].title}
            </Typography>
            <Typography>
              {stats[key as keyof BTCStatistics]}
              {" "}
              {BTCStatisticMap[key as keyof BTCStatistics].unit}
            </Typography>
          </Paper>
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
          <Typography sx={{ ...statItemTitle, paddingLeft: 2 }}>
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
