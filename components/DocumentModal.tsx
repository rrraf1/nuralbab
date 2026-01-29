"use client";
import { useEffect } from 'react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  title: string;
}

export default function DocumentModal({ isOpen, onClose, documentUrl, title }: DocumentModalProps) {
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
        className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-white rounded-xl overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-lg text-gray-800 truncate pr-4">{title}</h3>
          <a 
            href={documentUrl} 
            download
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Unduh PDF
          </a>
        </div>
        <div className="flex-1 bg-gray-100 relative">
          <iframe 
            src={documentUrl} 
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
