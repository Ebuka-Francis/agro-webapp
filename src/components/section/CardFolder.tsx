import { CardWithForm } from '../cards/Card';
import { CardItems } from '@/data/data';

export default function CardFolder() {
   return (
      <div className=" max-w-6xl mx-auto mt-5 ">
         <h3 className="text-[34px] text-center  mb-4">What We Do</h3>
         <div className="flex flex-col items-center sm:flex-row gap-3 ">
            {CardItems.map((item) => (
               <CardWithForm
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  description={item.description}
               />
            ))}
         </div>
      </div>
   );
}
