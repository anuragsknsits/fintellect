import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/common/Meta';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Meta
        title="403 Unauthorized | FINTELLECT"
        description="Access denied. You are not authorized to view this page."
      />
      <div className="bg-white rounded shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">403</h1>
        <p className="text-lg text-gray-700 mb-4">
          Access Denied: You are not authorized to view this page.
        </p>
        <Link
          to="/"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
