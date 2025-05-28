import React from "react";

const Hero = () => {
  const handleRedirect = () => {
    window.location.href =
      "https://www.martiyazilim.com.tr/sunum-istiyorum.aspx";
  };
  const handleRedirectToDetails = () => {
    window.location.href = "https://www.martiyazilim.com.tr/hakkimizda.aspx";
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Türkiye'nin ilk icra yazılımını üreten ekibimizle daima sizin
          yanınızdayız
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          30 yılı aşkın tecrübe ve birikimimizle; ilk günkü heyecanımızdan ödün
          vermeden, konusunda uzman kadromuzla sektördeki tüm yeniliklere
          öncülük ederek sizlere hizmet vermeye devam ediyoruz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="px-8 py-3 bg-white text-primary-blue rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            onClick={handleRedirect}
          >
            Sunum İstiyorum
          </button>
          <button
            className="px-8 py-3 border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-primary-blue transition duration-300 shadow-lg"
            onClick={handleRedirectToDetails}
          >
            Detaylı Bilgi
          </button>
        </div>
        {/* Placeholder for an image or video */}
        <div className="mt-16">
          <img
            src=""
            alt="Product Screenshot"
            className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
