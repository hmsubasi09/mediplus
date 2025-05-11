'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Tip tanımlamaları
type Bolum = {
  id: number;
  ad: string;
};

type Doktor = {
  id: number;
  ad: string;
  soyad: string;
  unvan: string;
  bolum: string;
};

type RandevuSaati = {
  id: number;
  saat: string;
  dolu: boolean;
};

// Örnek veriler
const bolumler: Bolum[] = [
  { id: 1, ad: 'Kardiyoloji' },
  { id: 2, ad: 'Nöroloji' },
  { id: 3, ad: 'Ortopedi' },
  { id: 4, ad: 'Göz Hastalıkları' },
];

const doktorlar: Doktor[] = [
  { id: 1, ad: 'Mehmet', soyad: 'Yılmaz', unvan: 'Prof. Dr.', bolum: 'Kardiyoloji' },
  { id: 2, ad: 'Ayşe', soyad: 'Demir', unvan: 'Doç. Dr.', bolum: 'Nöroloji' },
  { id: 3, ad: 'Ali', soyad: 'Kaya', unvan: 'Uzm. Dr.', bolum: 'Ortopedi' },
  { id: 4, ad: 'Fatma', soyad: 'Şahin', unvan: 'Prof. Dr.', bolum: 'Nöroloji' },
];

// Örnek randevu saatleri
const randevuSaatleri: RandevuSaati[] = [
  { id: 1, saat: '09:00', dolu: false },
  { id: 2, saat: '09:30', dolu: true },
  { id: 3, saat: '10:00', dolu: false },
  { id: 4, saat: '10:30', dolu: false },
  { id: 5, saat: '11:00', dolu: false },
  { id: 6, saat: '11:30', dolu: true },
  { id: 7, saat: '12:00', dolu: false },
  { id: 8, saat: '14:00', dolu: false },
  { id: 9, saat: '14:30', dolu: false },
  { id: 10, saat: '15:00', dolu: true },
  { id: 11, saat: '15:30', dolu: false },
  { id: 12, saat: '16:00', dolu: false },
  { id: 13, saat: '16:30', dolu: false },
];

export default function RandevuAlPage() {
  const [selectedBolum, setSelectedBolum] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doktor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [step, setStep] = useState<number>(1); // 1: Bölüm, 2: Doktor, 3: Tarih/Saat, 4: Onay
  const [randevuSuccess, setRandevuSuccess] = useState<boolean>(false);
  
  // Bugünün tarihini alır
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Tarih formatını düzenler
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Sonraki 7 gün için tarih oluşturur
  const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    return formatDate(date);
  });
  
  // Tarih formatını Türkçe olarak biçimlendirir
  const formatDateToTR = (dateStr: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateStr).toLocaleDateString('tr-TR', options);
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const handleRandevuConfirm = () => {
    // Burada API çağrısı yapılabilir
    setRandevuSuccess(true);
  };
  
  const resetForm = () => {
    setSelectedBolum('');
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
    setStep(1);
    setRandevuSuccess(false);
  };
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* İlerleme Çubuğu */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full flex items-center">
              {[1, 2, 3, 4].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? 'bg-[#A6112B] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`flex-1 h-1 ${
                      step > stepNumber ? 'bg-[#A6112B]' : 'bg-gray-200'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Bölüm Seçimi</span>
            <span>Doktor Seçimi</span>
            <span>Tarih/Saat</span>
            <span>Onay</span>
          </div>
        </div>
        
        {randevuSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2 font-['Work_Sans']">
              Randevunuz Başarıyla Oluşturuldu!
            </h2>
            <p className="text-black mb-6 font-['Work_Sans']">
              {selectedDoctor?.unvan} {selectedDoctor?.ad} {selectedDoctor?.soyad} ile {formatDateToTR(selectedDate)} tarihinde saat {selectedTime} için randevunuz onaylandı.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-[#A6112B] text-white rounded-md hover:bg-[#BD2640] font-['Work_Sans']"
              >
                Yeni Randevu Al
              </button>
              <Link 
                href="/randevularim" 
                className="px-6 py-3 border border-[#A6112B] text-[#A6112B] rounded-md hover:bg-red-50 font-['Work_Sans']"
              >
                Randevularımı Görüntüle
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Step 1: Bölüm Seçimi */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-['Work_Sans'] text-center">
                  Randevu Almak İçin Bölüm Seçin
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {bolumler.map((bolum) => (
                    <div 
                      key={bolum.id} 
                      className={`p-4 border rounded-lg cursor-pointer hover:border-[#A6112B] text-center ${
                        selectedBolum === bolum.ad ? 'border-[#A6112B] bg-pink-50' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedBolum(bolum.ad)}
                    >
                      <h3 className="text-lg font-medium text-black font-['Work_Sans']">{bolum.ad}</h3>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedBolum}
                    className={`px-6 py-3 rounded-md font-['Work_Sans'] ${
                      selectedBolum 
                        ? 'bg-[#A6112B] text-white hover:bg-[#BD2640]' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Devam Et
                  </button>
                </div>
              </>
            )}
            
            {/* Step 2: Doktor Seçimi */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-2 text-gray-800 font-['Work_Sans'] text-center">
                  Doktor Seçin
                </h2>
                <p className="text-center mb-6 text-black font-['Work_Sans']">
                  Seçilen Bölüm: <span className="font-semibold">{selectedBolum}</span>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {doktorlar
                    .filter(doktor => doktor.bolum === selectedBolum)
                    .map(doktor => (
                      <div 
                        key={doktor.id}
                        className={`p-4 border rounded-lg cursor-pointer hover:border-[#A6112B] ${
                          selectedDoctor?.id === doktor.id ? 'border-[#A6112B] bg-pink-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedDoctor(doktor)}
                      >
                        <h4 className="font-medium text-black font-['Work_Sans']">
                          {doktor.unvan} {doktor.ad} {doktor.soyad}
                        </h4>
                        <p className="text-sm text-black font-['Work_Sans']">{doktor.bolum}</p>
                      </div>
                    ))}
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-['Work_Sans']"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDoctor}
                    className={`px-6 py-3 rounded-md font-['Work_Sans'] ${
                      selectedDoctor 
                        ? 'bg-[#A6112B] text-white hover:bg-[#BD2640]' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Devam Et
                  </button>
                </div>
              </>
            )}
            
            {/* Step 3: Tarih ve Saat Seçimi */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-2 text-gray-800 font-['Work_Sans'] text-center">
                  Tarih ve Saat Seçin
                </h2>
                <p className="text-center mb-6 text-black font-['Work_Sans']">
                  {selectedDoctor?.unvan} {selectedDoctor?.ad} {selectedDoctor?.soyad} - {selectedDoctor?.bolum}
                </p>
                
                {/* Tarih Seçimi */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-black font-['Work_Sans']">Tarih Seçin</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                    {nextSevenDays.map((date) => (
                      <div 
                        key={date}
                        className={`p-3 border rounded-lg cursor-pointer hover:border-[#A6112B] text-center ${
                          selectedDate === date ? 'border-[#A6112B] bg-pink-50' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <div className="text-sm text-black font-['Work_Sans']">
                          {new Date(date).toLocaleDateString('tr-TR', { weekday: 'short' })}
                        </div>
                        <div className="font-medium text-black font-['Work_Sans']">
                          {new Date(date).getDate()} {new Date(date).toLocaleDateString('tr-TR', { month: 'short' })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Saat Seçimi */}
                {selectedDate && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-black font-['Work_Sans']">Saat Seçin</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                      {randevuSaatleri.map((slot) => (
                        <div 
                          key={slot.id}
                          className={`p-3 border rounded-lg text-center ${
                            slot.dolu 
                              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed' 
                              : selectedTime === slot.saat 
                                ? 'border-[#A6112B] bg-pink-50 cursor-pointer' 
                                : 'border-gray-200 cursor-pointer hover:border-[#A6112B]'
                          }`}
                          onClick={() => !slot.dolu && setSelectedTime(slot.saat)}
                        >
                          <div className="font-medium text-black font-['Work_Sans']">
                            {slot.saat}
                          </div>
                          <div className="text-xs mt-1 font-['Work_Sans']">
                            {slot.dolu ? 'Dolu' : 'Müsait'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-['Work_Sans']"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-6 py-3 rounded-md font-['Work_Sans'] ${
                      selectedDate && selectedTime
                        ? 'bg-[#A6112B] text-white hover:bg-[#BD2640]' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Devam Et
                  </button>
                </div>
              </>
            )}
            
            {/* Step 4: Onay */}
            {step === 4 && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-['Work_Sans'] text-center">
                  Randevunuzu Onaylayın
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold mb-4 text-black font-['Work_Sans']">Randevu Bilgileri</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-700 w-32 font-['Work_Sans']">Bölüm:</span>
                      <span className="text-black font-['Work_Sans']">{selectedBolum}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-700 w-32 font-['Work_Sans']">Doktor:</span>
                      <span className="text-black font-['Work_Sans']">{selectedDoctor?.unvan} {selectedDoctor?.ad} {selectedDoctor?.soyad}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-700 w-32 font-['Work_Sans']">Tarih:</span>
                      <span className="text-black font-['Work_Sans']">{formatDateToTR(selectedDate)}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-700 w-32 font-['Work_Sans']">Saat:</span>
                      <span className="text-black font-['Work_Sans']">{selectedTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-sm text-black font-['Work_Sans']">
                      Randevunuzu onayladıktan sonra, detaylar e-posta adresinize gönderilecektir. Randevunuzu iptal etmek veya değiştirmek için en az 4 saat öncesinden "Randevularım" sayfasını ziyaret edin.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePreviousStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-['Work_Sans']"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleRandevuConfirm}
                    className="px-6 py-3 bg-[#A6112B] text-white rounded-md hover:bg-[#BD2640] font-['Work_Sans']"
                  >
                    Randevuyu Onayla
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}