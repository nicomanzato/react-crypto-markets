import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

import { minimalLineChartOptions, defaultData } from './helpers';

export const LineChart = ({ height, data, id, options = minimalLineChartOptions, className }) => {
  const [chartRef] = useState(React.createRef());

  useEffect(() => {
    const chartData = defaultData;
    const myChartRef = chartRef.current.getContext('2d');

    if (data) {
      chartData.labels = data.map(dailyPrice => dailyPrice.date);
      chartData.datasets[0].data = data.map(dailyPrice => dailyPrice.price);
    }

    chartData.datasets[0].label = id;
    const chart = new Chart(myChartRef, {
      responsive: false,
      maintainAspectRatio: false,
      type: 'line',
      data: chartData,
      options: options,
    });

    return () => chart.destroy();
  }, [chartRef, data, id, options]);
  
  return (
    <div className={className}>
      <canvas id={id} ref={chartRef} height={height} alt={id} style={{width: '100%'}} />
    </div>
  );
};

export default LineChart;
