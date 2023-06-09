import { TaskmateArrival, TaskmateTalking, TaskmateLeaving } from './styled';
import { useReducer, useEffect, useState } from 'react';
import CharacterBubble from '@/components/CharacterBubble';

/**
 * @param {any} state
 * @param {string} action
 */
function animationReducer(state, action) {
  switch (action) {
    case 'Arrival':
      return (
        <TaskmateArrival src="/img/Taskmate_Chuze_Basic.gif" alt="taskmate2" />
      );
    case 'Talking':
      return <TaskmateTalking src="/img/Taskmate_Kafe.gif" alt="taskmate2" />;
    case 'Hair':
      return (
        <TaskmateTalking src="/img/Taskmate_Hair_Basic.gif" alt="taskmate2" />
      );
    case 'Leaving':
      return (
        <TaskmateLeaving src="/img/Taskmate_Chuze_Basic.gif" alt="taskmate2" />
      );
    default:
      return state;
  }
}

export default function Character({ type, onAnimationComplete }) {
  const [picture, dispatch] = useReducer(animationReducer, null);
  const [showBubble, setShowBubble] = useState(false);

  // Animation and timing of conversation bubble; Code is commented so the animation will run immediately for better presentation. Otherwise it runs only once user enters the app.
  useEffect(() => {
    /*     const hasArrived = window.sessionStorage.getItem('hasArrived');
    if (type !== 'done' && hasArrived) return; */
    setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    setTimeout(() => {
      setShowBubble(false);
    }, 12000);
  }, []);

  // Animation and timing of character
  useEffect(() => {
    /* const hasArrived = window.sessionStorage.getItem('hasArrived'); */
    /*  if (type !== 'done' && hasArrived) {
      onAnimationComplete?.();
      return;
    } */
    dispatch('Arrival');
    /*  sessionStorage.setItem('hasArrived', 'Yes'); */
    setTimeout(() => {
      dispatch(type === 'done' ? 'Hair' : 'Talking');
    }, 3000);
    setTimeout(() => {
      dispatch('Leaving');
    }, 13000);
    setTimeout(() => {
      onAnimationComplete?.();
    }, 16000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {showBubble && <CharacterBubble type={type} />}
      {picture}
    </>
  );
}
