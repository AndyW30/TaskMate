import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Palette } from './Palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 50%;
  width: 50%;
  max-width: 100%;
  margin-left: 25%;
  margin-right: 25%;

  @media (max-width: 576px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    height: 40%;
    margin-top: 30%;
  }
`;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const TaskListContainer = styled.div`
  height: 50vh;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 12px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Palette.gray_light};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${Palette.purple_light};
  }
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  padding: 1rem;

  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 10px;
  text-decoration: none;
  color: ${Palette.black};
  font-size: 0.8rem;
  background-color: ${Palette.white};
  padding: 0.5rem 2rem;
  border: black solid 0.1rem;
  box-shadow: -3px 4px rgb(129, 129, 129);
  border-radius: 8px;
  font-family: var(--font-todolist);
  width: 100%;
  height: 2rem;
  padding-left: 3rem;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const PlusIcon = styled(FaPlus)`
  position: absolute;
  left: 2rem;
  color: ${Palette.black};
  cursor: pointer;
  z-index: 1;
`;

export const TaskCount = styled.div`
  margin-top: 1rem;
  color: ${Palette.gray_dark};
  font-family: var(--font-mono);
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;
  width: 4rem;

  &:hover {
    background-color: ${Palette.purple_light};
  }
`;

export const MoneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 6rem;
  right: 2rem;
  align-items: center;
`;

export const Money = styled.img``;
