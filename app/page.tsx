import HeroSection from '@/components/hero/Hero';

import FaqSection from '@/components/faq/FaqSection';
import MainComponent from '@/components/featuresSection/MainComponent';
import NewPriceSection from '@/components/pricing/NewPriceSection';
import TrainersPage from '@/components/Trainers/trainers';

import OfferingsSection from '@/components/featuresSection/OfferingSection';
//import MyPage from '@/components/textSection/MyPage';
import R1pFitnessComponent from '@/components/textSection/Detail';
import { ParallaxScrollSecondDemo } from '@/components/ImageSection/ParallaxComponent';
import { InfiniteMovingCardsDemo } from '@/components/Testimonial/Testimonial';
import { NavbarDemo } from '@/components/Navbar/NavbarDemo';
import { TypewriterEffectDemo } from '@/components/textSection/TypeWriterEffect';


// import CustomSwiper from '@/components/CoverflowSection';


const Home: React.FC = () => {
  return (
    <div id= 'Home' className="bg-black  min-h-screen text-white">

      <NavbarDemo/>

      <HeroSection />

      <R1pFitnessComponent/>
      <MainComponent />

      <NewPriceSection />

      <TrainersPage />  
      <div className='mt-48'>
      <ParallaxScrollSecondDemo/>
      </div>
      
      <InfiniteMovingCardsDemo/>
      
      <OfferingsSection/>
      <FaqSection />
      <TypewriterEffectDemo/>

    </div>
  );
}

export default Home;
