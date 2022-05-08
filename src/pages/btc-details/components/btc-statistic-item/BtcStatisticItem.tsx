import { Chip, Paper, Typography } from "@mui/material";
import { paperItem, statItemTitle } from "../../../../constants/style-props";
interface BTCStatisticItemProps {
  label: string;
  unit: string;
  value: number;
}

export const BTCStatisticItem: React.FC<BTCStatisticItemProps> = ({
  label,
  value,
  unit,
}) => {
  return (
    <Paper elevation={1} sx={paperItem}>
      <Chip label={label} sx={statItemTitle} color="primary" />
      <Typography>
        {value} <b>{unit}</b>
      </Typography>
    </Paper>
  );
};
