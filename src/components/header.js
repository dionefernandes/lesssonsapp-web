import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Title } from '../styles/header';

import logo from '../assets/lessonsApp.png';

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Lessons App" />
      </Link>
      <Title>Lessons App</Title>
    </Container>
  );
};

export default Header;
