import React from 'react';

function Page() {
   return (
      <div className="mt-6 max-w-6xl mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <h3 className=" m-4 text-[30px]">Shea Butter</h3>
         <div className="text-[20px] p-4 ">
            <p>
               Shea butter is a fat extracted from the nuts of the Vitellaria
               paradoxa tree, which is native to West Africa. It has a creamy
               consistency and an off-white or ivory color.
            </p>

            <p className="mt-4">Shea butter is rich in:</p>
            <p>Vitamins A & E – for skin repair and anti-aging</p>
            <p>Fatty Acids – oleic, stearic, linoleic, and palmitic acids</p>
            <p>Cinnamic acid – has anti-inflammatory properties</p>
            <p>Antioxidants – protect skin from free radicals</p>
         </div>
         <div className="text-[20px] p-4 ">
            <p className="font-bold">1.Moisturizing</p>
            <ul className="list-disc">
               <li>Deeply hydrates dry skin and locks in moisture</li>
               <li>Especially effective for cracked heels, elbows, and lips</li>
               <p className="font-bold">2. Anti-inflammatory</p>
               <li>
                  Helps reduce swelling and redness in skin conditions like
                  eczema, psoriasis, and dermatitis
               </li>
               <p className="font-bold">3. Healing Properties</p>
               <li>Aids in wound healing, fades scars and stretch marks</li>
               <p className="font-bold">4. Anti-Aging</p>
               <li>
                  Boosts collagen production and elasticity, reduces fine lines
                  and wrinkles
               </li>
               <p className="font-bold">5. Hair Care</p>
               <li>
                  Conditions scalp, tames frizz, promotes hair growth, and adds
                  shine
               </li>
            </ul>
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
         <div className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 ... rounded-full p-4 max-w-[230px] text-white font-bold">
            Product Quality Analysis
         </div>
      </div>
   );
}

export default Page;
