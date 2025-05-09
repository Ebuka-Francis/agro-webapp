'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BuyNow } from '@/components/buy-now';
import ProductAnalysis from '@/components/productAnalysis';
import { Check, Star } from 'lucide-react';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const PriceData = [
   {
      title: '200 gram',
      subtitle: 'Pack of tw0',
      price: '$17.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '400 gram',
      subtitle: 'Pack of four',
      price: '$34.39',
      surprise: '($0.54 / Ounce)',
   },
   {
      title: '600 gram',
      subtitle: 'Pack of six',
      price: '$55.39',
      surprise: '($0.54 / Ounce)',
   },
];

const option = [
   {
      value: '2 oz bag.',
   },
   {
      value: '4 oz bag. [Sold out, waitList available]',
   },
   {
      value: '8 oz container. (USD 9.95)',
   },
   {
      value: '16 oz container. (USD 11.95, - USD 12.95)',
   },
   {
      value: '2 Ibs (32 oz) Cont (USD 16.95 - USD 17.95)',
   },
   {
      value: '3 Ibs Container (USD 21.95)',
   },
   {
      value: '5 Ibs bulk (USD 22.95)',
   },
   {
      value: '6 Ibs Container (USD 29.95)',
   },
   {
      value: '10 Ibs bulk (USD 41.95)',
   },
   {
      value: '15 Ibs bulk  (USD 54.95 - USD 544.95)',
   },
   {
      value: '25 Ibs bulk (USD 82.95)',
   },
   {
      value: '25 Ibs (precut 5 Ib) (USD 89.95)',
   },
   {
      value: '50 Ibs bulk (USD 164.95)',
   },
   {
      value: '50 Ibs (5 Ibs) Bulk (USD 174.95)',
   },
   {
      value: '100 Ibs bulk  Bulk (USD 329.95)',
   },
   {
      value: '10 Boxes (25 Ibs) (USD 657.95 - USD 749.95)',
   },
   {
      value: '80 Boxes (25 Ibs) (USD 5,599.95 - USD 5,999.95)',
   },
];

const quantityValues = [
   {
      value: '1',
   },
   {
      value: '2',
   },
   {
      value: '3',
   },
   {
      value: '4',
   },
];

function Page() {
   const [selectedOption, setSelectedOption] = useState('');
   const [quantity, setQuantity] = useState(1);
   const [basePrice, setBasePrice] = useState(9.95);

   useEffect(() => {
      // Extract USD price from selected option
      const match = selectedOption.match(/USD\s?([\d.,]+)/);
      if (match) {
         setBasePrice(parseFloat(match[1].replace(',', '')));
      }
   }, [selectedOption]);

   const totalPrice = (basePrice * quantity).toFixed(2);
   return (
      <div className="mt-6 max-w-5xl mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col  items-start gap-5 w-full ">
            <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
               <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[700px] w-[100%] flex flex-col gap-[20px] items-center lg:items-start  ">
                  <div className="flex flex-col xl:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                     <Image
                        src="/coconut-oil-renew.jpeg"
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
               <div className="w-full">
                  <div>
                     <p className="text-[#669900] text-[16px]">In 20 + carts</p>
                     <h3 className="text-[27px] font-bold text-black">
                        {totalPrice}
                     </h3>
                     <p className="text-[12px] text-black">
                        Local taxes included (where applicable)
                     </p>
                     <p>
                        Raw African Shea Butter Bulk, 100% Pure Natural Organic
                        Unrefined Virgin From Ghana Moisturizer For Face, Skin,
                        Body,Hair, Soap
                     </p>
                     <div className="flex items-center gap-2">
                        {' '}
                        <a className="text-[12px] font-bold" href="#">
                           ShopKlaxonResources
                        </a>{' '}
                        <div className="flex items-center gap-1">
                           <Star className=" w-[14px]" />
                           <Star className=" w-[14px]" />
                           <Star className=" w-[14px]" />
                           <Star className=" w-[14px]" />
                           <Star className=" w-[14px]" />
                        </div>{' '}
                     </div>
                     <div className="flex items-center gap-3 p-2">
                        {' '}
                        <Check className=" w-[14px] text-[#669900]" />{' '}
                        <p className="text-[12px]">
                           Returns & exchanges accepted
                        </p>{' '}
                     </div>
                  </div>
                  <form className="p-4">
                     <Select onValueChange={(val) => setSelectedOption(val)}>
                        <Label>Size *</Label>
                        <SelectTrigger className="w-[85%] my-3 h-[50px] ">
                           <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectLabel>Select an option</SelectLabel>
                              {option.map((item) => (
                                 <SelectItem
                                    value={item.value}
                                    key={item.value}
                                 >
                                    {item.value}
                                 </SelectItem>
                              ))}
                           </SelectGroup>
                        </SelectContent>
                     </Select>

                     <Select onValueChange={(val) => setQuantity(Number(val))}>
                        <Label>Quantity *</Label>
                        <SelectTrigger className="w-[85%] my-3 h-[50px] ">
                           <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              {quantityValues.map((val) => (
                                 <SelectItem value={val.value} key={val.value}>
                                    {val.value}
                                 </SelectItem>
                              ))}
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  </form>
               </div>
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
         <div className="flex flex-col md:flex-row justify-between items-center m-[20px]">
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
         </div>
         <ProductAnalysis />
      </div>
   );
}

export default Page;
