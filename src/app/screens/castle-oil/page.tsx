import React from 'react';
import Image from 'next/image';
import ProductAnalysis from '@/components/productAnalysis';
import { BuyNow } from '@/components/buy-now';

const PriceData = [
   {
      title: '200 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '400 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '500 gram',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
];

function Page() {
   return (
      <div className="mt-6 max-w-[78rem] mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col lg:flex-row items-start gap-5 w-full ">
            <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[700px] w-[100%] flex flex-col gap-[20px] items-center md:items-start  ">
               <div className="flex flex-col xl:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                  <Image
                     src="/castle-oil.png"
                     alt="Castle oil"
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
               <h3 className=" m-4 text-[30px]">Castor Oil</h3>
               <div className="text-[20px] p-4 ">
                  <p>
                     Castor oil is a vegetable oil pressed from the seeds of the
                     Ricinus communis plant, Celine Guajardo Connor Hamilton
                     Aaron Loeb commonly known as the castor bean. It’s a thick,
                     pale yellow liquid with a distinctive, mild odor.
                  </p>

                  <p className=" font-bold mt-4">Composition</p>
                  <p>Castor oil is unique due to its high content of:</p>
                  <ul className="list-disc">
                     <li>
                        Ricinoleic Acid (≈ 90%) – a rare fatty acid with
                        powerful anti-inflammatory and moisturizing properties
                     </li>
                     <li>Omega-6 and Omega-9 fatty acids</li>
                     <li>Vitamin E</li>
                     <li>Minerals and proteins</li>
                  </ul>
               </div>
               <div className="text-[20px] p-4 ">
                  <p className="font-bold mb-2">Key Benefits</p>
                  <p className="font-bold">1. Hair Growth</p>
                  <ul className="list-disc">
                     <li>
                        Stimulates hair follicles and improves scalp circulation
                     </li>
                     <li>Helps thicken hair, eyelashes, and eyebrows</li>
                     <p className="font-bold">2. Moisturizing</p>
                     <li>Natural humectant that attracts moisture to skin</li>
                     <li>
                        Excellent for dry skin, chapped lips, and cracked heels
                     </li>
                     <p className="font-bold">
                        3. Anti-inflammatory & Antimicrobial
                     </p>
                     <li>
                        Soothes irritated skin and helps fight bacterial and
                        fungal infections
                     </li>
                     <li>Great for acne-prone skin when used correctly</li>
                     <p className="font-bold">4. Natural Laxative</p>
                     <li>
                        Cold-pressed castor oil is used (in moderation) as a
                        remedy for occasional constipation
                     </li>
                     <p className="font-bold">5. Promotes Wound Healing</p>
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
               <li>Hair oils and scalp treatments</li>
               <li>Skin moisturizers and massage oils</li>
               <li>Eyelash and brow serums</li>
               <li>Soaps and cosmetics</li>
               <li>Ayurvedic and traditional medicine</li>
               <li>Natural remedy for joint pain and arthritis</li>
            </ul>
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
