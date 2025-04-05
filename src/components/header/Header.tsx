// 'use client';

// import { useState } from 'react';

// import { CarouselDemo } from '../carousel/Carousel';
// import { Button } from '../ui/button';

// const images = [
//    {
//       src: '/banner-shea-butter-from-ghana.jpg',
//       title: 'Nature’s Finest, Delivered Globally',
//       subtitle:
//          'Pure & organic shea butter and castor oil—nourishing beauty, naturally.',
//    },
//    {
//       src: '/banner-cashew-nuts.jpg',
//       title: 'From Our Farms to Your Table',
//       subtitle: 'Castor oil packed with nutrients for natural glow.',
//    },
//    {
//       src: '/banner-export-quality.jpg',
//       title: 'Export Quality Shea & Castor Products',
//       subtitle: 'Trusted by buyers around the world for over 20 years.',
//    },
// ];

// export default function Header() {
//    // states
//    const [currentIndex, setCurrentIndex] = useState(0);

//    const currentSlide = images[currentIndex];

//    return (
//       <header className="">
//          <div className="">
//             <div className=" relative w-full">
//                <div className="absolute z-10 top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 text-white  ">
//                   <h1 className="font-helvetica scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-[3rem]">
//                      {currentSlide.title}
//                   </h1>

//                   <h2 className="font-helvetica mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
//                      {currentSlide.subtitle}
//                   </h2>
//                </div>
//                <CarouselDemo images={images} onSlideChange={setCurrentIndex} />
//             </div>
//          </div>
//          <div className=" bg-[#DAFF8C] h-[120px]">
//             <div className=" max-w-6xl mx-auto w-full flex justify-between items-center p-10">
//                <h3 className="font-helvetica text-[34px]">
//                   We have over{' '}
//                   <span className="text-[#669900] font-bold">20 years</span>{' '}
//                   experience exporting to the world!
//                </h3>
//                <Button className="bg-[#669900] rounded-full text-[14px]">
//                   Contact Us Now!
//                </Button>
//             </div>
//          </div>
//       </header>
//    );
// }

'use client';

import { useState } from 'react';
import { CarouselDemo } from '../carousel/Carousel';
import { Button } from '../ui/button';

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
         <div className="relative w-full">
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
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

         <div className="bg-[#DAFF8C] h-[120px]">
            <div className="max-w-6xl mx-auto w-full flex justify-between items-center p-10">
               <h3 className="text-[34px]">
                  We have over{' '}
                  <span className="text-[#669900] font-bold">20 years</span>{' '}
                  experience exporting to the world!
               </h3>
               <Button className="bg-[#669900] rounded-full text-[14px]">
                  Contact Us Now!
               </Button>
            </div>
         </div>
      </header>
   );
}
