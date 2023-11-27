// components/PricingCard.tsx
"use client"
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  bgColor,
  textColor
}) => {
  // 3D Animation variants
  const cardVariants = {
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-10 m-5 rounded-lg shadow-lg ${bgColor} ${textColor}`}
      style={{ minHeight: '100vh' }} // This makes the card full height
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 2, delay: 0.5 }}
    >
      <h1 className="text-5xl font-bold mb-5">{title}</h1>
      <p className="text-4xl font-bold mb-5">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="text-xl mb-3">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
