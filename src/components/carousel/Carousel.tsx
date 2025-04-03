import * as React from 'react';
import Image from 'next/image';

// import { Card } from '@/components/ui/card';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselDemo() {
   return (
      <Carousel className=" relative ">
         <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
               <CarouselItem key={index}>
                  <div className="">
                     {/* <Card> */}
                     <Image
                        src="/banner-shea-butter-from-ghana.jpg"
                        alt="hero image"
                        width={0} // Allows dynamic resizing
                        height={0}
                        sizes="50vw" // Makes it responsive
                        className="w-full h-auto"
                     />
                     {/* </Card> */}
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   );
}
