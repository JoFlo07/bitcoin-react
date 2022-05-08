import * as Highcharts from "highcharts";

export const tooltipFormatter = function (
  this: Highcharts.TooltipFormatterContextObject
) {
  if (this) {
    const xValue = this.x as number;
    const date = Highcharts.dateFormat("%d.%m.%y", xValue * 1000);
    const btcValue = this.y;
    return `
        <p><b>Date:</b> ${date}</p>
        <p><b>USD:</b> ${btcValue}</p>
        `;
  }
};

export const chartOption: Highcharts.Options = {
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
    formatter: tooltipFormatter,
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
