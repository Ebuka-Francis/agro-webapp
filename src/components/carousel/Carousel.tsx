'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';
// import { Button } from '../ui/button'; // Optional: for styling

interface ImageData {
   src: string;
   title: string;
   subtitle: string;
}

interface CarouselDemoProps {
   images: ImageData[];
   onSlideChange: (index: number) => void;
}

export function CarouselDemo({ images, onSlideChange }: CarouselDemoProps) {
   const [emblaRef, embla] = useEmblaCarousel({ loop: true });

   const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
   const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

   useEffect(() => {
      if (!embla) return;

      const onSelect = () => {
         const index = embla.selectedScrollSnap();
         onSlideChange(index);
      };

      embla.on('select', onSelect);
      onSelect();

      return () => {
         embla.off('select', onSelect);
      };
   }, [embla, onSlideChange]);

   return (
      <div className="relative">
         {/* Carousel viewport */}
         <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
               {images.map((img, index) => (
                  <div className="min-w-full" key={index}>
                     <Image
                        src={img.src}
                        alt={`carousel image ${index + 1}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[30vh] md:h-[50vh] sm:h-auto"
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* Previous & Next buttons */}
         <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 "
         >
            ◀
         </button>
         <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
         >
            ▶
         </button>
      </div>
   );
}
