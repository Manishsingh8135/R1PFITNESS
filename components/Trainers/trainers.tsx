// pages/trainers.tsx

import TrainerList from './TrainerList';
import { trainers } from '../../data/trainersData'; // Adjust the path accordingly

const TrainersPage: React.FC = () => {
  return (
  <div id='Trainers'>
  < TrainerList trainers={trainers} />
  </div>  
  )
};

export default TrainersPage;
