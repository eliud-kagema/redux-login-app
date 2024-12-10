import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="bg-blue-600 text-white p-4 rounded">
        <h1>Welcome, {user?.email}</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded mt-4"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </header>
    </div>
  );
};

export default Dashboard;
