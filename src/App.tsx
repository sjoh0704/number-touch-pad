import React, { useState } from 'react';
import styled from 'styled-components';
import NumberPad from './components/NumberPad';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
  padding: clamp(10px, 2vw, 20px);
  margin: 0 auto;
`;

const LockContainer = styled.div`
  background: #34495e;
  border-radius: 20px;
  padding: clamp(20px, 3vw, 40px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid #2c3e50;
  position: relative;
  min-height: 490px;
`;

const Handle = styled.div`
  position: absolute;
  bottom: -170px;
  left: 20%;
  transform: translateX(-50%) rotate(-90deg);
  width: 60px;
  height: 200px; /* Reduced from 250px */
  background: #a0aec0;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid #718096;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  transform-origin: top center;

  &:active {
    transform: translateX(-50%) rotate(0deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background: #cbd5e0;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    width: 35px;
    height: 110px; /* Reduced from 140px */
    background: #a0aec0;
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

function App() {
  const [displayNumber, setDisplayNumber] = useState<number | string | null>(null);
  console.log(displayNumber);
  const handleNumberClick = (number: number | string) => {
    setDisplayNumber(number);
  };

  return (
    <AppContainer>
      {/* <Title>Digital Door Lock</Title> */}
      <LockContainer>
        {/* <Display>{displayNumber !== null ? displayNumber : '0'}</Display> */}
        <NumberPad onNumberClick={handleNumberClick} />
        <Handle />
      </LockContainer>
    </AppContainer>
  );
}

export default App;
