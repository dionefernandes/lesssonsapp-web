import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 97.7%;
  background-color: #00F;
  color: #fff;
  padding: 15px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const SocialMediaContainer = styled.div`
  margin-right: 20px;
`;

export const Title = styled.h2`
  color: #FFF;
  width: 100%;
`;

export const SocialMediaLink = styled.a`
  margin-right: 20px;
  color: #fff;

  &:hover {
    color: #ccc;
  }
`;
