'use client';

import { useState } from 'react';
import {
   Dialog,
   DialogContent,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import ButtonCertificate from '../button-certificate/ButtonCertificate';
import { Button } from '../ui/button';
// import { Button } from '../ui/button';

const images = [
   '/document1.jpeg',
   '/document2.jpeg',
   '/document3.jpeg',
   '/document4.jpeg',
   '/document5.jpeg',
   '/document6.jpeg',
   '/document7.jpeg',
   '/document8.jpeg',
   '/document9.jpeg',
   '/document10.jpeg',
   '/document11.jpeg',

   // Add more image paths here
];

export default function ProductAnalysis() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
   };

   return (
      <Dialog>
         <div className="flex flex-col items-center sm:flex-row justify-end p-4 gap-3">
            <DialogTrigger asChild>
               <Button className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full p-4 max-w-[230px] w-[100%] text-white font-bold border-none cursor-pointer ">
                  Product Quality Analysis
               </Button>
            </DialogTrigger>

            <ButtonCertificate />
         </div>
         <DialogContent className="block max-w-5xl bg-white overflow-hidden rounded-lg p-0 ">
            <DialogTitle className="hidden">Product Analytics</DialogTitle>
            <div className="relative w-full  flex items-center justify-center">
               <Image
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="object-contain w-1/2 md:w-full h-full"
                  width={600}
                  height={600}
               />

               {/* Left arrow */}
               <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 hover:bg-gray-500 rounded-full z-10 "
               >
                  <ChevronLeft className="text-black" />
               </button>

               {/* Right arrow */}
               <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 hover:bg-gray-500 rounded-full z-10"
               >
                  <ChevronRight className="text-black" />
               </button>
            </div>
         </DialogContent>
      </Dialog>
   );
}
