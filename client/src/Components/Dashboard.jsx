import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 text-center text-2xl font-bold shadow-md">
        TRACK RECORD
      </header>
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between shadow-lg">
          <div>
            <div className="profile text-center mb-8">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="rounded-full mx-auto mb-2"
              />
              <h2 className="text-xl font-semibold">Your Name</h2>
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="#" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Dashboard
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Study Tracker
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                    Profile
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <a href="#" className="block p-2 bg-gray-700 rounded hover:bg-gray-600 text-center">
              Logout
            </a>
          </div>
        </aside>
        <main className="flex-grow p-8 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Dashboard</h1>
          <p className="mb-8 text-gray-700">
            Welcome to your dashboard. Here you can track your study progress and manage your profile.
          </p>
          <div className="chart bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Study Tracker</h2>
            <div className="h-64 bg-gray-300 text-center flex items-center justify-center text-gray-900">
              Chart goes here
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
