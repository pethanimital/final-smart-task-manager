import { useReducer, useRef, useCallback } from 'react';

function timerReducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, running: true };
    case 'STOP':
      return { ...state, running: false };
    case 'RESET':
      return { ...state, seconds: 0 };
    case 'TICK':
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
}

export default function usePomodoroTimer() {
  const [state, dispatch] = useReducer(timerReducer, { seconds: 0, running: false });
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (!state.running) {
      dispatch({ type: 'START' });
      intervalRef.current = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
  }, [state.running]);

  const stop = useCallback(() => {
    dispatch({ type: 'STOP' });
    clearInterval(intervalRef.current);
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
    clearInterval(intervalRef.current);
  }, []);

  return { seconds: state.seconds, running: state.running, start, stop, reset };
}
