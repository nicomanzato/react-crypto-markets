import React from 'react';
import { Line } from 'react-chartjs-2';

const defaultData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const defaultOptions = {
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

export const Chart = ({ width, height, data, options, className }) => {
  const chartData = { ...defaultData, data };

  chartData.labels = data.map(dailyPrice => dailyPrice.date);
  chartData.datasets.data = data.map(dailyPrice => dailyPrice.price);

  return (
    <div className={className}>
      <Line data={chartData} options={{ ...defaultOptions }} width={width} />
    </div>
  );
};

export default Chart;
