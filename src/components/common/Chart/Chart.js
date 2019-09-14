import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

const defaultData = {
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

const defaultOptions = {
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

export const LineChart = ({ width, height, data, id, options, className }) => {
  const [chartRef] = useState(React.createRef());

  useEffect(() => {
    const chartData = defaultData;
    const myChartRef = chartRef.current.getContext('2d');

    chartData.labels = data.history.map(dailyPrice => dailyPrice.date);
    chartData.datasets[0].label = id;
    chartData.datasets[0].data = data.history.map(dailyPrice => dailyPrice.price);

    new Chart(myChartRef, {
      type: 'line',
      data: chartData,
      options: defaultOptions,
    });
  }, [chartRef, data.history, id]);

  return (
    <div className={className}>
      <canvas id={id} ref={chartRef} width={width} height={height} alt={id} />
    </div>
  );
};

export default LineChart;
