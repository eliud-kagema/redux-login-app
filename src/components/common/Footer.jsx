import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <p className="text-center">&copy; {new Date().getFullYear()} Redux Login App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
