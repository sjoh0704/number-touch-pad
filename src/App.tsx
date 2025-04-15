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
`;

const Display = styled.div`
  width: clamp(200px, 50vw, 400px);
  height: clamp(60px, 15vw, 120px);
  background: #34495e;
  border-radius: 15px;
  margin-bottom: clamp(20px, 5vw, 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(32px, 8vw, 64px);
  font-weight: bold;
  color: #ecf0f1;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  text-align: center;
  overflow: hidden;
  border: 2px solid #2c3e50;
`;

const Title = styled.h1`
  color: #ecf0f1;
  margin-bottom: clamp(20px, 5vw, 40px);
  text-align: center;
  font-size: clamp(24px, 6vw, 48px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const LockContainer = styled.div`
  background: #34495e;
  border-radius: 20px;
  padding: clamp(20px, 3vw, 40px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid #2c3e50;
`;

function App() {
  const [displayNumber, setDisplayNumber] = useState<number | string | null>(null);

  const handleNumberClick = (number: number | string) => {
    setDisplayNumber(number);
  };

  return (
    <AppContainer>
      <Title>Digital Door Lock</Title>
      <LockContainer>
        <Display>{displayNumber !== null ? displayNumber : '0'}</Display>
        <NumberPad onNumberClick={handleNumberClick} />
      </LockContainer>
    </AppContainer>
  );
}

export default App;
