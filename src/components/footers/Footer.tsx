import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const footerDate1 = [
   {
      label: 'African Artefact Exports',
      link: '',
   },
   {
      label: 'Agricultural Commodities Exports',
      link: '',
   },
   {
      label: 'Agro Processors',
      link: '',
   },
   {
      label: 'Commodity Distributors',
      link: '',
   },
   {
      label: 'Exporters & Importers',
      link: '',
   },
   {
      label: 'Sourcing & Buying Agents',
      link: '',
   },
];

const footerData2 = [
   {
      label: 'Shea Butter',
      link: '',
   },
   {
      label: 'Shea Nuts',
      link: '',
   },
   {
      label: 'Kola Nuts',
      link: '',
   },
   {
      label: 'Cocoa Butter',
      link: '',
   },
   {
      label: 'Cocoa',
      link: '',
   },
   {
      label: 'Cocoa Powder',
      link: '',
   },
];

export default function Footer() {
   return (
      <footer className="bg-[#0a0a0a] text-white">
         <div className="max-w-6xl mx-auto flex justify-between items-center ">
            <div className=" flex gap-10 p-5">
               <div className="max-w-[500px]">
                  <h3 className="text-[30px] text-white mb-4 ">What We Do</h3>
                  <div className="flex flex-col gap-3">
                     {footerDate1.map((item) => (
                        <a
                           href={item.link}
                           className="text-[13px] text-[#919191] hover:text-[#669900]"
                           key={item.label}
                        >
                           {item.label}
                        </a>
                     ))}
                  </div>
               </div>

               <div className="flex flex-col gap-3 max-w-[500px] ">
                  <h3 className="text-[30px] text-white mb-2 ">
                     Our Commodity
                  </h3>
                  <div className="flex flex-col text-[#919191] gap-3">
                     {footerData2.map((item) => (
                        <a
                           href={item.link}
                           key={item.label}
                           className="text-[13px] text-[#919191] hover:text-[#669900]"
                        >
                           {item.label}
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex gap-10">
               <div>
                  <Image
                     src="/products-Raw-Shea-Nuts.jpg"
                     alt="shea butter image "
                     width={300}
                     height={200}
                  />
               </div>
               <div className="flex flex-col gap-2 text-[#919191]">
                  <h3 className="text-[30px] text-white mb-2 ">
                     Get in touch with us{' '}
                  </h3>
                  <address className="text-[13px]">
                     <b> Stemak Limited </b>
                     <br />
                     11 Irene Wontumi Street - Parakuo Estates, Dome Greater
                     Accra Region. Ghana, West Africa
                  </address>
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <Phone className="w-[13px]" />
                        <p className="text-[13px]">+233 (0)24 427 18 18</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Mail className="w-[13px]" />
                        <p className="text-[13px]"> info@stemaklimited.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[#111] h-[100px] "></div>
      </footer>
   );
}
