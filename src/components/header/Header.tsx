import { CarouselDemo } from '../carousel/Carousel';

export default function Header() {
   return (
      <header className="h-[500px]">
         <div className="">
            <div className=" relative w-full">
               <div className="absolute z-10 top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 text-white  ">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-[4.1rem]">
                     Shea Butter & Castor Oil
                  </h1>

                  <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                     🌿 Nature’s Finest, Delivered Globally �
                  </h2>
               </div>
               <CarouselDemo />
            </div>
         </div>
      </header>
   );
}
