'use client';

import React from 'react';
import Link from 'next/link';

// Randevu tipi tanımı
type RandevuTipi = {
  id: number;
  ad: string;
  aciklama: string;
  route: string;
};

// Örnek randevu tipleri
const randevuTipleri: RandevuTipi[] = [
  {
    id: 1,
    ad: 'Poliklinik Randevusu',
    aciklama: 'Uzman doktorlarımızdan muayene randevusu alın.',
    route: '/randevu-al'
  },
  {
    id: 2,
    ad: 'Kontrol Randevusu',
    aciklama: 'Daha önce muayene olduğunuz doktordan kontrol randevusu alın.',
    route: '/randevu-al'
  },
  {
    id: 3,
    ad: 'Tetkik Randevusu',
    aciklama: 'Laboratuvar testleri, röntgen, ultrason ve diğer tetkikler için randevu alın.',
    route: '/randevu-al'
  },
  {
    id: 4,
    ad: 'Online Konsültasyon',
    aciklama: 'Doktorunuzla görüntülü görüşme yaparak zaman kazanın.',
    route: '/randevu-al'
  }
];

export default function RandevuTipleriPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {randevuTipleri.map((tip) => (
            <Link key={tip.id} href={tip.route} className="block no-underline">
              <div className="border-2 border-gray-200 hover:border-[#A6112B] rounded-lg p-6 transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-black mb-2 font-['Work_Sans']">{tip.ad}</h2>
                <p className="text-black font-['Work_Sans']">{tip.aciklama}</p>
                <div className="mt-4 flex justify-end">
                  <span className="text-[#A6112B] font-medium font-['Work_Sans'] flex items-center">
                    Devam Et
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4 font-['Work_Sans']">Randevu İptal ve Değişiklik Bilgilendirmesi</h3>
          <ul className="list-disc pl-5 space-y-2 font-['Work_Sans'] text-black">
            <li>Randevunuzu, randevu saatinden en az 4 saat öncesine kadar iptal edebilir veya değiştirebilirsiniz.</li>
            <li>İptal etmediğiniz ve gelmediğiniz randevular için tekrar randevu almak istediğinizde 15 gün beklemeniz gerekebilir.</li>
            <li>Acil durumlarda lütfen çağrı merkezimizi arayınız: <span className="font-medium">(0212) 123 45 67</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}