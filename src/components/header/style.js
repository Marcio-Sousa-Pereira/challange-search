import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 80px;
  background-color: #77abd0;
  align-items: center;
  justify-content: space-between;

  .profile {
    padding: 5px;
    background-color: #fff;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .logo-type {
    margin-left: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
