import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
              <p className="text-gray-600">View your performance metrics and analytics here.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
              <p className="text-gray-600">Manage your account settings and preferences.</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
              <p className="text-gray-600">Check your latest notifications and updates.</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Support</h2>
              <p className="text-gray-600">Get help and support from our team.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;