'use client';
import Image from 'next/image';

const images = [
   '/banner-img.jpeg',
   '/shae-butterPosted.jpeg',
   '/test-report.jpeg',
   '/shae-butterPosted.jpeg',
   '/banner-img.jpeg',
];

const ContinuousSlider = () => {
   const duplicatedImages = [...images, ...images];

   return (
      <div className="w-[200px] h-[150px] overflow-hidden">
         <div className="flex animate-scroll">
            {duplicatedImages.map((img, index) => (
               <div className="w-[200px] h-[150px] flex-shrink-0" key={index}>
                  <Image
                     src={img}
                     alt={`Image ${index}`}
                     width={200}
                     height={150}
                     className="rounded-md object-cover"
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default ContinuousSlider;
