import { useState } from 'react';
import buttonStyles from './Button.module.css';
import boxStyles from './Box.module.css';

import './App.css';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const buttonClickHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <h1>Styling React Applications</h1>
      <div className={isToggled ? `active` : ``}>
        <div>
          <p className={boxStyles.active}>Style me!</p>
          <button className={buttonStyles.button} onClick={buttonClickHandler}>
            Toggle style
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
