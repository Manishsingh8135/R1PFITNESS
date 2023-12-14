import React from 'react';

type BMIResultProps = {
  bmi: number | null;
  message: string;
};

const BMIResult: React.FC<BMIResultProps> = ({ bmi, message }) => {
  if (bmi === null) return null;

  return (
    <div>
      <p>Your BMI: {bmi.toFixed(2)}</p>
      <p>{message}</p>
    </div>
  );
};

export default BMIResult;
