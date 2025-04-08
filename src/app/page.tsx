import Header from '@/components/header/Header';
import CardFolder from '@/components/section/CardFolder';
import CommodityList from '@/components/commodity/Commodity';

export default function Home() {
   return (
      <div className="">
         <Header />
         <CardFolder />
         <CommodityList />
      </div>
   );
}
