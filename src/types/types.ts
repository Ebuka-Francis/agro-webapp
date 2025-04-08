import { ReactNode } from 'react';

export interface CardProps {
   id: string;
   title: string;
   imgUrl: ReactNode;
   description: string;
}

export interface CommodityProps {
   id: string;
   imgUrl: string;
   description: string;
   link: string;
}
