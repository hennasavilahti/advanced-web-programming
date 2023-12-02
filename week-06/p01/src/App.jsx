import { useState } from 'react';

import './App.css';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const buttonClickHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <h1>Styling React Applications</h1>
      <div className={isToggled ? 'other__card' : 'card'}>
        <div>
          <p
            style={{
              color: isToggled ? 'red' : 'green',
              fontWeight: isToggled ? 'bold' : 'normal',
            }}
          >
            Style me!
          </p>
          <button
            onClick={buttonClickHandler}
            style={{
              backgroundColor: isToggled ? 'lightgrey' : 'white',
            }}
          >
            Toggle style
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
