import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            🚗 Rent Vehicles in Bhopal with Ease
          </h1>

          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore, compare, and book from verified rental services offering bikes, cars, and more across Bhopal city.
          </p>

          <Link
            to="/Login"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-md shadow-lg transition"
          >
            Browse Rentals
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border">
          <div className="text-4xl text-blue-500 mb-3">🛵</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Two-Wheelers</h3>
          <p className="text-gray-500 text-sm">
            Rent scooties & bikes for easy and affordable city travel.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border">
          <div className="text-4xl text-blue-500 mb-3">🚗</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Cars & SUVs</h3>
          <p className="text-gray-500 text-sm">
            Book self-drive or chauffeur-driven cars at best rates.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border">
          <div className="text-4xl text-blue-500 mb-3">📍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">City-Wide Reach</h3>
          <p className="text-gray-500 text-sm">
            Verified rentals across Bhopal including MP Nagar, TT Nagar & more.
          </p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-slate-800">
          Are You a Rental Service Provider?
        </h2>
        <p className="text-gray-600 mt-2">
          Join the platform and list your vehicles today.
        </p>
        <Link
          to="/Owner-register"
          className="mt-5 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-6 py-3 rounded-md font-medium shadow-md"
        >
          Register Your Service
        </Link>
      </div>
    </div>
  )
}

export default Home
