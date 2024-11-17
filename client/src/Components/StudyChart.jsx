// src/components/StudyChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const StudyChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/study-data', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = response.data;
        setChartData({
          labels: data.map(item => item.date),
          datasets: [
            {
              label: 'Study Hours',
              data: data.map(item => item.hours),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default StudyChart;
