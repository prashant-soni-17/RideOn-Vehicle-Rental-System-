import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-50 to-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96"
      >
        <h1 className="text-3xl text-center font-bold text-blue-600 mb-6">
          Sign Up
        </h1>

        <input
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Username"
        />

        <input
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter Password"
        />

        <input
          required
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Confirm Password"
        />

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline ml-2">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
