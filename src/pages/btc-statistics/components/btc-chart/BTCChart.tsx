import { Box } from "@mui/material";
import * as Highcharts from "highcharts";
import { useEffect } from "react";
import { BTCChartDataPoint } from "../../../../shared/models/interfaces";

interface BTCChartProps {
  chartData: BTCChartDataPoint[];
}

export const BTCChart: React.FC<BTCChartProps> = ({ chartData }) => {
  useEffect(() => {
    const options: Highcharts.Options = {
      chart: {
        type: "line",
      },
      title: { text: "Market Price (USD)" },
      credits: {
        enabled: false,
      },
      xAxis: {
        title: { text: "" },
        type: "datetime",
        tickInterval: 30 * 24 * 3600,
        labels: {
          formatter: function (data) {
            return Highcharts.dateFormat("%b %y", +data.value * 1000);
          },
        },
      },
      yAxis: {
        title: { text: "USD" },
      },
      tooltip: {
        useHTML: true,
        style: {
          fontSize: "10px",
          fontWeight: "500",
        },
        formatter: function (this: Highcharts.TooltipFormatterContextObject) {
          if (this) {
            const xValue = this.x as number;
            const date = Highcharts.dateFormat("%d.%m.%y", xValue * 1000);
            const btcValue = this.y;
            return `
            <p>Date: ${date}</p>
            <p>USD: ${btcValue}</p>
            `;
          }
        },
      },
      series: [
        {
          type: "line",
          color: "#f2a900",
          showInLegend: false,
          name: "BTC Value",
        },
      ],
    };
    Highcharts.chart("chart-container", options, (chart) => {
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
