import Image from 'next/image';
import { TopNav } from './TopNav';

export default function Navigation() {
   return (
      <div className=" bg-white sticky top-0 z-20  shadow-md">
         <div className="max-w-6xl mx-auto">
            <div className="flex items-center sm:items-end justify-between p-4">
               <Image src="/logo.png" alt="Logo" width={200} height={150} />

               <TopNav />
            </div>
         </div>
      </div>
   );
}
