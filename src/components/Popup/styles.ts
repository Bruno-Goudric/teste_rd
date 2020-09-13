import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  background-color: #fff;
  color: #868686;
  width: 50%;
  height: 50%;
`;
export const ButtonClosed = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  left: 20%;
  top: 16px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #000;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const Content = styled.div`
  text-align: center;
`;
