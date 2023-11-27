// components/PricingSection.tsx
"use client"
import PricingCard from './PricingCard';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <div className="flex justify-center items-center">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PricingSection;
