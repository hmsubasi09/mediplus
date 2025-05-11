'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GirisPage() {
  const router = useRouter();
  const [tcKimlik, setTcKimlik] = useState('');
  const [sifre, setSifre] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Test için sabit değerler
  const TEST_TC = '12345678910';
  const TEST_PASSWORD = 'alperen123';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // TC Kimlik no kontrolleri
    if (!tcKimlik) {
      setError('TC Kimlik Numarası boş bırakılamaz');
      return;
    }
    
    if (tcKimlik.length !== 11) {
      setError('TC Kimlik Numarası 11 haneli olmalıdır');
      return;
    }
    
    if (!/^\d+$/.test(tcKimlik)) {
      setError('TC Kimlik Numarası sadece rakamlardan oluşmalıdır');
      return;
    }
    
    // Şifre kontrolü
    if (!sifre) {
      setError('Şifre boş bırakılamaz');
      return;
    }
    
    // Test değerleriyle karşılaştırma
    if (tcKimlik === TEST_TC && sifre === TEST_PASSWORD) {
      // Başarılı giriş
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userTC', tcKimlik);
      router.push('/randevularim');
    } else {
      setError('TC Kimlik Numarası veya Şifre hatalı');
    }
  };
  
  const handleTcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Sadece rakamları kabul et
    if (value.length <= 11) {
      setTcKimlik(value);
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo ve Başlık */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#A6112B] mb-2 font-['Yeseva_One']">
            MediPlus
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 font-['Work_Sans']">
            Giriş Yap
          </h2>
          <p className="text-gray-600 font-['Work_Sans']">
            Randevu almak ve sağlık hizmetlerimizden faydalanmak için giriş yapın
          </p>
        </div>
        
        {/* Giriş Formu */}
        <form className="bg-white shadow-lg rounded-lg p-8 space-y-6" onSubmit={handleSubmit}>
          {/* Hata Mesajı */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm font-['Work_Sans']">
              {error}
            </div>
          )}
          
          {/* TC Kimlik No */}
          <div>
            <label htmlFor="tcKimlik" className="block text-sm font-medium text-gray-700 mb-2 font-['Work_Sans']">
              TC Kimlik Numarası
            </label>
            <input
              id="tcKimlik"
              type="text"
              value={tcKimlik}
              onChange={handleTcChange}
              placeholder="11 haneli TC Kimlik Numaranız"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6112B] focus:border-transparent text-black font-['Work_Sans']"
              maxLength={11}
            />
          </div>
          
          {/* Şifre */}
          <div>
            <label htmlFor="sifre" className="block text-sm font-medium text-gray-700 mb-2 font-['Work_Sans']">
              Şifre
            </label>
            <div className="relative">
              <input
                id="sifre"
                type={showPassword ? 'text' : 'password'}
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
                placeholder="Şifreniz"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6112B] focus:border-transparent text-black font-['Work_Sans']"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Beni Hatırla ve Şifremi Unuttum */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#A6112B] focus:ring-[#A6112B] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-['Work_Sans']">
                Beni hatırla
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-[#A6112B] hover:text-[#BD2640] font-['Work_Sans']">
                Şifremi unuttum
              </a>
            </div>
          </div>
          
          {/* Giriş Butonu */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#A6112B] hover:bg-[#BD2640] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6112B] font-medium font-['Work_Sans']"
            >
              Giriş Yap
            </button>
          </div>
          
        
        </form>
        
        {/* Yardım Bölümü */}
        <div className="text-center text-sm text-gray-600 font-['Work_Sans']">
          <p>Giriş yaparken sorun mu yaşıyorsunuz?</p>
          <p>Müşteri hizmetleri: <a href="tel:02121234567" className="text-[#A6112B] hover:text-[#BD2640]">(0212) 123 45 67</a></p>
        </div>
      </div>
    </div>
  );
}