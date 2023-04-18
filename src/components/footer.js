import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterContent, Logo, SocialMediaContainer, Title, SocialMediaLink } from '../styles/footer';

import logo from '../assets/lessonsApp.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialMediaContainer>
          <Title>Siga-nos</Title>
          <SocialMediaLink href="https://www.facebook.com">
            <FaFacebook size={24} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com">
            <FaInstagram size={24} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.youtube.com">
            <FaYoutube size={24} />
          </SocialMediaLink>
        </SocialMediaContainer>
        <Logo src={logo} alt="Lessons App" />
        <div>
          <h2>Contatos</h2>
          <p>Telefone: (00) 0000-0000</p>
          <p>E-mail: contato@lessonsapp.com</p>
          <p>WhatsApp: (00) 00000-0000</p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
