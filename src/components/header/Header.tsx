'use client';

import { useState } from 'react';
import { CarouselDemo } from '../carousel/Carousel';

// import { Button } from '../ui/button';
// import { Mail } from 'lucide-react';

const images = [
   {
      src: '/banner-shea-butter-from-ghana.jpg',
      title: 'Nature’s Finest, Delivered Globally',
      subtitle:
         'Pure & organic shea butter and castor oil—nourishing beauty, naturally.',
   },
   {
      src: '/banner-cashew-nuts.jpg',
      title: 'From Our Farms to Your Table',
      subtitle:
         'Premium coconut oil and cashew nuts, sourced with care for quality you can trust',
   },
   {
      src: '/banner-black-soap.jpg',
      title: 'Sustainable Farming, Global Impact',
      subtitle:
         'Empowering local farmers while bringing Africa’s best agro products to the world.',
   },
];

export default function Header() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const currentSlide = images[currentIndex];

   return (
      <header className="">
         <div className="relative w-[100%]">
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 w-full sm:w-auto">
               <h1 className="text-4xl font-extrabold lg:text-[3rem]">
                  {currentSlide.title}
               </h1>
               <h2 className="mt-4 text-2xl lg:text-3xl font-semibold">
                  {currentSlide.subtitle}
               </h2>
            </div>

            {/* Carousel */}
            <CarouselDemo images={images} onSlideChange={setCurrentIndex} />
         </div>

         <div className="bg-[#DAFF8C] ">
            <div className="max-w-6xl mx-auto w-full flex justify-center items-center p-10">
               <h3 className="text-[34px]">
                  We have over{' '}
                  <span className="text-[#669900] font-bold">5 years</span>{' '}
                  experience exporting to the world!
               </h3>
            </div>
         </div>
         {/* <Button className="size-6 animate-bounce fixed right-15 bottom-7 text-[#669900] border-none w-[100px] h-[40px] ">
            <Mail /> support
         </Button> */}
      </header>
   );
}
