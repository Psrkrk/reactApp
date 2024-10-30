import React from 'react';

export default function About() {
  return (
    <div className="py-16" style={{ backgroundColor: '#0d1117' }}>
      <div className="container px-6 m-auto text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
             Explore World: Your Gateway to Adventure
            </h2>
            <p className="mt-6 text-gray-300">
             At Explore World, we believe in the joy of discovery and the thrill of exploration. Our platform is designed to connect you with incredible places, cultures, and experiences from around the globe. Whether you’re an avid traveler looking to plan your next trip or simply curious about the diverse world we live in, Explore World provides a wealth of resources to ignite your wanderlust.

With interactive guides, detailed articles, and engaging multimedia content, we aim to inspire and inform your adventures. Our user-friendly interface makes it easy to navigate through various destinations, uncover hidden gems, and access travel tips that cater to your interests. Join us on this exciting journey and let Explore World be your trusted companion in discovering the wonders that await you!
            </p>
            <p className="mt-4 text-gray-300">
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
