'use client';

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#A6112B] font-['Yeseva_One']">
                MediPlus
              </div>
            </div>
            {/* Masaüstü menü */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="font-medium text-[#A6112B] hover:text-[#BD2640] font-['Work_Sans']">
                Anasayfa
              </a>
              <a href="/randevu-al" className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
                Randevu Al
              </a>
              <a href="/randevularim" className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
                Randevularım
              </a>
              <a href="/profil" className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
                Profil
              </a>
              <a href="/hakkimizda" className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
                Hakkımızda
              </a>
            </nav>
            <div className="hidden md:flex items-center">
              <a
                href="/giris"
                className="px-4 py-2 rounded-md bg-[#A6112B] text-white hover:bg-[#BD2640] transition-colors font-['Work_Sans']"
              >
                Giriş Yap
              </a>
            </div>
            {/* Mobil menü butonu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#A6112B]"
              >
                {isMenuOpen ? (
                  <span className="text-xl">✕</span>
                ) : (
                  <span className="text-xl">☰</span>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobil menü */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-2 pt-2 pb-4 shadow-lg">
            <a href="/" className="block py-2 px-4 text-[#A6112B] font-medium font-['Work_Sans']">
              Anasayfa
            </a>
            <a href="/randevu-al" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Randevu Al
            </a>
            <a href="/randevularim" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Randevularım
            </a>
            <a href="/profil" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Profil
            </a>
            <a href="/hakkimizda" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Hakkımızda
            </a>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/giris"
                className="block px-4 py-2 rounded-md bg-[#A6112B] text-white text-center hover:bg-[#BD2640] transition-colors font-['Work_Sans']"
              >
                Giriş Yap
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Bölümü */}
      <section className="bg-gradient-to-r from-[#A6112B] to-[#BD2640] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Yeseva_One']">
                Sağlığınız İçin Yanınızdayız
              </h1>
              <p className="text-lg text-white mb-6 font-['Work_Sans']">
                Modern tıp ve uzman kadromuz ile sağlığınızı en üst seviyede tutmak için çalışıyoruz.
              </p>
              <a
                href="/randevu-al"
                className="px-6 py-3 bg-white text-[#A6112B] rounded-md font-medium hover:bg-gray-100 transition-colors font-['Work_Sans'] inline-block"
              >
                Randevu Al
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://placehold.co/500x300/ffffff/A6112B?text=MediPlus" 
                alt="Sağlık hizmetleri" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hoşgeldiniz Bölümü */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#A6112B] font-bold mb-2 font-['Work_Sans'] text-lg">
            MEDİPLUS'A HOŞGELDİNİZ
          </h2>
          <h3 className="text-3xl font-medium text-[#A6112B] mb-4 font-['Yeseva_One']">
            Sağlığınız için doğru adres
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-['Work_Sans']">
            Sağlığınız bizim için en az sizler ve sevdikleriniz kadar önemli.
            Hizmetlerimizden faydalanmak ve muayene olmak için hemen randevu alın!
          </p>
          <a
            href="/hakkimizda"
            className="inline-block px-6 py-3 bg-[#FF98AA] text-gray-800 rounded-full font-medium hover:bg-pink-300 transition-colors font-['Work_Sans']"
          >
            Hakkımızda Daha Fazlasını Öğrenin
          </a>
        </div>
      </section>

      {/* Çağrı Bölümü */}
      <section className="py-12 bg-[#A6112B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Yeseva_One']">
            Sağlığınızı Ertelemeyin!
          </h2>
          <p className="text-white mb-6 font-['Work_Sans']">
            Uzman kadromuzla sağlıklı bir yaşam için hemen randevu alın.
          </p>
          <a
            href="/randevu-al"
            className="inline-block px-6 py-3 bg-white text-[#A6112B] rounded-md font-medium hover:bg-gray-100 transition-colors font-['Work_Sans']"
          >
            Hemen Randevu Al
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A6112B] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 font-['Yeseva_One']">MediPlus</h3>
              <p className="text-white/80 font-['Work_Sans']">
                Sağlığınız için en kaliteli hizmeti sunuyoruz.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-2 font-['Yeseva_One']">İletişim</h4>
              <p className="text-white/80 font-['Work_Sans']">
                İstanbul Cad. No:123, Beşiktaş<br />
                (0212) 123 45 67<br />
                info@mediplus.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 font-['Yeseva_One']">Çalışma Saatleri</h4>
              <p className="text-white/80 font-['Work_Sans']">
                Pazartesi - Cuma: 08:00 - 20:00<br />
                Cumartesi: 09:00 - 18:00<br />
                Pazar: 10:00 - 16:00
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6 text-center">
            <p className="text-white/80 font-['Work_Sans']">
              &copy; {new Date().getFullYear()} MediPlus Sağlık Hizmetleri. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}