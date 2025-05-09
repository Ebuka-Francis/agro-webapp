'use client';
import { BuyNow } from '@/components/buy-now';
import ProductAnalysis from '@/components/productAnalysis';
import Image from 'next/image';
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
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';

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

export const option = [
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

export const quantityValues = [
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
      <div className="mt-6 max-w-6xl mx-auto p-5 ">
         <h3 className=" font-bold mb-3 text-center text-[34px]">
            Product Details
         </h3>
         <div className="flex flex-col lg:flex-row items-start gap-5 w-full ">
            <div className=" static lg:sticky md:top-[150px] mx-auto max-w-[1000px] w-[100%] flex flex-col gap-[20px] items-center md:items-start  ">
               <div className="flex flex-col lg:flex-row gap-[10px] w-[100%] items-center lg:items-start ">
                  <Image
                     src="/moringa-renewd.jpeg"
                     alt="Castle oil"
                     width={300}
                     height={200}
                  />
                  <div className="font-bold flex lg:flex-col gap-[10px]">
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
                     USD {totalPrice}
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
                     <p className="text-[12px]">Returns & exchanges accepted</p>{' '}
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
                              <SelectItem value={item.value} key={item.value}>
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
            <h3 className=" m-4 text-[30px]">Moringa Oil</h3>
            <div className="text-[20px] p-4 ">
               <p>
                  Extracted from the seeds of the Moringa oleifera tree through
                  a cold press method, our Moringa Oil is a premium-quality,
                  nutrient-rich oil known for its light texture and powerful
                  healing properties. Retaining all its natural benefits due to
                  cold pressing, this oil is a true skin and hair elixir.
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
                     Packed with antioxidants, omega-9 fatty acids, and Vitamin
                     E, Moringa oil helps hydrate, soften, and revitalize dull,
                     tired skin.
                  </li>

                  <p className="font-bold">2. Lightweight & Non-Greasy</p>
                  <li>
                     Absorbs quickly without clogging pores, making it perfect
                     for oily, dry, or sensitive skin types.
                  </li>
                  <p className="font-bold">3.Natural Anti-Aging Formula</p>
                  <li>
                     Rich in behenic acid and antioxidants, it helps reduce the
                     appearance of fine lines, wrinkles, and age spots.
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
