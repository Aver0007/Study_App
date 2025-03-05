import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [userName, setUserName] = useState('');
  const [studySessions, setStudySessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
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

        // const response = await axios.get('http://localhost:5000/user', config);
        const response = await axios.get('https://studytrackerbackend-4vmo.onrender.com/user', config);
        setUserName(response.data.username);
        fetchStudySessions(token); 
      } catch (error) {
        console.error('Fetch user data error:', error.response?.data?.message);
        navigate('/login'); 
      }
    };

    fetchUserData();
  }, [navigate]);

  const fetchStudySessions = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // const response = await axios.get('http://localhost:5000/studySessions', config);
      const response = await axios.get('https://studytrackerbackend-4vmo.onrender.com/studySessions', config);
      setStudySessions(response.data);
    } catch (error) {
      console.error('Fetch study sessions error:', error.response?.data?.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 text-center text-2xl font-bold shadow-md">
        STUDY TRACKER
      </header>
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between shadow-lg">
          <div>
            <div className="profile text-center mb-8">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="rounded-full mx-auto mb-2"
              /> */}
              <h2 className="text-xl font-semibold">{userName}</h2>
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  {/* <a href="/study-graph" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Study-Graph
                  </a> */}
                  <Link to="/study-graph" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                  Study-Graph
                  </Link>
                </li>
                <li className="mb-4">
                  {/* <a href="/study-tracker" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Study Tracker
                  </a> */}
                  <Link to="/study-tracker" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                   Study Tracker
                  </Link>
                </li>
                {/* <li className="mb-4">
                  <a href="#" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Profile
                  </a>
                </li> */}
              </ul>
            </nav> 
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="block w-full p-2 bg-gray-700 rounded hover:bg-gray-600 text-center"
            >
              Logout
            </button>
          </div>
        </aside>
        <main className="flex-grow p-8 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Dashboard</h1>
          <div className="chart bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Study Sessions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Session Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration (minutes)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {studySessions.map((session) => (
                    <tr key={session.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{new Date(session.created_at).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{new Date(session.created_at).toLocaleTimeString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{Math.round(session.duration_seconds / 60)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;