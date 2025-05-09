import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

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
      link: '/screens/shae-butter',
   },
   {
      label: 'Coconut Oil',
      link: '/screens/coconut-oil',
   },
   {
      label: 'Castle Oil',
      link: '/screens/castle-oil',
   },
   {
      label: 'Moringa',
      link: '/screens/moringa',
   },
   {
      label: 'Mica',
      link: '/screens/mica',
   },
];

export default function Footer() {
   return (
      <footer className="bg-[#0a0a0a] text-white">
         <div className="max-w-6xl mx-auto flex justify-between items-start sm:items-center flex-col sm:flex-row ">
            <div className=" flex gap-10 p-5 flex-col md:flex-row ">
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

            <div className="flex gap-10  p-5 flex-col md:flex-row ">
               <div>
                  <Image
                     src="/products-Raw-Shea-Nuts.jpg"
                     alt="shea butter image "
                     width={300}
                     height={200}
                  />
               </div>
               <div className="flex flex-col gap-2 text-[#919191] max-w-[255px]">
                  <h3 className="text-[30px] text-white mb-2 ">
                     Get in touch with us{' '}
                  </h3>
                  <address className="text-[13px]">
                     <b>Klaxon Ford Resources </b>
                     <br />
                     Head Office: 1, Una Obasi Street of MCC Road, Aba, Abia
                     State. Company Factory: Oyo State Nigeria.
                  </address>
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <Phone className="w-[13px]" />
                        <p className="text-[13px]">+4917655025872</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Mail className="w-[13px]" />
                        <p className="text-[13px]">
                           sales@klaxonfordresources.com
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[#111] ">
            <div className="max-w-6xl  p-5  mx-auto flex justify-between items-center h-[inherit] ">
               <Link
                  className="text-[13px] text-[#919191] "
                  target="_blank"
                  href="/sales@klaxonresoursces.com"
               >
                  sales@klaxonfordresoursces.com
               </Link>
               <div className="flex gap-3 items-center">
                  <Link href={''}>
                     <Facebook className="w-[15px]" />
                  </Link>
                  <Link href={''}>
                     <Instagram className="w-[15px]" />
                  </Link>
                  <Link href={''}>
                     <Mail className="w-[15px]" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
