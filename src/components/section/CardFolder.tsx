import { CardWithForm } from '../cards/Card';
import { CardItems } from '@/data/data';

export default function CardFolder() {
   return (
      <div className="flex gap-3  max-w-6xl mx-auto ">
         {CardItems.map((item) => (
            <CardWithForm
               key={item.id}
               id={item.id}
               title={item.title}
               imgUrl={item.imgUrl}
               link={item.link}
               description={item.description}
            />
         ))}
      </div>
   );
}
