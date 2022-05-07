import { Card, CardContent, Typography } from "@mui/material";
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
        <Box>
          <Typography sx={statItemTitle}>
            {BTCStatisticMap[key as keyof BTCStatistics]}
          </Typography>
          <Typography>$ {stats[key as keyof BTCStatistics]}</Typography>
        </Box>
      );
    });
  };
  return (
    <Card sx={{ width: "60%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img src={BtcIcon} alt="icon bitcoin" height={30} width={30} />
          <Typography sx={{ paddingLeft: 2 }}>BTC Bitcoin</Typography>
        </Box>
        {renderInfoxBoxes(btcStats)}
      </CardContent>
    </Card>
  );
};
