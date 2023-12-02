import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  border-color: #a9c3f3;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: cornflowerblue;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default Button;
