export const lineChartDataTotalSpent = [
  {
    name: "Withdrawal",
    data: [
      50, 64, 48, 66, 49, 68, 3, 22, 5, 66, 7, 22, 6, 43, 6, 44, 66, 77, 88, 33,
      20, 6,
    ],
    color: "#FFDB8B",
  },
  {
    name: "Deposit",
    data: [
      30, 40, 24, 46, 20, 46, 32, 32, 34, 23, 43, 12, 34, 54, 32, 32, 31, 34,
      23, 24, 32,
    ],
    color: "#FF6600",
  },
  {
    name: "Payment",
    data: [],
    color: "#C4C4C4",
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false, // Disable the toolbar
    },
    legend: {
      show: "false",
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Real-Time Update",
    align: "left",
    fontSize: "20px",
    fontWeight: "700",
  },
  grid: {
    show: true,
    borderColor: "#e7e7e7",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    type: "numeric",
    min: 0,
    max: 22,
    tickAmount: 11,
  },
  yaxis: {
    min: 25,

    tickAmount: 4,
  },
};
