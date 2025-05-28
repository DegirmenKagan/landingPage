import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-primary-blue text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Join thousands of satisfied users who are already benefiting from our
          platform. Sign up now and transform your workflow!
        </p>
        <button className="px-10 py-4 bg-white text-primary-blue rounded-md text-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
