import FaqItem from './FaqItems';

const faqs = [
  {
    question: 'Where can I park?',
    answer: 'Parking is available in the lot adjacent to the gym as well as on the street. We also have bike racks for those who prefer to cycle here.',
  },
  {
    question: 'What are the gym opening hours?',
    answer: 'Our gym is open from 5 am to 11 pm on weekdays and 7 am to 9 pm on weekends.',
  },
  {
    question: 'Do I need to be a member to access the gym?',
    answer: 'Yes, our facilities are exclusively available to members. You can sign up for a membership at our front desk or online.',
  },
  {
    question: 'Are personal training sessions available?',
    answer: 'Absolutely! We offer personal training sessions. You can book a session with any of our certified trainers either online or at the gym.',
  },
  {
    question: 'Do you offer group fitness classes?',
    answer: 'Yes, we have a variety of group classes including yoga, spinning, HIIT, and more. Check our schedule online for class times.',
  },
  {
    question: 'Can I freeze my membership if I go on vacation?',
    answer: 'Members can freeze their membership for up to one month per year for any reason.',
  },
  {
    question: 'What kind of equipment do you have?',
    answer: 'Our gym is equipped with state-of-the-art cardio machines, free weights, resistance machines, and functional training equipment.',
  },
  {
    question: 'Are there any age restrictions to join the gym?',
    answer: 'Members must be 16 years or older. Those under 18 require parental consent.',
  },
  {
    question: 'Do you have locker rooms and showers?',
    answer: 'Yes, our facilities include fully equipped locker rooms, showers, and saunas for your convenience.',
  },
  {
    question: 'Is there a cafe or a protein shake bar at the gym?',
    answer: 'Yes, our in-house cafe serves a variety of healthy snacks and protein shakes.',
  },
  {
    question: 'Do you have a swimming pool?',
    answer: 'We have a 25-meter indoor swimming pool available for lap swimming, aqua classes, and free swim periods.',
  },
  {
    question: 'Are there discounts for students or seniors?',
    answer: 'We offer discounted rates for both students and seniors. Please provide a valid ID for the discount.',
  },
  {
    question: 'Can I bring a guest to the gym?',
    answer: 'Each member is allowed one guest pass per month. Additional guest passes can be purchased at the front desk.',
  },
  {
    question: 'What measures are taken to ensure cleanliness in the gym?',
    answer: 'We pride ourselves on maintaining a clean environment. Equipment is sanitized regularly, and we provide cleaning stations for members to use before and after using the equipment.',
  },
  {
    question: 'Is Wi-Fi available at the gym?',
    answer: 'Yes, free Wi-Fi is available for all members. Connect to the network and log in with your member credentials.',
  },
];




const FaqSection = () => {
  return (
    <div id='faq' className="bg-black p-8">
      <h2 className=" text-6xl   lg:text-8xl   font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
