export const lineChartOptions = {
  animation: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: 'rgba(0, 0, 0, 0.5)',
        },
        ticks: {
          display: true,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: 'rgba(0, 255, 0, 0)',
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
};

export const minimalLineChartOptions = {
  animation: false,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

export const defaultData = {
  labels: [],
  datasets: [
    {
      label: '',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#00adb533',
      borderColor: '#00adb5',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'black',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [],
    },
  ],
};
