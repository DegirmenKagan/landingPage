import React from "react";
import {
  ChartNoAxesCombined,
  ClockFading,
  MessageSquareHeart,
  SquareDashedMousePointer,
  TimerReset,
} from "lucide-react"; // Example icons, install lucide-react if you want these

// You'll need to install lucide-react if you want to use these icons:
// npm install lucide-react

const featuresData = [
  {
    icon: <ClockFading className="w-10 h-10 text-primary-blue" />,
    title: "Yeniliklere Hızlı Entegrasyon",
    description:
      "Adalet Bakanlığı'nın uygulamaya alacağı her türlü gelişme ve iyileştirmelerin takibi avukatlarımız tarafından yapılır. Bir hukukçu gözüyle analiz edilen bu yenilikler, avukatların gereksinim duyacağı özellikler de belirlenerek yazılım ekibine iletilir.",
  },
  {
    icon: <ChartNoAxesCombined className="w-10 h-10 text-primary-blue" />,
    title: "Profesyonel Ekip",
    description:
      "Martı Yazılım ailesine katılan her bir ekip üyesi, üstün hizmet kalitesini hedefleyen üç aylık eğitim ve oryantasyon sürecini tamamladıktan sonra sizlere hizmet vermeye başlar. Martı Yazılım bünyesinde eğitim anlayışı sürekli ve kesintisizdir.",
  },
  {
    icon: <TimerReset className="w-10 h-10 text-primary-blue" />,
    title: "Hız Kazandıran Bütünleşik Yapı",
    description:
      "Hız ve verimliliğin sizin için ne denli önemli olduğunu biliyoruz. Bu sebeple; yazılımlarımızın hız kazandıran bütünleşik yapısı sayesinde her zaman önde olmanızı hedefliyoruz.",
  },
  {
    icon: <SquareDashedMousePointer className="w-10 h-10 text-primary-blue" />, // Repeat for more features
    title: "Kullanıcı Dostu Arayüz",
    description:
      "Martı Yazılım program arayüzlerini tasarlarken tek bir bakışta hızlıca aranılan bilgiye ulaşmayı hedefler. Mümkün olduğunca sade tutulan program arayüzleri sayesinde 'Yeni bir programa adapte olmak' endişesini ortadan kaldırır.",
  },
  {
    icon: <MessageSquareHeart className="w-10 h-10 text-primary-blue" />, // Repeat for more features
    title: "Kolay Ulaşılabilir, Güler Yüzlü Hizmet",
    description:
      "Hafta içi tüm günler 08:00-18:00; Cumartesi günü 10:00-16:00 saatleri arasında ihtiyaç duyduğunuz her an hızlıca bize ulaşabilir, işlemlerinizle ilgili destek alabilirsiniz.",
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
