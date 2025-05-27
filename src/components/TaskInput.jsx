import React, { useState, useRef } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="task-input">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
