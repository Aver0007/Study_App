// GraphPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useNavigate } from 'react-router-dom';

function GraphPage() {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudySessions = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if token is not present
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // const response = await axios.get('http://localhost:5000/studySessions', config);
        const response = await axios.get('https://studytrackerbackend-4vmo.onrender.com/studySessions', config);
        generateChartData(response.data); // Generate chart data after fetching study sessions
      } catch (error) {
        console.error('Fetch study sessions error:', error.response?.data?.message || error.message);
        setError('Failed to fetch study sessions');
      } finally {
        setLoading(false);
      }
    };

    fetchStudySessions();
  }, [navigate]);

  const generateChartData = (sessions) => {
    if (!sessions || sessions.length === 0) {
      setError('No study sessions found');
      return;
    }

    const dataByDate = sessions.reduce((acc, session) => {
      const date = new Date(session.created_at).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += session.duration_seconds / 60;
      return acc;
    }, {});

    const labels = Object.keys(dataByDate);
    const data = Object.values(dataByDate);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Minutes Studied',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 text-center text-2xl font-bold shadow-md">
        STUDY TRACKER - Study Graph
      </header>
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Daily Study Time</h1>
        <div className="chart bg-white p-6 rounded shadow-lg">
          <Bar data={chartData} options={{ maintainAspectRatio: false }} height={400} />
        </div>
      </main>
    </div>
  );
}

export default GraphPage;