// pages/trainers.tsx

import TrainerList from './TrainerList';
import { trainers } from '../../data/trainersData'; // Adjust the path accordingly

const TrainersPage: React.FC = () => {
  return <TrainerList trainers={trainers} />;
};

export default TrainersPage;
