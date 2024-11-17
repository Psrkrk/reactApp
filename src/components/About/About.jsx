import React from "react";

export default function About() {
  return (
    <div className="py-10 md:py-16" style={{ backgroundColor: "#0d1117" }}>
      <div className="container px-4 mx-auto text-white sm:px-6 md:px-12 lg:px-24 xl:px-6">
        <div className="space-y-8 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-12">
          <div className="w-full md:w-5/12 lg:w-5/12">
            <img
              className="w-full h-auto rounded-lg"
              src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/photo-1518081461904-9d8f136351c2.jpg"
              alt="Adventure Image"
              onError={(e) => {
                e.target.src = "/images/placeholder.png";
              }}
            />
          </div>
          <div className="w-full md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-white">
              Explore World: Your Gateway to Adventure
            </h2>
            <p className="mt-4 text-sm text-gray-300 sm:text-base md:text-lg">
              At Explore World, we believe in the joy of discovery and the
              thrill of exploration. Our platform is designed to connect you
              with incredible places, cultures, and experiences from around the
              globe. Whether you’re an avid traveler looking to plan your next
              trip or simply curious about the diverse world we live in, Explore
              World provides a wealth of resources to ignite your wanderlust.
            </p>
            <p className="mt-4 text-sm text-gray-300 sm:text-base md:text-lg">
              With interactive guides, detailed articles, and engaging
              multimedia content, we aim to inspire and inform your adventures.
              Our user-friendly interface makes it easy to navigate through
              various destinations, uncover hidden gems, and access travel tips
              that cater to your interests. Join us on this exciting journey and
              let Explore World be your trusted companion in discovering the
              wonders that await you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
