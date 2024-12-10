import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import Header from './common/Header';
import Footer from './common/Footer';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;