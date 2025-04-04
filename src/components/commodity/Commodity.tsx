import { Commodity } from '@/data/data';
import Image from 'next/image';

export default function CommodityList() {
   return (
      <div className="max-w-6xl mx-auto mt-4">
         <h3 className="text-[28px] ">
            Our <span className="font-bold"> Commodity</span>
         </h3>
         <div className="grid grid-cols-4 gap-4">
            {Commodity.map((item) => (
               <div key={item.id}>
                  <Image
                     src={item.imgUrl}
                     alt={item.imgUrl}
                     width={300}
                     height={200}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
