import { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="md" style={{ backgroundColor: 'beige' }}>
        <Typography variant="h1">Vite + React</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="body1">
          Edit <code>src/App.jsx</code> and save to test HMR
        </Typography>
      </Container>
    </>
  );
}

export default App;
