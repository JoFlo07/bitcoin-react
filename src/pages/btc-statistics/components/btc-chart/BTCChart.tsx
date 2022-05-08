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
      title: { text: "BTC Market Value - last 12 months" },
      credits: {
        enabled: false,
      },
      xAxis: {
        title: { text: "" },
        type: "datetime",
        tickInterval: 30 * 24 * 3600,
        labels: {
          formatter: function (data) {
            return Highcharts.dateFormat("%B %y", +data.value * 1000);
          },
        },
      },
      yAxis: {
        title: { text: "BTC Value" },
      },
      series: [
        {
          type: "line",
          color: "#FF00FF",
          showInLegend: false,
        },
      ],
    };
    Highcharts.chart("chart-container", options, (chart) => {
      if (chart) {
        console.log(chartData);
        chart.series[0].setData(chartData);
        console.log(chart);
      }
    });
  }, []);
  return <div id="chart-container"></div>;
};
