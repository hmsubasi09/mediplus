'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Tip tanımlamaları
type RandevuDurumu = 'onaylandı' | 'beklemede' | 'tamamlandı' | 'iptal edildi';

type Randevu = {
  id: number;
  doktorAd: string;
  doktorSoyad: string;
  doktorUnvan: string;
  bolum: string;
  tarih: string; // ISO format: YYYY-MM-DD
  saat: string;
  durum: RandevuDurumu;
};

// Örnek randevular
const randevular: Randevu[] = [
  {
    id: 101,
    doktorAd: 'Mehmet',
    doktorSoyad: 'Yılmaz',
    doktorUnvan: 'Prof. Dr.',
    bolum: 'Kardiyoloji',
    tarih: '2025-05-15',
    saat: '10:30',
    durum: 'onaylandı',
  },
  {
    id: 102,
    doktorAd: 'Ayşe',
    doktorSoyad: 'Demir',
    doktorUnvan: 'Doç. Dr.',
    bolum: 'Nöroloji',
    tarih: '2025-05-20',
    saat: '14:00',
    durum: 'beklemede',
  },
];

export default function RandevularimPage() {
  // Tarih formatını Türkçe olarak biçimlendirir
  const formatDate = (dateStr: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateStr).toLocaleDateString('tr-TR', options);
  };

  // Randevu durumuna göre sınıf belirler
  const getDurumClass = (durum: RandevuDurumu): string => {
    switch (durum) {
      case 'onaylandı':
        return 'bg-green-100 text-green-800';
      case 'beklemede':
        return 'bg-yellow-100 text-yellow-800';
      case 'tamamlandı':
        return 'bg-blue-100 text-blue-800';
      case 'iptal edildi':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Randevu Listesi */}
        {randevular.length > 0 ? (
          <div className="space-y-4">
            {randevular.map((randevu) => (
              <div 
                key={randevu.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black font-['Work_Sans']">
                      {randevu.doktorUnvan} {randevu.doktorAd} {randevu.doktorSoyad}
                    </h3>
                    <p className="text-black font-['Work_Sans']">{randevu.bolum}</p>
                    <p className="mt-2 font-['Work_Sans'] text-black">
                      <span className="font-medium">Tarih:</span> {formatDate(randevu.tarih)}
                    </p>
                    <p className="font-['Work_Sans'] text-black">
                      <span className="font-medium">Saat:</span> {randevu.saat}
                    </p>
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getDurumClass(randevu.durum)}`}>
                        {randevu.durum}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
                    {(randevu.durum === 'onaylandı' || randevu.durum === 'beklemede') && (
                      <button
                        className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 font-['Work_Sans']"
                      >
                        İptal Et
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-black mb-2 font-['Work_Sans']">Randevu Bulunamadı</h3>
            <p className="text-black mb-6 font-['Work_Sans']">
              Henüz randevu almadınız veya randevularınız bulunamadı.
            </p>
            <Link
              href="/randevu-al"
              className="px-6 py-3 bg-[#A6112B] text-white rounded-md font-medium hover:bg-[#BD2640] inline-block font-['Work_Sans']"
            >
              Randevu Al
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}