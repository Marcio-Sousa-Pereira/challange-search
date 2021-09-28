import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentBody = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 70vh;
  max-width: 900px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  min-width: 290px;

  .row-input-search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
