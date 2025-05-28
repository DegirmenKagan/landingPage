import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          The easiest way to track anything
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-white text-primary-blue rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Get Started For Free
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-primary-blue transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
        {/* Placeholder for an image or video */}
        <div className="mt-16">
          <img
            src="https://via.placeholder.com/1000x500/F3F4F6/9CA3AF?text=Product+Screenshot"
            alt="Product Screenshot"
            className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
