import HeroSection from '@/components/Hero';

import FaqSection from '@/components/FaqSection';
import MainComponent from '@/components/featuresSection/MainComponent';
import NewPriceSection from '@/components/pricing/NewPriceSection';
import TrainersPage from '@/components/Trainers/trainers';

import AnimatedHeadingSection from '@/components/textSection/textContainer';
import OfferingsSection from '@/components/featuresSection/OfferingSection';


// import CustomSwiper from '@/components/CoverflowSection';


const Home: React.FC = () => {
  return (
    <div className="bg-black  min-h-screen text-white">



      <HeroSection />

      <AnimatedHeadingSection /> 

      <MainComponent />

      <NewPriceSection />

      <TrainersPage />  
      <OfferingsSection/>
      <FaqSection />

    </div>
  );
}

export default Home;
