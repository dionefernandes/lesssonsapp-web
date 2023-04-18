import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: #00F;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
