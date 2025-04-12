import Image from 'next/image';
import { BuyNow } from '@/components/buy-now';
import ProductAnalysis from '@/components/productAnalysis';

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
      <div className="mt-6 max-w-[78rem] mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col lg:flex-row items-start gap-5 w-full ">
            <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[700px] w-[100%] flex flex-col gap-[20px] items-center lg:items-start  ">
               <div className="flex flex-col xl:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                  <Image
                     src="/coconut-oil.png"
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
               <h3 className=" m-4 text-[30px]">Coconut Oil</h3>
               <div className="text-[20px] p-4 ">
                  <p>
                     Coconut oil is a natural oil extracted from the meat of
                     mature coconuts harvested from Celine Guajardo Connor
                     Hamilton Aaron Loeb the coconut palm (Cocos nucifera). It
                     is solid at room temperature in cooler climates and becomes
                     liquid when warmed.
                  </p>

                  <p className=" font-bold mt-4">Composition</p>
                  <p>Coconut oil is rich in:</p>
                  <ul className="list-disc">
                     <li>
                        Medium-chain fatty acids (MCFAs) – especially lauric
                        acid (≈ 50%)
                     </li>
                     <li>Caprylic and capric acid</li>
                     <li>Vitamin E & K</li>
                     <li>Antioxidants</li>
                  </ul>
               </div>
               <div className="text-[20px] p-4 ">
                  <p className="font-bold mb-2">Key Benefits</p>
                  <p className="font-bold">1. Moisturizes Skin</p>
                  <ul className="list-disc">
                     <li>
                        Softens dry, flaky skin and protects against moisture
                        loss
                     </li>
                     <li>Great as a body butter or night cream</li>
                     <p className="font-bold">2. Promotes Hair Health</p>
                     <li>
                        Nourishes scalp, prevents dandruff, and strengthens hair
                     </li>
                     <li>Used for deep conditioning and taming frizz</li>
                     <p className="font-bold">3. Antibacterial & Antifungal</p>
                     <li>
                        Lauric acid helps fight acne-causing bacteria and fungal
                        infections
                     </li>
                     <li>Good for minor cuts, wounds, and skin conditions</li>
                     <p className="font-bold">4. Boosts Oral Health</p>
                     <li>
                        Used in oil pulling to reduce plaque and improve breath
                     </li>
                     <p className="font-bold">5. Supports Metabolism</p>
                     <li>
                        MCFAs are quickly converted into energy, making coconut
                        oil a popular supplement in fitness and keto diets
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="text-[20px] p-4">
            <p className="font-bold">Common Uses</p>
            <ul className="list-disc">
               <li>Cooking (especially virgin coconut oil)</li>
               <li>Skincare and body oils</li>
               <li>Hair masks and scalp treatments</li>
               <li>Lip balms and natural deodorants</li>
               <li>Baby care products</li>
               <li>Oil pulling for oral hygiene</li>
            </ul>
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
