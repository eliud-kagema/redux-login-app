import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  // Get the user object from Redux state
  const user = useSelector((state) => state.auth.user);

  // Redux dispatch and router navigation
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle user logout
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h1>

          {/* Grid Layout for Dashboard Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Analytics Card */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Analytics</h2>
              <p className="text-gray-600">
                View your performance metrics and analytics here.
              </p>
            </div>

            {/* Settings Card */}
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Settings</h2>
              <p className="text-gray-600">
                Manage your account settings and preferences.
              </p>
            </div>

            {/* Notifications Card */}
            <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Notifications</h2>
              <p className="text-gray-600">
                Check your latest notifications and updates.
              </p>
            </div>

            {/* Support Card */}
            <div className="p-6 bg-red-100 rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Support</h2>
              <p className="text-gray-600">Get help and support from our team.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
