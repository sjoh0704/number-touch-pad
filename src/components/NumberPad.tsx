import React from 'react';
import styled from 'styled-components';
import NumberButton from './NumberButton';

const PadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2c3e50;
  border-radius: 20px;
  padding: clamp(15px, 2vw, 25px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  max-width: 90vw;
  margin: 0 auto;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: clamp(8px, 1.5vw, 12px);
  width: 100%;
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(8px, 1.5vw, 12px);
  width: 100%;
`;

interface NumberPadProps {
  onNumberClick: (number: number | string) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onNumberClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const bottomButtons = ['*', 0, '#'];

  return (
    <PadContainer>
      <ButtonGrid>
        {numbers.map((number) => (
          <NumberButton
            key={number}
            number={number}
            onClick={onNumberClick}
          />
        ))}
      </ButtonGrid>
      <BottomRow>
        {bottomButtons.map((button) => (
          <NumberButton
            key={button}
            number={button}
            onClick={onNumberClick}
            isSpecial={button === '*' || button === '#'}
          />
        ))}
      </BottomRow>
    </PadContainer>
  );
};

export default NumberPad; 