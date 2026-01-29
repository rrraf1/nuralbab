"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface ActivityGalleryProps {
  title: string;
  description?: string;
  images: string[];
}

export default function ActivityGallery({ title, description, images }: ActivityGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const initialLimit = 3;
  
  const threshold = 1;
  const shouldCollapse = images.length > initialLimit + threshold;

  // On mobile we show all via scroll. On desktop we hide > initialLimit if not expanded.

  return (
    <>
      <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              {title}
            </h3>
            {description && <p className="text-gray-500 mt-2 ml-4">{description}</p>}
            <p className="md:hidden text-xs text-gray-400 italic mt-1 ml-4 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Klik foto untuk zoom
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <p className="text-sm text-gray-400 italic flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Klik foto untuk zoom
            </p>
            {shouldCollapse && (
              <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100"
            >
              {isExpanded ? "Tutup" : `Lihat Semua (${images.length})`}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

        {/* 
          Mobile: Horizontal Scroll (flex, overflow-x-auto) 
          Desktop: Grid (grid-cols-3)
        */}
        <div className={`
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide
          md:grid md:grid-cols-2 md:lg:grid-cols-3 md:gap-4 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
        `}>
          {images.map((imgSrc, imgIdx) => {
            // Logic: On Desktop (md+), if !isExpanded and index >= initialLimit, hide it.
            // On Mobile, always show (block/flex).
            const isHiddenOnDesktop = shouldCollapse && !isExpanded && imgIdx >= initialLimit;
            
            return (
              <div 
                key={imgIdx} 
                className={`
                  group relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100 cursor-pointer
                  flex-none w-[85%] sm:w-[60%] md:w-auto snap-center
                  ${isHiddenOnDesktop ? 'md:hidden' : ''}
                `}
                onClick={() => setSelectedImage(imgSrc)}
              >
                <Image
                  src={imgSrc}
                  alt={`${title} ${imgIdx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        alt={title}
      />
    </>
  );
}
