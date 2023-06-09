import { TaskmateFly, TaskmateDrop, TaskmateTalking } from './styled';
import { useReducer, useEffect, useState } from 'react';
import {
  BubbleContainer,
  BubbleContent,
} from '@/components/CharacterBubble/styled';

/**
 * @param {any} state
 * @param {string} action
 */
function animationReducer(state, action) {
  switch (action) {
    case 'Fly':
      return <TaskmateFly src="/img/Taskmate_Fly.gif" alt="taskmate2" />;
    case 'Drop':
      return <TaskmateDrop src="/img/Taskmate_Drop.gif" alt="taskmate3" />;
    case 'Hair':
      return (
        <TaskmateTalking src="/img/Taskmate_Hair_Basic.gif" alt="taskmate4" />
      );
    default:
      return state;
  }
}

export default function CharacterSetting() {
  const [picture, dispatch] = useReducer(animationReducer, null);
  const [showBubble, setShowBubble] = useState(false);

  // Animation and timing of conversation bubble
  useEffect(() => {
    setTimeout(() => {
      setShowBubble(true);
    }, 3000);
  }, []);

  // Animation and timing of character
  useEffect(() => {
    dispatch('Fly');
    setTimeout(() => {
      dispatch('Drop');
    }, 1000);
    setTimeout(() => {
      dispatch('Hair');
    }, 2000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {showBubble && (
        <BubbleContainer
          style={{
            position: 'absolute',
            top: '50%',
            left: '33%',
          }}
        >
          <BubbleContent>
            <p>Hi! My name is Todoella! What is your name?</p>
          </BubbleContent>
        </BubbleContainer>
      )}
      {picture}
    </>
  );
}
