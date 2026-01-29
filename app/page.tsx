"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ActivityGallery from "@/components/ActivityGallery";
import ImageModal from "@/components/ImageModal";
import DocumentModal from "@/components/DocumentModal";
import { 
  identity, 
  vision, 
  mission, 
  legalitasImages, 
  legalitasDocs, 
  activityCategories 
} from "@/data/siteData";

export default function Home() {
  const INITIAL_CATEGORY_COUNT = 4;
  const [visibleCategoriesCount, setVisibleCategoriesCount] = useState(INITIAL_CATEGORY_COUNT);
  const [selectedLegalitasImage, setSelectedLegalitasImage] = useState<{src: string, alt: string} | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<{url: string, name: string} | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const visibleCategories = activityCategories.slice(0, visibleCategoriesCount);
  const hasMoreCategories = visibleCategoriesCount < activityCategories.length;

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("kontak");
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleSection = entries.reduce((max, entry) => {
          return entry.intersectionRatio > max.intersectionRatio ? entry : max;
        });

        if (visibleSection.isIntersecting) {
          // Don't override if we are at the bottom (handled by scroll listener)
          if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 50) {
             setActiveSection(visibleSection.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoadMoreCategories = () => {
    setVisibleCategoriesCount(prev => Math.min(prev + 4, activityCategories.length));
  };
  
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image 
                  src="/assets/Logo/LOGO_YAYASAN.png" 
                  alt="Logo" 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 768px) 40px, 40px"
                />
              </div>
              <span className="font-bold text-lg sm:text-xl text-blue-800 tracking-tight">Nur Albab Nusantara</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              {['home', 'legalitas', 'tentang', 'kegiatan', 'kontak'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className={`transition-colors capitalize ${
                    activeSection === item ? "text-blue-600 font-bold" : "hover:text-blue-600"
                  }`}
                >
                  {item === 'home' ? 'Beranda' : item === 'tentang' ? 'Tentang Kami' : item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
                aria-label="Menu"
              >
                 {isMobileMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 ) : (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                 )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 top-16 z-40 animate-fadeIn">
            <div className="px-4 pt-2 pb-6 space-y-2">
               {['home', 'legalitas', 'tentang', 'kegiatan', 'kontak'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    activeSection === item ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {item === 'home' ? 'Beranda' : item === 'tentang' ? 'Tentang Kami' : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-center mb-6">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 shadow-xl rounded-full bg-white p-2">
                 <Image 
                  src="/assets/Logo/LOGO_YAYASAN.png" 
                  alt="Logo Besar" 
                  fill 
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight">
              Yayasan <span className="text-blue-600">Nur Albab</span> Nusantara
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Meneruskan cinta kebaikan, ilmu, akhlak, dan pengabdian kepada sesama. 
              Membangun generasi penerus yang beriman dan berilmu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kegiatan" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-transform hover:scale-105">
                Lihat Kegiatan
              </a>
              <a href="#kontak" className="inline-flex justify-center items-center px-6 py-3 border border-blue-200 text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 shadow-sm transition-transform hover:scale-105">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="legalitas" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Transparansi & Kepercayaan</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Legalitas Yayasan</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Yayasan Nur Albab Nusantara resmi berbadan hukum dan terdaftar di kementerian terkait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="md:col-span-2 flex justify-end">
              <p className="text-sm text-gray-500 italic flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Klik gambar untuk memperbesar
              </p>
            </div>
            {legalitasImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[3/4] md:aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedLegalitasImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium text-lg">{img.alt}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                   <span className="p-3 bg-white/30 backdrop-blur-md rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                   </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 sm:p-10 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Dokumen Resmi Lainnya</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {legalitasDocs.map((doc, idx) => (
                <li key={idx} className="flex flex-col bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="flex items-center p-4 flex-grow">
                    <div className="bg-red-100 p-2 rounded-lg mr-4 group-hover:bg-red-200 transition-colors flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-700 text-sm sm:text-base line-clamp-2">{doc.name}</span>
                  </div>
                  <div className="flex border-t border-gray-100 divide-x divide-gray-100">
                     <button 
                      onClick={() => setSelectedDocument({url: doc.url, name: doc.name})}
                      className="flex-1 flex items-center justify-center py-2.5 text-xs font-semibold text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      Pratinjau
                    </button>
                    <a 
                      href={doc.url} 
                      download
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center py-2.5 text-xs font-semibold text-gray-500 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Unduh
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Tentang Nur Albab</h2>
              <div className="prose prose-lg prose-blue text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Nama <strong>Nur Albab</strong> mengandung makna yang mendalam. "Nur" diambil dari nama KH. M. Nur, melambangkan cahaya keteladanan, kebijaksanaan, dan keimanan. 
                  "Albab" merepresentasikan generasi penerus sebagai simbol kesinambungan warisan masa lalu dan harapan masa depan.
                </p>
                <p>
                  Secara historis, kantor yayasan ini berdiri di tempat yang penuh makna, bekas tempat tinggal kakek KH.M. Nur dan nenek Mardiyah. 
                  Tempat ini dahulu menjadi pusat kegiatan mengaji dan pembelajaran agama bagi masyarakat sekitar.
                </p>
              </div>

              <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 ring-1 ring-black/5">
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b border-gray-100 pb-4">Identitas Yayasan</h3>
                <dl className="space-y-4 text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Tokoh Pendiri</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.founder}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Ketua Yayasan</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.chairman}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Wakil Yayasan</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.viceChairman}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Sekretaris</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.secretary}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Bendahara</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.treasurer}</dd>
                  </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Tanggal Dibentuk</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.established}</dd>
                  </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-gray-500 sm:w-1/3">Alamat</dt>
                    <dd className="font-medium text-gray-900 sm:w-2/3">{identity.address}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="space-y-10">
               <div className="bg-yellow-50 p-8 sm:p-10 rounded-3xl border border-yellow-100 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50 blur-3xl"></div>
                 <h3 className="text-2xl font-bold text-yellow-800 mb-6 relative z-10 flex items-center gap-2">
                    <span className="w-8 h-1 bg-yellow-500 rounded-full"></span>
                    Visi
                 </h3>
                 <p className="text-yellow-900/90 text-lg leading-relaxed italic relative z-10">"{vision}"</p>
               </div>

               <div className="bg-blue-50 p-8 sm:p-10 rounded-3xl border border-blue-100 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
                 <h3 className="text-2xl font-bold text-blue-800 mb-8 relative z-10 flex items-center gap-2">
                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                    Misi
                 </h3>
                 <ul className="space-y-6 relative z-10">
                   {mission.map((item, i) => (
                     <li key={i} className="flex items-start group">
                       <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">{i + 1}</span>
                       <span className="text-blue-900/80 text-lg leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kegiatan" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold tracking-wide uppercase text-sm">Aksi Nyata</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Kegiatan Kami</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Berbagai program sosial dan keagamaan yang kami jalankan untuk umat.
            </p>
          </div>

          <div className="space-y-12">
            {visibleCategories.map((category, idx) => (
              <ActivityGallery 
                key={idx}
                title={category.title}
                description={category.description}
                images={category.images}
              />
            ))}
          </div>

          {hasMoreCategories && (
            <div className="mt-16 text-center">
              <button
                onClick={handleLoadMoreCategories}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 shadow-sm"
              >
                Tampilkan Kegiatan Lainnya
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="kontak" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="relative h-10 w-10 bg-white rounded-full p-1">
                    <Image 
                      src="/assets/Logo/LOGO_YAYASAN.png" 
                      alt="Logo" 
                      fill 
                      className="object-contain p-1"
                    />
                 </div>
                 <span className="font-bold text-xl text-white">Nur Albab Nusantara</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Yayasan sosial yang bergerak di bidang keagamaan, sosial, dan kemanusiaan. Berkomitmen untuk memberdayakan masyarakat dan menebar kebaikan.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-yellow-400">Hubungi Kami</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <a href="https://maps.app.goo.gl/zcNkACNpF4wwrvDq6" target="_blank"><span>{identity.address}</span></a>
                </li>
                 <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="https://wa.me/628993700085" target="_blank"><span>{identity.phone}</span></a>
                </li>
                 <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:nuralbabfoundation@gmail.com" target="_blank"><span>{identity.email}</span></a>
                </li>
              </ul>
            </div>

             <div>
              <h3 className="text-lg font-bold mb-6 text-yellow-400">Media Sosial</h3>
              <div className="flex space-x-4">
                 <a href="https://instagram.com/nuralbab_foundation" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                 </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; Yayasan Nur Albab Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ImageModal
        isOpen={!!selectedLegalitasImage}
        onClose={() => setSelectedLegalitasImage(null)}
        imageSrc={selectedLegalitasImage?.src || ""}
        alt={selectedLegalitasImage?.alt || ""}
      />

      <DocumentModal
        isOpen={!!selectedDocument}
        onClose={() => setSelectedDocument(null)}
        documentUrl={selectedDocument?.url || ""}
        title={selectedDocument?.name || ""}
      />
    </div>
  );
}
