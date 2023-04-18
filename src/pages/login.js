import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/loginform';
import { Container, Title } from '../styles/login';

export default function Login() {
  return (
    <><Header /><Container>
      <Title>Login</Title>
      <LoginForm />
    </Container><Footer /></>
  );
}