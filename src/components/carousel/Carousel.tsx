// import * as React from 'react';
// import Image from 'next/image';

// // import { Card } from '@/components/ui/card';
// import {
//    Carousel,
//    CarouselContent,
//    CarouselItem,
//    CarouselNext,
//    CarouselPrevious,
// } from '@/components/ui/carousel';

// export function CarouselDemo() {
//    return (
//       <Carousel className=" relative ">
//          <CarouselContent>
//             {Array.from({ length: 5 }).map((_, index) => (
//                <CarouselItem key={index}>
//                   <div className="">
//                      {/* <Card> */}
//                      <Image
//                         src="/banner-shea-butter-from-ghana.jpg"
//                         alt="hero image"
//                         width={0} // Allows dynamic resizing
//                         height={0}
//                         sizes="50vw" // Makes it responsive
//                         className="w-full h-auto"
//                      />
//                      {/* </Card> */}
//                   </div>
//                </CarouselItem>
//             ))}
//          </CarouselContent>
//          <CarouselPrevious />
//          <CarouselNext />
//       </Carousel>
//    );
// }

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
                        className="w-full h-auto"
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* Previous & Next buttons */}
         <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
         >
            ◀
         </button>
         <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
         >
            ▶
         </button>
      </div>
   );
}
