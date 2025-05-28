import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* You can add more sections here following the reference site, e.g., */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
