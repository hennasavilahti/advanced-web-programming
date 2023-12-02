import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';
import Card from './Card.jsx';
import './App.css';

const StyledParagraph = styled.p`
  font-size: 1.5em;
  color: ${(props) => (props.isActive ? 'green' : 'purple')};
  font-weight: bolder;
`;

function App() {
  const [count, setCount] = useState(0);
  const isActive = false;

  return (
    <>
      <Card></Card>
      <h1>Vite + React</h1>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <StyledParagraph isActive={isActive}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </StyledParagraph>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
