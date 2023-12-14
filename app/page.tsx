import HeroSection from '@/components/Hero';
import TextSection from '@/components/TextSection';
import FaqSection from '@/components/FaqSection';
import MainComponent from '@/components/featuresSection/MainComponent';
import StaticPricingSection from '@/components/pricing/StaticPricingSection';
import PriceSection from '@/components/pricing/StaticPricingSection';
import NewPriceSection from '@/components/pricing/NewPriceSection';
import TrainersPage from '@/components/Trainers/trainers';
import TrainerProfilePage from '@/components/Trainers/OneTrainer';
import AnimatedHeadingSection from '@/components/textSection/textContainer';
import ImageGallery from '@/components/gallery/ImageGallery';
import BMICalculator from '@/components/bmi/BMICalculator';

// import CustomSwiper from '@/components/CoverflowSection';


const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">



      <HeroSection />
      <AnimatedHeadingSection />
      {/* <FeaturesSection/> */}



      <MainComponent />
      <NewPriceSection />
      <TrainersPage />
      <ImageGallery/>
      {/* <GComponent/> */}
      <BMICalculator/>
      <FaqSection />

    </div>
  );
}

export default Home;
