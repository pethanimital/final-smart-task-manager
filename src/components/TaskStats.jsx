import React, { useContext, useMemo } from 'react';
import { TaskStatsContext } from '../context/TaskStatsContext';

function TaskStats() {
  const { tasks } = useContext(TaskStatsContext);

  const totalTasks = tasks.length;
  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

  return (
    <div className="task-stats">
      <h3>Task Statistics</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
    </div>
  );
}

export default TaskStats;
