"use client"
import { FC, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-white focus:outline-none"
      >
        <span className="text-left">{question}</span>
        <span className="text-xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      {isOpen && <div className="p-4 text-white">{answer}</div>}
    </div>
  );
};

export default FaqItem;
