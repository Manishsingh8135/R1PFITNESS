export const calculateBMI = (height: number, weight: number): number => {
    if (height <= 0 || weight <= 0) {
      throw new Error("Invalid height or weight");
    }
  
    // Assuming height is in centimeters and weight is in kilograms
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
  
    return bmi;
  };
  
  export const getMessage = (bmi: number): string => {
    // Determine message based on BMI
    const messages = {
      low: ["Message for low BMI", "..."],
      normal: ["Message for normal BMI", "..."],
      high: ["Message for high BMI", "..."],
    };
  
    if (bmi < 18.5) return messages.low[Math.floor(Math.random() * messages.low.length)];
    if (bmi >= 18.5 && bmi <= 24.9) return messages.normal[Math.floor(Math.random() * messages.normal.length)];
    return messages.high[Math.floor(Math.random() * messages.high.length)];
  };
  