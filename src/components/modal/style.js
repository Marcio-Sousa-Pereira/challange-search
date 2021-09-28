import styled from 'styled-components';

export const ModalHeader = styled.header`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  .svg-icon-close-modal {
    margin-right: 10px;
  }
`
export const Label = styled.div`
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 5px 5px 15px;
    border-radius: 10px;
    margin-bottom: 5px;

    h5 {
        font-weight: bold;
    }
`;

export const ProfileUser = styled.div`
  position: absolute;
  z-index: 400;
  left: 0;
  right: 0;
  top: -45px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  width: 90px;
  min-width: 90px;
  border-radius: 50%;
  background-color: yellow;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
`
