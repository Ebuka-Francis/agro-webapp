import Navigation from '@/components/nav/Navigation';
import Header from '@/components/header/Header';
import CardFolder from '@/components/section/CardFolder';
import CommodityList from '@/components/commodity/Commodity';
import Footer from '@/components/footers/Footer';

export default function Home() {
   return (
      <div className="">
         <Navigation />
         <Header />
         <CardFolder />
         <CommodityList />
         <Footer />
      </div>
   );
}
