import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataVisualization: React.FC = () => {
  const [data, setData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Real-time Data',
        data: [] as number[],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const updateData = () => {
      const newValue = Math.random() * 100;
      const now = new Date().toLocaleTimeString();
      
      setData(prevData => ({
        labels: [...prevData.labels.slice(-20), now],
        datasets: [{
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data.slice(-20), newValue],
        }],
      }));
    };

    // Update every second
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-time Data Visualization',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default DataVisualization;
