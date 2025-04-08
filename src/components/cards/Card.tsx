import * as React from 'react';

import {
   Card,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';

import { CardProps } from '@/types/types';

export function CardWithForm({ imgUrl, title, description }: CardProps) {
   return (
      <Card className="!border-none shadow-none w-[350px] flex flex-col justify-center">
         <div className="w-[50px] h-[50px] rounded-full bg-[#669900] flex items-center justify-center mx-auto">
            {imgUrl}
         </div>
         <CardHeader>
            <CardTitle className="text-center">{title}</CardTitle>
            <CardDescription className="text-center">
               {description}
            </CardDescription>
         </CardHeader>
      </Card>
   );
}
