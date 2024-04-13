import styled from "styled-components";

export const Button = styled.button`
display: flex;
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #226fbe;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b4f88;
  }
`;

export const FeedbackOpt = styled.div`
display: flex;`