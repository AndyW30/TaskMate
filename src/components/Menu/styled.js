import styled from 'styled-components';

const Palette = {
  purple_light: '#b6acbd',
  gray_dark: '#666666',
};

export const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border: black solid 0.2rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 12px;
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  font-family: var(--font-mono);
  margin-top: 1rem;
  justify-content: space-evenly;
`;