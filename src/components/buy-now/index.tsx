'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function BuyNow() {
   const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
   const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
   const [showPanel, setShowPanel] = React.useState<Checked>(false);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               className="text-[#fff] w-[150px] h-[50px] font-bold bg-[#669900] border border-black p-3  flex items-center gap-2"
               variant="outline"
            >
               Buy Now
               <ChevronRight />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className=" inset-shadow-sm inset-shadow-gray-500 bg-white w-[200px] p-[10px]">
            <DropdownMenuLabel>Buy now</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
               checked={showStatusBar}
               onCheckedChange={setShowStatusBar}
            >
               Get from amazon
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={showActivityBar}
               onCheckedChange={setShowActivityBar}
               disabled
            >
               Choose your retailer
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={showPanel}
               onCheckedChange={setShowPanel}
            >
               Get direct from source
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
