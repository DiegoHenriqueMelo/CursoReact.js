import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: gray;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 90%;
    height: 80%;
    padding: 0px 10px;
    margin: auto;

    background-color: darkgray;
    border: 2px solid black;
    border-radius: 10px;

    color: white;
    text-align: end;
    font-size: 30px;
    font-family: "Roboto";
    font-weight: 700;
  }
`;
