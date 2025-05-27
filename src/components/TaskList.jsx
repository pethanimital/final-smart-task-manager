import React, { useState, useLayoutEffect, useMemo } from 'react';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'REMOVE':
      return state.filter((task) => task.id !== action.payload);
    case 'UPDATE':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
    default:
      return state;
  }
};

function TaskList({ tasks, dispatch }) {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  useLayoutEffect(() => {
    const lastTask = document.querySelector('.task-list li:last-child');
    if (lastTask) lastTask.scrollIntoView({ behavior: 'smooth' });
  }, [tasks]);

  const completedTasks = useMemo(() => tasks.filter((task) => task.completed), [tasks]);

  const handleUpdate = (task) => {
    dispatch({ type: 'UPDATE', payload: { id: task.id, text: editText } });
    setEditTaskId(null);
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(task)}>Save</button>
                <button onClick={() => setEditTaskId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => dispatch({ type: 'TOGGLE', payload: task.id })}
                >
                  {task.text}
                </span>
                <button onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}>Delete</button>
                <button onClick={() => { setEditTaskId(task.id); setEditText(task.text); }}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <p>{completedTasks.length} completed tasks</p>
    </div>
  );
}

export { taskReducer };
export default TaskList;
