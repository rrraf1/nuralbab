"use client";
import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, alt }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300" onClick={onClose}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[110]"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] sm:h-[80vh]">
           <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="mt-6">
             <a 
            href={imageSrc} 
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Unduh Foto
          </a>
        </div>
      </div>
    </div>
  );
}
