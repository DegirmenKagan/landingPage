import React from "react";
import { BookOpenText, Lightbulb, Rocket, ShieldCheck } from "lucide-react"; // Example icons, install lucide-react if you want these

// You'll need to install lucide-react if you want to use these icons:
// npm install lucide-react

const featuresData = [
  {
    icon: <Lightbulb className="w-10 h-10 text-primary-blue" />,
    title: "Yeniliklere Hızlı Entegrasyon",
    description:
      "Adalet Bakanlığı'nın uygulamaya alacağı her türlü gelişme ve iyileştirmelerin takibi avukatlarımız tarafından yapılır. Bir hukukçu gözüyle analiz edilen bu yenilikler, avukatların gereksinim duyacağı özellikler de belirlenerek yazılım ekibine iletilir.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary-blue" />,
    title: "Blazing Fast Performance",
    description:
      "Experience lightning-fast speeds and seamless operations with our optimized infrastructure.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary-blue" />,
    title: "Top-tier Security",
    description:
      "Your data is safe with us. We employ the highest security standards to protect your information.",
  },
  {
    icon: <BookOpenText className="w-10 h-10 text-primary-blue" />, // Repeat for more features
    title: "User-Friendly Interface",
    description:
      "Intuitive design that makes complex tasks simple and enjoyable for everyone.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-dark-gray mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
