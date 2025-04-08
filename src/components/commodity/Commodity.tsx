import { Commodity } from '@/data/data';
import Image from 'next/image';

import { CommodityProps } from '@/types/types';
import { ChevronRight } from 'lucide-react';

export default function CommodityList() {
   return (
      <div className="max-w-6xl mx-auto my-6">
         <h3 className="text-[28px] text-center mb-5 ">
            Our <span className="font-bold"> Products</span>
         </h3>
         <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-5 overflow-hidden">
            {Commodity.map((item) => (
               <Product
                  key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  description={item.description}
                  link={item.link}
               />
            ))}
         </div>
      </div>
   );
}

export function Product({ imgUrl, description, link }: CommodityProps) {
   return (
      <div className="flex flex-col items-center gap-[10px]">
         <Image src={imgUrl} alt={imgUrl} width={300} height={200} />
         <p className="text-center max-w-[450px]">{description}</p>
         <div className="flex items-center gap-3 ">
            <a
               className="text-[#fff] font-bold bg-[#669900] border border-black p-3 flex items-center gap-2"
               href={link}
            >
               <p>Learn more</p> <ChevronRight />
            </a>
            <button className="text-[#fff] font-bold bg-[#669900] border border-black p-3  flex items-center gap-2 ">
               Buy Now
               <ChevronRight />
            </button>
         </div>
      </div>
   );
}
