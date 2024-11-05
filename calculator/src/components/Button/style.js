import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  margin: 5px;
  height: 30%;

  background-color: white;
  border: 0;
  border-radius: 5px;

  flex: 1;

  font-weight: 700;
  font-size: 24px;

  &:hover {
    background-color: lightgray;
    transition: 0.2s;
  }
`;
