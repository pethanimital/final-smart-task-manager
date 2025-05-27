import React, { createContext } from 'react';

export const TaskStatsContext = createContext();

export const TaskStatsProvider = ({ children, tasks }) => {
  return (
    <TaskStatsContext.Provider value={{ tasks }}>
      {children}
    </TaskStatsContext.Provider>
  );
};
