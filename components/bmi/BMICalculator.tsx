"use client"
import React, { useState } from 'react';
import BMIResult from './BMIResult';

const BMICalculator = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleCalculate = () => {
    if (height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }

    const heightInMeters = height / 100; // Convert cm to meters
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI);

    const bmiMessage = calculatedBMI < 18.5 ? "Underweight" :
                       calculatedBMI >= 18.5 && calculatedBMI < 25 ? "Normal weight" :
                       calculatedBMI >= 25 && calculatedBMI < 30 ? "Overweight" :
                       "Obesity";
    setMessage(bmiMessage);
  };

  const handleClear = () => {
    setHeight(0);
    setWeight(0);
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="border-2 border-gray-300 rounded-md p-2 m-2"
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="border-2 border-gray-300 rounded-md p-2 m-2"
        />
      </div>
      <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
        Calculate BMI
      </button>
      <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">
        Clear
      </button>
      <BMIResult bmi={bmi} message={message} />
    </div>
  );
};

export default BMICalculator;
