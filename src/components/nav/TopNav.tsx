'use client';

import * as React from 'react';
import Link from 'next/link';
import NextLink from 'next/link';
import { useState } from 'react';

import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TopNav() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const handleCLoseMenu = () => setIsMobileMenuOpen(false);

   return (
      <div>
         {/* Mobile Menu Button */}
         <div className="block sm:hidden p-4">
            <Menu
               className="h-6 w-6 cursor-pointer"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
         </div>

         {/* Mobile Dropdown Menu */}
         {isMobileMenuOpen && (
            <div
               className={cn(
                  'fixed inset-0 z-50 bg-white flex flex-col items-start space-y-6 p-6 transform transition-transform duration-300 ease-in-out sm:hidden',
                  isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
               )}
            >
               <button
                  onClick={handleCLoseMenu}
                  className="fixed top-5 right-5"
               >
                  <X />
               </button>
               <NextLink
                  onClick={handleCLoseMenu}
                  href="/"
                  className="text-lg font-semibold"
               >
                  Home
               </NextLink>
               <NextLink
                  onClick={handleCLoseMenu}
                  href="/screens/about-us"
                  className="text-lg font-semibold"
               >
                  About us
               </NextLink>
               <NextLink
                  onClick={handleCLoseMenu}
                  href="/screens/product"
                  className="text-lg font-semibold"
               >
                  Our Product
               </NextLink>
               <NextLink
                  onClick={handleCLoseMenu}
                  href="/screens/our-team"
                  className="text-lg font-semibold"
               >
                  Contact us
               </NextLink>
            </div>
         )}

         {/* Desktop Navigation */}
         <NavigationMenu className="hidden sm:block">
            <NavigationMenuList className="w-[100%]">
               <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        Home
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link href="/screens/about-us" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        About us
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link href="/screens/product" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        Our Product
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link href="/screens/our-team" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        Contact us
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
}
