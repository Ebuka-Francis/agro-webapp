import { Commodity } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

import { BuyNow } from '../buy-now';

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

export function CommodityItems() {
   return (
      <div className="max-w-6xl mx-auto my-6">
         <h3 className="text-[28px] text-center mb-5 ">
            Our <span className="font-bold"> Products</span>
         </h3>
         <h4 className="text-[20px] font-bold  mb-5 ">Organic Items</h4>
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
      <div className="flex flex-col items-center gap-[10px] p-[5px]">
         <Image src={imgUrl} alt={imgUrl} width={300} height={200} />
         <p className="text-center max-w-[450px]">{description}</p>
         <div className="flex items-center gap-3 ">
            <Link
               className="text-[#fff] rounded-[5px] font-bold bg-[#669900] border border-none p-3 flex items-center gap-2"
               href={link}
            >
               <p>Learn more</p> <ChevronRight />
            </Link>
            <BuyNow />
         </div>
      </div>
   );
}
