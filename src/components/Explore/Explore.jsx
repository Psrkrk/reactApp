import React from "react";

const Explore = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
          Explore New Horizons
        </h1>
        <p className="text-lg md:text-xl text-gray-300 opacity-90">
          Discover exciting and fresh content curated just for you!
        </p>
      </div>

      {/* Explore Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg px-4 md:px-8 lg:px-12">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Trending Topics
          </h2>
          <p className="text-gray-400">
            Stay up-to-date with what's currently buzzing around the world!
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Top Creators
          </h2>
          <p className="text-gray-400">
            Discover content from some of the most popular creators!
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Explore Categories
          </h2>
          <p className="text-gray-400">
            Dive into various categories to find content that excites you!
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 px-4">
        <button className="bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-600 transition duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Explore;
