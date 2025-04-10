'use client';

import * as React from 'react';
import NextLink from 'next/link';

// import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';

// type Checked = DropdownMenuCheckboxItemProps['checked'];

export function BuyNow() {
   // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
   // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
   // const [showPanel, setShowPanel] = React.useState<Checked>(false);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               className="text-[#fff] w-[150px] h-[50px] font-bold bg-[#669900] border border-black p-3  flex items-center gap-2 cursor-pointer "
               variant="outline"
            >
               Buy Now
               <ChevronRight />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="bg-white shadow-xl shadow-gray-500/50  w-[200px] p-[10px] mt-[10px] flex flex-col  ">
            <DropdownMenuSeparator />
            <NextLink
               href="https://www.amazon.com/organic-products/s?k=organic+products"
               target="_blank"
               className="hover:bg-gray-400 cursor-pointer text-black text-[14px] p-2 w-full "
            >
               Get from amazon
            </NextLink>
            <NextLink
               href="/"
               className="hover:bg-gray-400 cursor-pointer text-black text-[14px] p-2 w-full "
               target="_blank"
            >
               Choose your retailer
            </NextLink>
            <NextLink
               href="/"
               className="hover:bg-gray-400 cursor-pointer text-black text-[14px] p-2 w-full "
               target="_blank"
            >
               Get direct from source
            </NextLink>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
