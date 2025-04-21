import React from 'react';
import Image from 'next/image';
import ProductAnalysis from '@/components/productAnalysis';
import { BuyNow } from '@/components/buy-now';

const PriceData = [
   {
      title: '200 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / gram)',
   },
   {
      title: '400 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / gram)',
   },
   {
      title: '600 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / gram)',
   },
];

function Page() {
   return (
      <div className="mt-6 max-w-[78rem] mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col lg:flex-row items-start gap-5 w-full ">
            <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[700px] w-[100%] flex flex-col gap-[20px] items-center lg:items-start  ">
               <div className="flex flex-col xl:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                  <Image
                     src="/shea-butter.png"
                     alt="coconut oil"
                     width={300}
                     height={200}
                  />
                  <div className="font-bold flex xl:flex-col gap-[10px]">
                     {PriceData.map((price) => (
                        <div
                           className="border border-gray-600 p-2 rounded-[10px] "
                           key={price.title}
                        >
                           <p className="text-[14px] ">{price.title}</p>
                           <p className="text-[14px] ">{price.subtitle}</p>
                           <p className="text-[10px]">{price.price}</p>
                           <p className="text-[10px]">{price.surprise}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <BuyNow />
            </div>
            <div>
               <h3 className=" m-4 text-[30px]">Shea Butter</h3>
               <div className="text-[20px] p-4 ">
                  <p>
                     Shea butter is a fat extracted from the nuts of the
                     Vitellaria paradoxa tree, which is native to West Africa.
                     It has a creamy consistency and an off-white or ivory
                     color.
                  </p>

                  <p className="mt-4">Shea butter is rich in:</p>
                  <p>Vitamins A & E – for skin repair and anti-aging</p>
                  <p>
                     Fatty Acids – oleic, stearic, linoleic, and palmitic acids
                  </p>
                  <p>Cinnamic acid – has anti-inflammatory properties</p>
                  <p>Antioxidants – protect skin from free radicals</p>
               </div>
               <div className="text-[20px] p-4 ">
                  <p className="font-bold">1.Moisturizing</p>
                  <ul className="list-disc">
                     <li>Deeply hydrates dry skin and locks in moisture</li>
                     <li>
                        Especially effective for cracked heels, elbows, and lips
                     </li>
                     <p className="font-bold">2. Anti-inflammatory</p>
                     <li>
                        Helps reduce swelling and redness in skin conditions
                        like eczema, psoriasis, and dermatitis
                     </li>
                     <p className="font-bold">3. Healing Properties</p>
                     <li>
                        Aids in wound healing, fades scars and stretch marks
                     </li>
                     <p className="font-bold">4. Anti-Aging</p>
                     <li>
                        Boosts collagen production and elasticity, reduces fine
                        lines and wrinkles
                     </li>
                     <p className="font-bold">5. Hair Care</p>
                     <li>
                        Conditions scalp, tames frizz, promotes hair growth, and
                        adds shine
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="text-[20px] p-4">
            <p className="font-bold">Common Uses</p>
            <ul className="list-disc">
               <li>Lotions and creams</li>
               <li>Lip balms</li>
               <li>Hair conditioners and masks</li>
               <li>Baby care products</li>
               <li>Soaps and body butters</li>
            </ul>
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
