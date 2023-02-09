import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
type Props = {
    chartData:any
  }
  
export const PieChart = ({chartData}:Props) => {
    return <Pie
    data={chartData}
/>
}
export default PieChart;
