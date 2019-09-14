import React from 'react';
import './Background.scss';

export const Background = ({ data }) => {
  return (
    <div className="background">
      <svg viewBox="0 0 1920 1000" className="background__chart">
        <polyline
          fill="none"
          stroke="#0074d9"
          strokeWidth="10"
          points="
  0,400,
  200 250,
  500 450,
  800 300,
  1100 400,
  1300 300,
  1500 400,
  1700 300,
  1900 500,
  "
        />
      </svg>
    </div>
  );
};

export default Background;
