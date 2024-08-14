// File: app/workout-planner/page.tsx

import React from 'react';
import WorkoutPlanner from './WorkoutPlanner';
import { dummyUsers } from '../../../types/userTypes';

const WorkoutPlannerPage = () => {
  // For now, we'll use the first dummy user. In a real app, you'd fetch the current user's data.
  const currentUser = dummyUsers[0];

  return <WorkoutPlanner user={currentUser} />;
};

export default WorkoutPlannerPage;