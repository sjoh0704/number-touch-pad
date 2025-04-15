import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

interface NumberButtonProps {
  number: number | string;
  onClick: (number: number | string) => void;
  isSpecial?: boolean;
}

const Button = styled.button<{ isSpecial?: boolean }>`
  width: clamp(50px, 8vw, 80px);
  height: clamp(50px, 8vw, 80px);
  border-radius: 8px;
  border: 2px solid ${props => props.isSpecial ? '#ff6b6b' : '#4a90e2'};
  background: ${props => props.isSpecial ? 'linear-gradient(145deg, #ff8e8e, #ff6b6b)' : 'linear-gradient(145deg, #5a9ce6, #4a90e2)'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
              inset 0 2px 4px rgba(255, 255, 255, 0.2);
  font-size: clamp(20px, 3vw, 28px);
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background: ${props => props.isSpecial ? 'linear-gradient(145deg, #ff6b6b, #ff8e8e)' : 'linear-gradient(145deg, #4a90e2, #5a9ce6)'};
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

const soundFiles = {
  '0': '/sounds/0.mp3',
  '1': '/sounds/1.mp3',
  '2': '/sounds/2.mp3',
  '3': '/sounds/3.mp3',
  '4': '/sounds/4.mp3',
  '5': '/sounds/5.mp3',
  '6': '/sounds/6.mp3',
  '7': '/sounds/7.mp3',
  '8': '/sounds/8.mp3',
  '9': '/sounds/9.mp3',
  '*': '/sounds/star.mp3',
  '#': '/sounds/hash.mp3',
};

const NumberButton: React.FC<NumberButtonProps> = ({ number, onClick, isSpecial }) => {
  const [play] = useSound(soundFiles[number as keyof typeof soundFiles], {
    volume: 0.5,
    interrupt: true,
  });

  const handleClick = () => {
    play();
    onClick(number);
  };

  return (
    <Button onClick={handleClick} isSpecial={isSpecial}>
      {number}
    </Button>
  );
};

export default NumberButton; 