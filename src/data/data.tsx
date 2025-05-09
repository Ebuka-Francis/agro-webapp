import { CommodityProps } from '@/types/types';
import { Link } from 'lucide-react';

export const CardItems = [
   {
      id: '1',
      imgUrl: <Link />,
      title: 'Premium Agro Organic Export ',
      description:
         'We specialize in sourcing and exporting top-quality shea butter, castor oil, cashew nuts, and coconut oil to global markets. Our strict quality control ensures that every product meets international standards',
   },
   {
      id: '2',
      imgUrl: <Link />,
      title: 'Sustainable & Ethical Sourcing',
      description:
         'We specialize in sourcing and exporting top quality shea butter, castor oil, cashew nuts, and coconut oil to global markets. Our strict quality control ensures that every product meets international standards',
   },
   {
      id: '3',
      imgUrl: <Link />,
      title: 'Global Supply & Reliable Logistics',
      description:
         'We specialize in sourcing and exporting top-quality shea butter, castor oil, cashew nuts, and coconut oil to global markets. Our strict quality control ensures that every product meets international standards',
   },
];

export const Commodity: CommodityProps[] = [
   {
      id: 'c1',
      imgUrl: '/shae-butter.jpeg',
      description:
         'A rich, natural moisturizer extracted from shea nuts, known for its skin-nourishing and healing properties. Widely used in cosmetics and skincare',
      link: '/screens/shae-butter',
   },
   {
      id: 'c2',
      imgUrl: '/banner-img.jpeg',
      description:
         '   Cold-pressed and nutrient-rich, Castle Oil is valued for its versatility in cooking, skincare, and wellness, delivering natural nourishment and a range of health benefits. ',
      link: '/screens/castle-oil',
   },
   {
      id: 'c3',
      imgUrl: '/coconut-oil.jpeg',
      description:
         'Cold-pressed from fresh coconuts, this oil is popular in cooking, skincare, and haircare, offering numerous health benefits.',
      link: '/screens/coconut-oil',
   },

   {
      id: 'c5',
      imgUrl: '/banner-img.jpeg',
      description:
         'Extracted from the seeds of the Moringa oleicera tree through a cold press method, Our Moringa Oil of high nutrients value.',
      link: '/screens/moringa',
   },
];

export const Inorganic: CommodityProps[] = [
   //  {
   //    id: 'c4',
   //    imgUrl: '/banner-img.jpeg',
   //    description:
   //       ' Mica is a mineral with a layered structure that impresses with its exceptional chemical and thermal resistance, electrical insulation effect and sound-absorbing properties.',
   //    link: '/screens/mica',
   // },
];
