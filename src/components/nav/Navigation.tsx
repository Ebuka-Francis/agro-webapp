import Image from 'next/image';
import { TopNav } from './TopNav';

export default function Navigation() {
   return (
      <div className=" bg-white  shadow-md">
         <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between p-4">
               <Image src="/logo.png" alt="Logo" width={200} height={150} />

               <TopNav />
            </div>
         </div>
      </div>
   );
}
