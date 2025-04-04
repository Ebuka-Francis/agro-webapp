import { ReactNode } from 'react';

export interface CardProps {
   id: string;
   title: string;
   imgUrl: ReactNode;
   link: string;
   description: string;
}

export interface CommodityProps {
   id: string;
   imgUrl: string;
}
