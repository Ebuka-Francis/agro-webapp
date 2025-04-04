import { CarouselDemo } from '../carousel/Carousel';
import { Button } from '../ui/button';

export default function Header() {
   return (
      <header className="">
         <div className="">
            <div className=" relative w-full">
               <div className="absolute z-10 top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 text-white  ">
                  <h1 className="font-helvetica scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-[3rem]">
                     Nature’s Finest, Delivered Globally
                  </h1>

                  <h2 className="font-helvetica mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                     Pure & organic shea butter and castor oil—nourishing
                     beauty, naturally.
                  </h2>
               </div>
               <CarouselDemo />
            </div>
         </div>
         <div className=" bg-[#DAFF8C] h-[120px]">
            <div className=" max-w-6xl mx-auto w-full flex justify-between items-center p-10">
               <h3 className="font-helvetica text-[34px]">
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
