"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration, ChartData, ChartType } from 'chart.js';

interface PieChartProps {
  value: number;
  size?: number;
  darkMode?: boolean;
}

Chart.register(...registerables);

const PieChart: React.FC<PieChartProps> = ({ value, size = 150, darkMode = false }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const trackColor = darkMode ? '#363636' : '#000';
    const chartColor = '#D1ED5D';

    const data: ChartData<'doughnut'> = {
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [chartColor, trackColor],
        borderWidth: 0
      }]
    };

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data,
      options: {
        responsive: true,
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, [value, darkMode]);

  return (
    <canvas ref={chartRef} width={size} height={size} />
  );
};

export default PieChart;
