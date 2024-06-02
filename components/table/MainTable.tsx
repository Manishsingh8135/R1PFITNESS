// pages/index.tsx
import { GymComparisonTable } from "./GymComparisonTable";

export default function MainTable() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl md:text-6xl font-bold  text-center my-12 text-maincolor">Choose Your Perfect Gym: A Detailed Comparison</h1>
      <GymComparisonTable />
    </div>
  );
}
