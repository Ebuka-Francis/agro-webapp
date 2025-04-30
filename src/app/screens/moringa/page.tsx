import { BuyNow } from '@/components/buy-now';
import ProductAnalysis from '@/components/productAnalysis';
import Image from 'next/image';

const PriceData = [
   {
      title: '32 Ounce',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '16 Ounce',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '8 Ounce',
      subtitle: 'Pack of one',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
];

function Page() {
   return (
      <div className="mt-6 max-w-6xl mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col lg:flex-row items-start gap-5 w-full ">
            <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[700px] w-[100%] flex flex-col gap-[20px] items-center lg:items-start  ">
               <div className="flex flex-col xl:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                  <Image
                     src="/moringa_oil.png"
                     alt="mica"
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
               <h3 className=" m-4 text-[30px]">Moringa Oil</h3>
               <div className="text-[20px] p-4 ">
                  <p>
                     Extracted from the seeds of the Moringa oleifera tree
                     through a cold press method, our Moringa Oil is a
                     premium-quality, nutrient-rich oil known for its light
                     texture and powerful healing properties. Retaining all its
                     natural benefits due to cold pressing, this oil is a true
                     skin and hair elixir.
                  </p>

                  <p className=" font-bold mt-4">Product Details</p>

                  <ul className="list-disc">
                     <li> 100% Pure, Cold-Pressed, and Unrefined</li>
                     <li>
                        {' '}
                        Free from additives, preservatives, and artificial
                        fragrances
                     </li>
                     <li> Suitable for all skin and hair types</li>
                     <li>
                        Packaged in a UV-protective bottle to preserve freshness
                     </li>
                  </ul>
               </div>
               <div className="text-[20px] p-4 ">
                  <p className="font-bold mb-2">Key Benefits</p>
                  <p className="font-bold">1.Deep Skin Nourishment</p>
                  <ul className="list-disc">
                     <li>
                        Packed with antioxidants, omega-9 fatty acids, and
                        Vitamin E, Moringa oil helps hydrate, soften, and
                        revitalize dull, tired skin.
                     </li>

                     <p className="font-bold">2. Lightweight & Non-Greasy</p>
                     <li>
                        Absorbs quickly without clogging pores, making it
                        perfect for oily, dry, or sensitive skin types.
                     </li>
                     <p className="font-bold">3.Natural Anti-Aging Formula</p>
                     <li>
                        Rich in behenic acid and antioxidants, it helps reduce
                        the appearance of fine lines, wrinkles, and age spots.
                     </li>
                     <p className="font-bold">4. Healthy Hair & Scalp</p>
                     <li>
                        Nourishes the scalp, strengthens roots, and promotes
                        healthy hair growth while reducing dandruff and dryness.
                     </li>
                     <p className="font-bold">
                        5. Protects Against Environmental Damage
                     </p>
                     <li>
                        - Forms a natural barrier against pollution and UV rays,
                        shielding your skin and hair from daily stressors.
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="text-[20px] p-4">
            <p className="font-bold">Usage Suggestions</p>
            <ul className="list-disc">
               <li>
                  Apply a few drops directly to the face or body as a daily
                  moisturizer.
               </li>
               <li>
                  Use as a scalp treatment or add to your favorite conditioner
                  for deep hydration.
               </li>
               <li>
                  Mix with essential oils for a rejuvenating massage experience.
               </li>
               <li>
                  Ideal for use in DIY skincare products like lotions, soaps,
                  and balms.
               </li>
            </ul>
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
