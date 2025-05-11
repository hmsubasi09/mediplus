'use client';

import React from 'react';
import Image from 'next/image';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Bölümü */}
      <div className="bg-gradient-to-r from-[#A6112B] to-[#BD2640] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Yeseva_One']">
            Hakkımızda
          </h1>
          <p className="text-xl text-white mb-8 font-['Work_Sans'] max-w-3xl mx-auto">
            MediPlus, modern tıp anlayışı ve hasta odaklı hizmet yaklaşımıyla Türkiye'nin önde gelen sağlık merkezlerinden biridir.
          </p>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Vizyon ve Misyon */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#A6112B] mb-4 font-['Yeseva_One']">Vizyonumuz</h2>
              <p className="text-black leading-relaxed font-['Work_Sans']">
                Türkiye'de ve dünyada sağlık sektöründe öncü bir kurum olarak, 
                en yüksek kalitede sağlık hizmetini sunmak ve toplumun sağlık 
                standartlarını yükseltmek için sürekli gelişim göstermektir.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#A6112B] mb-4 font-['Yeseva_One']">Misyonumuz</h2>
              <p className="text-black leading-relaxed font-['Work_Sans']">
                Etik değerler ışığında, güvenilir ve kaliteli sağlık hizmetini, 
                deneyimli kadromuz ve modern teknolojimizle hastalarımıza sunmak, 
                onların sağlıklı bir yaşam sürmelerine katkıda bulunmaktır.
              </p>
            </div>
          </div>

          {/* Hakkımızda Metni */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#A6112B] mb-6 text-center font-['Yeseva_One']">
              MediPlus Sağlık Merkezi
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-black mb-6 leading-relaxed font-['Work_Sans']">
                2005 yılında İstanbul'da kurulan MediPlus Sağlık Merkezi, günümüzde 
                20.000 m²'lik kapalı alanı, son teknoloji tıbbi cihazları ve alanında 
                uzman 150'den fazla doktoru ile hizmet vermektedir.
              </p>
              <p className="text-black mb-6 leading-relaxed font-['Work_Sans']">
                Hastanemizde, kardiyoloji, nöroloji, ortopedi, çocuk hastalıkları, 
                kadın doğum, göz hastalıkları, KBB ve daha birçok branşta uzman kadromuzla 
                7/24 kesintisiz sağlık hizmeti sunuyoruz.
              </p>
              <p className="text-black leading-relaxed font-['Work_Sans']">
                Hasta memnuniyetini öncelik olarak benimseyen kurumumuz, uluslararası 
                kalite standartlarına uygun hizmet anlayışıyla JCI akreditasyonuna sahiptir.
              </p>
            </div>
          </div>

          {/* Rakamlarla MediPlus */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-[#A6112B] mb-10 text-center font-['Yeseva_One']">
              Rakamlarla MediPlus
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#A6112B] mb-2 font-['Yeseva_One']">150+</div>
                <p className="text-black font-['Work_Sans']">Uzman Doktor</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#A6112B] mb-2 font-['Yeseva_One']">25</div>
                <p className="text-black font-['Work_Sans']">Tıbbi Branş</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#A6112B] mb-2 font-['Yeseva_One']">100K+</div>
                <p className="text-black font-['Work_Sans']">Yıllık Hasta</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#A6112B] mb-2 font-['Yeseva_One']">7/24</div>
                <p className="text-black font-['Work_Sans']">Hizmet</p>
              </div>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#A6112B] mb-10 text-center font-['Yeseva_One']">
              Değerlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#A6112B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#A6112B] mb-3 font-['Work_Sans']">Hasta Odaklılık</h3>
                <p className="text-black font-['Work_Sans']">
                  Hastalarımızın ihtiyaçlarını önceleyerek, onların sağlık ve konforunu 
                  en üst düzeyde tutmayı hedefliyoruz.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#A6112B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#A6112B] mb-3 font-['Work_Sans']">Kalite ve Güvenilirlik</h3>
                <p className="text-black font-['Work_Sans']">
                  Uluslararası kalite standartlarına uygun, güvenilir ve etik 
                  sağlık hizmetleri sunuyoruz.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#A6112B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#A6112B] mb-3 font-['Work_Sans']">Yenilikçilik</h3>
                <p className="text-black font-['Work_Sans']">
                  Tıbbi teknolojideki gelişmeleri yakından takip ederek, 
                  en güncel tedavi yöntemlerini hastalarımızla buluşturuyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Kalite Belgeleri */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-[#A6112B] mb-10 text-center font-['Yeseva_One']">
              Kalite Belgeleri ve Akreditasyonlar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-3xl font-bold text-[#A6112B]">JCI</div>
                </div>
                <p className="text-sm text-black font-['Work_Sans']">Joint Commission International</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-3xl font-bold text-[#A6112B]">ISO</div>
                </div>
                <p className="text-sm text-black font-['Work_Sans']">ISO 9001:2015</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-3xl font-bold text-[#A6112B]">TSE</div>
                </div>
                <p className="text-sm text-black font-['Work_Sans']">Hizmet Yeri Yeterlilik Belgesi</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-20 flex items-center justify-center mb-3">
                  <div className="text-3xl font-bold text-[#A6112B]">OHSAS</div>
                </div>
                <p className="text-sm text-black font-['Work_Sans']">OHSAS 18001</p>
              </div>
            </div>
          </div>

          {/* İletişim CTA */}
          <div className="text-center bg-gradient-to-r from-[#A6112B] to-[#BD2640] p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4 font-['Yeseva_One']">
              Sağlığınız İçin Buradayız
            </h2>
            <p className="text-white mb-6 font-['Work_Sans'] max-w-2xl mx-auto">
              Uzman kadromuz ve modern altyapımızla sizlere en iyi sağlık hizmetini 
              sunmak için hazırız. Randevu almak veya bilgi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/randevu-al"
                className="px-6 py-3 bg-white text-[#A6112B] rounded-md font-medium hover:bg-gray-100 font-['Work_Sans'] inline-block"
              >
                Randevu Al
              </a>
              <a
                href="tel:02121234567"
                className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-[#A6112B] transition-colors font-['Work_Sans'] inline-block"
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}