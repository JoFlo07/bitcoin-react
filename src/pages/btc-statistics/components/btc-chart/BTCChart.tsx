import { Box } from "@mui/material";
import * as Highcharts from "highcharts";
import { useEffect } from "react";
import { BTCChartDataPoint } from "../../../../shared/models/interfaces";
import { chartOption } from "../../../../shared/utils/graph";

interface BTCChartProps {
  chartData: BTCChartDataPoint[];
}

export const BTCChart: React.FC<BTCChartProps> = ({ chartData }) => {
  useEffect(() => {

    Highcharts.chart("chart-container", chartOption, (chart) => {
      if (chart) {
        chart.series[0].setData(chartData);
      }
    });
  }, [chartData]);

  return (
    <Box sx={{ marginX: 2, marginY: 5 }}>
      <div id="chart-container"></div>
    </Box>
  );
};
