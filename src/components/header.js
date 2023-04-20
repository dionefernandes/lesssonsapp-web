import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Title, Hellouser } from '../styles/header';
import authService from '../services/auth';

import logo from '../assets/lessonsApp.png';

const Header = () => {
  const { username } = authService.getLogged();
  const isLogged = !!username;

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Lessons App" />
      </Link>
      <Title>Lessons App</Title>
      {isLogged ? (
      <Hellouser>
        Olá {username} ||
        <Link onClick={ () => authService.logout() }>
          Logout
        </Link>
      </Hellouser>
      ) : null}
    </Container>
  );
};

export default Header;
