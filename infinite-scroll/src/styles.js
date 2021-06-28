import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: black;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: blue;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 10px;
  margin: 10px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardItem = styled.header`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
