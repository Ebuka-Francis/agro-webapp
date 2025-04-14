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
                  <Image src="/mica.avif" alt="mica" width={300} height={200} />
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
               <h3 className=" m-4 text-[30px]">Mecca</h3>
               <div className="text-[20px] p-4 ">
                  <p>
                     Mica is a group of silicate minerals known for their
                     sheet-like structure. These sheets are thin, flexible, and
                     can be easily split, giving mica its signature shimmery,
                     glitter-like appearance.
                  </p>

                  <p className=" font-bold mt-4">Chemical Composition – Mica</p>
                  <p>
                     Primarily made of aluminum, potassium, magnesium, iron, and
                     silicon
                  </p>
                  <ul className="list-disc">
                     <li>Silicon dioxide (SiO₂) – major component</li>
                     <li>Aluminum oxide (Al₂O₃)</li>
                     <li>Potassium oxide (K₂O)</li>
                     <li>Magnesium oxide (MgO)</li>
                     <li>Iron oxides (FeO, Fe₂O₃)</li>
                     <li>Water (H₂O) – present in trace amounts</li>
                     <li></li>
                  </ul>
               </div>
               <div className="text-[20px] p-4 ">
                  <p className="font-bold mb-2">Key Benefits</p>
                  <p className="font-bold">1.Adds Natural Radiance to Skin</p>
                  <ul className="list-disc">
                     <li>
                        Reflects light to create a glowing, luminous finish
                     </li>
                     <li>
                        Commonly used in highlighters, foundations, and body
                        shimmer
                     </li>
                     <p className="font-bold">
                        2. Improves Makeup Texture & Application
                     </p>
                     <li>Provides a smooth, silky feel</li>
                     <li>Helps makeup blend better and last longer</li>
                     <p className="font-bold">
                        3.Non-Irritating & Safe for Sensitive Skin
                     </p>
                     <li>Inert and gentle on skin</li>
                     <li>Ideal for clean beauty and mineral-based products</li>
                     <p className="font-bold">4. Heat-Resistant & Durable</p>
                     <li>
                        Used in thermal applications like heat shields and
                        electronics
                     </li>
                     <li>Stable under high temperatures</li>
                     <p className="font-bold">
                        5. Environmentally Friendly (in ethical sourcing)
                     </p>
                     <li>Environmentally Friendly (in ethical sourcing)</li>
                     <li>
                        Increasingly sourced through fair trade and ethical
                        mining initiatives
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="text-[20px] p-4">
            <p className="font-bold">Common Uses</p>
            <ul className="list-disc">
               <li>
                  Cosmetics – foundations, eyeshadows, highlighters, and blushes
                  for shimmer and glow
               </li>
               <li>
                  Skincare Products – added to lotions and creams for a radiant
                  finish
               </li>
               <li>Nail Polishes – provides shine and sparkle</li>
               <li>
                  Soaps and Bath Bombs – gives a pearlescent or glittery
                  appearance
               </li>
               <li>
                  Crafts and DIY Projects – used in resin art, candles, and
                  slime for color and sparkle
               </li>
               <li>
                  Industrial Applications – insulation, electronics, paints, and
                  plastics due to heat resistance and stability
               </li>
            </ul>
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
