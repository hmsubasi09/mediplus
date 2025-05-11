'use client';

import React, { useState } from 'react';

export default function ProfilPage() {
  // Kişisel Bilgiler (Sabit)
  const personalInfo = {
    tcKimlik: '12345678910',
    ad: 'Ali',
    soyad: 'Yılmaz',
    kanGrubu: 'A+',
    dogumTarihi: '15/05/1990'
  };
  
  // İletişim Bilgileri (Güncellenebilir)
  const [contactInfo, setContactInfo] = useState({
    email: 'ali.yilmaz@email.com',
    telefon: '0532 123 45 67',
    password: '********'
  });
  
  // Düzenleme modları
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  
  // Geçici değerler
  const [tempEmail, setTempEmail] = useState(contactInfo.email);
  const [tempPhone, setTempPhone] = useState(contactInfo.telefon);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // E-posta güncelleme
  const handleEmailUpdate = () => {
    setContactInfo({ ...contactInfo, email: tempEmail });
    setEditEmail(false);
  };
  
  // Telefon güncelleme
  const handlePhoneUpdate = () => {
    setContactInfo({ ...contactInfo, telefon: tempPhone });
    setEditPhone(false);
  };
  
  // Şifre güncelleme
  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      setContactInfo({ ...contactInfo, password: '********' });
      setEditPassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Yeni şifreler eşleşmiyor!');
    }
  };
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sol taraf - Kişisel Bilgiler */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Work_Sans']">
              Kişisel Bilgiler
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  TC Kimlik No
                </label>
                <div className="bg-gray-100 p-3 rounded-md">
                  <span className="text-black font-['Work_Sans']">{personalInfo.tcKimlik}</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Ad
                </label>
                <div className="bg-gray-100 p-3 rounded-md">
                  <span className="text-black font-['Work_Sans']">{personalInfo.ad}</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Soyad
                </label>
                <div className="bg-gray-100 p-3 rounded-md">
                  <span className="text-black font-['Work_Sans']">{personalInfo.soyad}</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Kan Grubu
                </label>
                <div className="bg-gray-100 p-3 rounded-md">
                  <span className="text-black font-['Work_Sans']">{personalInfo.kanGrubu}</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Doğum Tarihi
                </label>
                <div className="bg-gray-100 p-3 rounded-md">
                  <span className="text-black font-['Work_Sans']">{personalInfo.dogumTarihi}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sağ taraf - İletişim Bilgileri */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Work_Sans']">
              İletişim Bilgileri
            </h2>
            <div className="space-y-4">
              {/* E-posta */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  E-posta
                </label>
                {editEmail ? (
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-md text-black font-['Work_Sans'] focus:outline-none focus:ring-2 focus:ring-[#A6112B]"
                    />
                    <button
                      onClick={handleEmailUpdate}
                      className="px-4 py-2 bg-[#A6112B] text-white rounded-md hover:bg-[#BD2640] font-['Work_Sans']"
                    >
                      Kaydet
                    </button>
                    <button
                      onClick={() => {
                        setEditEmail(false);
                        setTempEmail(contactInfo.email);
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 font-['Work_Sans']"
                    >
                      İptal
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <span className="text-black font-['Work_Sans']">{contactInfo.email}</span>
                    <button
                      onClick={() => setEditEmail(true)}
                      className="px-3 py-1 bg-[#A6112B] text-white text-sm rounded hover:bg-[#BD2640] font-['Work_Sans']"
                    >
                      Güncelle
                    </button>
                  </div>
                )}
              </div>
              
              {/* Telefon */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Telefon
                </label>
                {editPhone ? (
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={tempPhone}
                      onChange={(e) => setTempPhone(e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-md text-black font-['Work_Sans'] focus:outline-none focus:ring-2 focus:ring-[#A6112B]"
                    />
                    <button
                      onClick={handlePhoneUpdate}
                      className="px-4 py-2 bg-[#A6112B] text-white rounded-md hover:bg-[#BD2640] font-['Work_Sans']"
                    >
                      Kaydet
                    </button>
                    <button
                      onClick={() => {
                        setEditPhone(false);
                        setTempPhone(contactInfo.telefon);
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 font-['Work_Sans']"
                    >
                      İptal
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <span className="text-black font-['Work_Sans']">{contactInfo.telefon}</span>
                    <button
                      onClick={() => setEditPhone(true)}
                      className="px-3 py-1 bg-[#A6112B] text-white text-sm rounded hover:bg-[#BD2640] font-['Work_Sans']"
                    >
                      Güncelle
                    </button>
                  </div>
                )}
              </div>
              
              {/* Şifre */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1 font-['Work_Sans']">
                  Şifre
                </label>
                {editPassword ? (
                  <div className="space-y-2">
                    <input
                      type="password"
                      placeholder="Mevcut Şifre"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md text-black font-['Work_Sans'] focus:outline-none focus:ring-2 focus:ring-[#A6112B]"
                    />
                    <input
                      type="password"
                      placeholder="Yeni Şifre"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md text-black font-['Work_Sans'] focus:outline-none focus:ring-2 focus:ring-[#A6112B]"
                    />
                    <input
                      type="password"
                      placeholder="Yeni Şifre (Tekrar)"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md text-black font-['Work_Sans'] focus:outline-none focus:ring-2 focus:ring-[#A6112B]"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handlePasswordUpdate}
                        className="px-4 py-2 bg-[#A6112B] text-white rounded-md hover:bg-[#BD2640] font-['Work_Sans']"
                      >
                        Kaydet
                      </button>
                      <button
                        onClick={() => {
                          setEditPassword(false);
                          setCurrentPassword('');
                          setNewPassword('');
                          setConfirmPassword('');
                        }}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 font-['Work_Sans']"
                      >
                        İptal
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <span className="text-black font-['Work_Sans']">{contactInfo.password}</span>
                    <button
                      onClick={() => setEditPassword(true)}
                      className="px-3 py-1 bg-[#A6112B] text-white text-sm rounded hover:bg-[#BD2640] font-['Work_Sans']"
                    >
                      Güncelle
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Ek Bilgi */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700 text-sm font-['Work_Sans']">
            <strong>Not:</strong> Kişisel bilgilerinizde değişiklik yapmak için lütfen müşteri hizmetlerimizle iletişime geçin.
          </p>
        </div>
      </div>
    </div>
  );
}