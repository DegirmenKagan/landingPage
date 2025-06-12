import React from "react";

const BannerCard: React.FC = () => {
  return (
    // Ana Kapsayıcı: transform-style-preserve-3d ve grup hover etkisi
    <div className="relative w-[900px] h-[400px] cursor-pointer transform-style-preserve-3d transition-transform duration-800 ease-in-out group hover:rotate-y-180">
      {/* Ön Yüz */}
      <div
        className="absolute inset-0 backface-hidden rounded-[20px] shadow-lg overflow-hidden
                  bg-white flex items-center justify-between p-10"
      >
        <div className="flex-1 pr-10">
          <div className="flex items-center mb-7">
            <div className="w-[50px] h-[50px] rounded-full bg-[#4a90e2] flex items-center justify-center mr-[15px]">
              <span className="text-white font-bold">by</span>
            </div>
            <span className="text-3xl font-bold text-[#4a90e2]">buyapar</span>
            <span className="text-gray-400 ml-[10px] text-base">
              MARTI YAZILIM
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-800 leading-tight mb-5">
            Basitliğin Gücü <span className="text-[#4a90e2]">buyapar</span> ile
            <br />
            Dijital Dönüşümü Yaşayın,
            <br />
            Başarıya Kolaylıkla Ulaşın
          </div>
          <div className="flex gap-5 mb-5">
            <div className="w-[70px] h-[70px] rounded-full bg-[#e74c3c] flex items-center justify-center text-white font-bold">
              ⚖️
            </div>
            <div className="w-[70px] h-[70px] rounded-full bg-[#e74c3c] flex items-center justify-center text-white font-bold">
              🏛️
            </div>
          </div>
          <div className="text-lg text-gray-600 leading-normal">
            UYAP Avukat Portal ile tam entegre
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-[200px] h-[300px] bg-gradient-to-b from-[#4a90e2] to-[#357abd] rounded-[15px] p-5 text-white relative">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-bold">HIZLI İŞLEMLER</span>
              <div className="w-[30px] h-[30px] bg-[#ff6b35] rounded-full flex items-center justify-center">
                ⚡
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-1">
                Tüm Hızlı İşlemler (1798)
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-2">
                Masaj Haccı (889)
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-3">
                Tashınak Haccı (8)
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-4">
                Arap Haccı (1)
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-5">
                Postal Gönderi
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-6">
                İcra Dosya Alımı
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-7">
                Banka 891 (818)
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-8">
                SGK Maaşık
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-9">
                21'e Göre Tebliğ
              </div>
              <div className="h-[25px] rounded-xl flex items-center pl-2.5 text-xs font-bold bg-chart-bar-10">
                Radiyesi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arka Yüz */}
      <div
        className="absolute inset-0 backface-hidden rounded-[20px] shadow-lg overflow-hidden transform rotate-y-180
                  bg-gradient-to-br from-[#4a90e2] to-[#357abd] flex items-center justify-between p-10"
      >
        <div className="absolute inset-0 opacity-10 bg-radial-gradient-white-transparent pointer-events-none"></div>{" "}
        {/* Dots Pattern */}
        <div className="flex-1 pr-10 text-white">
          <div className="flex items-center mb-7">
            <div className="w-[50px] h-[50px] rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-[15px]">
              <span className="text-white font-bold">im</span>
            </div>
            <span className="text-3xl font-bold text-white">icraMatik</span>
            <span className="text-white text-opacity-70 ml-[10px] text-base">
              MARTI YAZILIM
            </span>
          </div>
          <div className="text-3xl font-bold text-white leading-tight mb-5">
            icraMatik Hibrit Kurumsal'ın
            <br />
            Güvenilir ve Kapsamlı Veri Analizleri
            <br />
            ile İşletme Performansınızı İyileştirin.
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div
            className="w-[250px] h-[200px] bg-gradient-to-br from-[#b8860b] to-[#daa520] rounded-[15px] relative
                      transform perspective-[500px] rotate-x-10 -rotate-y-5 shadow-lg"
          >
            <div className="absolute top-5 left-5 right-5 h-[3px] bg-[#8b7355] rounded-[2px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-600 rounded-full"></div>
            <div className="absolute top-[-20px] right-[-30px]">
              <div className="w-[60px] h-[80px] bg-file-blue rounded-[5px] mb-[5px] relative animate-float-file"></div>
              <div className="w-[60px] h-[80px] bg-file-green rounded-[5px] mb-[5px] relative animate-float-file animation-delay-500 ml-[10px]"></div>
              <div className="w-[60px] h-[80px] bg-file-yellow rounded-[5px] mb-[5px] relative animate-float-file animation-delay-1000 ml-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
