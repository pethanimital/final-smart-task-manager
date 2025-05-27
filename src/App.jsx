import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TaskStatsProvider } from './context/TaskStatsContext';
import TaskInput from './components/TaskInput';
import TaskList, { taskReducer } from './components/TaskList';
import TaskStats from './components/TaskStats';
import Timer from './components/Timer';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [state, dispatch] = React.useReducer(taskReducer, tasks);

  React.useEffect(() => {
    setTasks(state);
  }, [state, setTasks]);

  const addTask = (taskText) => {
    dispatch({ type: 'ADD', payload: taskText });
  };

  return (
    <ThemeProvider>
      <TaskStatsProvider tasks={state}>
        <div className="App">
          <h1>Smart Task Manager</h1>
          <TaskInput addTask={addTask} />
          <TaskList tasks={state} dispatch={dispatch} />
          <TaskStats />
          <Timer />
        </div>
      </TaskStatsProvider>
    </ThemeProvider>
  );
}

export default App;
