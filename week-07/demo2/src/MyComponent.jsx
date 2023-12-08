import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Your current theme is: {theme}</p>;
};

export default MyComponent;
