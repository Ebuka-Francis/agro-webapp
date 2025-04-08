import React from 'react';

function Page() {
   return (
      <div className="mt-6 max-w-6xl mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <h3 className=" m-4 text-[30px]">Coconut Oil</h3>
         <div className="text-[20px] p-4 ">
            <p>
               Coconut oil is a natural oil extracted from the meat of mature
               coconuts harvested from Celine Guajardo Connor Hamilton Aaron
               Loeb the coconut palm (Cocos nucifera). It is solid at room
               temperature in cooler climates and becomes liquid when warmed.
            </p>

            <p className=" font-bold mt-4">Composition</p>
            <p>Coconut oil is rich in:</p>
            <ul className="list-disc">
               <li>
                  Medium-chain fatty acids (MCFAs) – especially lauric acid (≈
                  50%)
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
                  Softens dry, flaky skin and protects against moisture loss
               </li>
               <li>Great as a body butter or night cream</li>
               <p className="font-bold">2. Promotes Hair Health</p>
               <li>Nourishes scalp, prevents dandruff, and strengthens hair</li>
               <li>Used for deep conditioning and taming frizz</li>
               <p className="font-bold">3. Antibacterial & Antifungal</p>
               <li>
                  Lauric acid helps fight acne-causing bacteria and fungal
                  infections
               </li>
               <li>Good for minor cuts, wounds, and skin conditions</li>
               <p className="font-bold">4. Boosts Oral Health</p>
               <li>Used in oil pulling to reduce plaque and improve breath</li>
               <p className="font-bold">5. Supports Metabolism</p>
               <li>
                  MCFAs are quickly converted into energy, making coconut oil a
                  popular supplement in fitness and keto diets
               </li>
            </ul>
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
         <div className="flex justify-end p-4">
            <button className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full p-4 max-w-[230px] text-white font-bold border-none cursor-pointer ">
               Product Quality Analysis
            </button>
         </div>
      </div>
   );
}

export default Page;
