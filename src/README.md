# Smart Task Manager

This is a simple Task Manager application built with React. It allows users to add tasks, mark them as completed, edit or delete them. It also includes a Pomodoro timer and shows task statistics.

The project was created as part of my CSDD2002 - Emerging Dev Technologies assignment to practice using React Hooks in a real-world app.

## Features

- Add new tasks
- Edit task names
- Mark tasks as completed or incomplete
- Delete tasks
- Pomodoro timer to stay focused
- Task statistics for total and completed tasks
- Data is saved in local storage and persists between sessions

## React Hooks Used

Here’s how I used different React Hooks in the project:

- `useState`: To manage task input and toggle task completion
- `useEffect`: To save tasks in localStorage and load them on app mount
- `useReducer`: For managing the task list and timer logic
- `useRef`: To focus the task input field and control timer intervals
- `useContext`: For theme settings and task stats
- `useMemo`: To filter completed tasks and memoize stats
- `useCallback`: To handle adding/removing tasks and timer actions
- `useLayoutEffect`: To scroll to the latest task
- `useLocalStorage`: A custom hook to persist tasks in localStorage
- `usePomodoroTimer`: A custom hook for timer logic

## How to Run the Project

1. Install the dependencies:
```bash
npm install
