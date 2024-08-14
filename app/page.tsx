import HeroSection from '@/components/hero/Hero';
import FaqSection from '@/components/faq/FaqSection';
import MainComponent from '@/components/featuresSection/MainComponent';
import NewPriceSection from '@/components/pricing/NewPriceSection';
import TrainersPage from '@/components/Trainers/trainers';
import OfferingsSection from '@/components/featuresSection/OfferingSection';
import R1pFitnessComponent from '@/components/textSection/Detail';
import { TypewriterEffectDemo } from '@/components/textSection/TypeWriterEffect';
import { ThreeDCardDemo } from '@/components/card/3d-card-demo';
import MainTable from '@/components/table/MainTable';
import ImageLayoutMain from '@/components/ImageLayout/ImageLayoutMain';
import HeroSection2 from '@/components/hero/Hero2';
import { EventsSection2 } from '@/components/events/EventSection';




interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}


// import CustomSwiper from '@/components/CoverflowSection';


const Home: React.FC = () => {
  return (
    <div id='Home' className="bg-black  min-h-screen text-white overflow-x-hidden">

      <HeroSection />
      <HeroSection2 />
      {/* <JoinPage/>
       */}
      <ThreeDCardDemo />
      <R1pFitnessComponent />
      <MainComponent />
      <EventsSection2 />
      <NewPriceSection />
      <TrainersPage />
      <MainTable />
      <ImageLayoutMain />
      <div className='mt-12'>
        <OfferingsSection />
      </div>
      <FaqSection />
      <TypewriterEffectDemo />
    </div>
  );
}

export default Home;
