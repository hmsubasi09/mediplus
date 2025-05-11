'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LayoutProps = {
  children: ReactNode;
};

export default function ProfilLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  
  // Mobil menü durumu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#A6112B] font-['Yeseva_One']">
                MediPlus
              </Link>
            </div>
            {/* Masaüstü menü */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']"
              >
                Anasayfa
              </Link>
              <Link 
                href="/randevu-al" 
                className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']"
              >
                Randevu Al
              </Link>
              <Link 
                href="/randevularim" 
                className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']"
              >
                Randevularım
              </Link>
              <Link 
                href="/profil" 
                className="font-medium text-[#A6112B] hover:text-[#BD2640] font-['Work_Sans']"
              >
                Profil
              </Link>
              <Link 
                href="/hakkimizda" 
                className="font-medium text-gray-700 hover:text-[#BD2640] font-['Work_Sans']"
              >
                Hakkımızda
              </Link>
            </nav>
            <div className="hidden md:flex items-center">
              <Link
                href="/giris"
                className="px-4 py-2 rounded-md bg-[#A6112B] text-white hover:bg-[#BD2640] transition-colors font-['Work_Sans']"
              >
                Çıkış Yap
              </Link>
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
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-medium font-['Work_Sans']">
              Anasayfa
            </Link>
            <Link href="/randevu-al" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Randevu Al
            </Link>
            <Link href="/randevularim" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Randevularım
            </Link>
            <Link href="/profil" className="block py-2 px-4 text-[#A6112B] font-medium font-['Work_Sans']">
              Profil
            </Link>
            <Link href="/hakkimizda" className="block py-2 px-4 text-gray-700 hover:text-[#BD2640] font-['Work_Sans']">
              Hakkımızda
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/giris"
                className="block px-4 py-2 rounded-md bg-[#A6112B] text-white text-center hover:bg-[#BD2640] transition-colors font-['Work_Sans']"
              >
                Çıkış Yap
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Başlık Bölümü */}
      <section className="bg-gradient-to-r from-[#A6112B] to-[#BD2640] py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Yeseva_One']">
            Profilim
          </h1>
          <p className="text-lg text-white mb-4 font-['Work_Sans']">
            Kişisel ve iletişim bilgilerinizi görüntüleyin ve güncelleyin
          </p>
        </div>
      </section>

      {/* Sayfa içeriği */}
      <main className="flex-1">
        {children}
      </main>

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