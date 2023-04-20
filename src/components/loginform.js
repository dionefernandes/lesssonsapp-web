import React, { useState } from 'react';

import { Form, Input, Button, Error } from '../styles/loginform';
import authService from '../services/auth';

export default function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (!username || !password) {
      setError('You need to provide the username and password.');
    } else {
      const token = await authService.authenticate(username, password);
      
      if(token.message) {
        setError(token.message);
        return false;
      }

      const validate = await authService.tokenValidate(token)
      
      if(validate.message) {
        setError(validate.message);
        return false;
      }

      const setLogged = authService.setLogged(username, token);

      if(setLogged && setLogged.message) {
        setError(setLogged.message);
        return false;
      }

      const getLogged = authService.getLogged();

      if(getLogged.message) {
        setError(getLogged.message);
        return false;
      } else {
        console.log(getLogged.token, getLogged.username);
      }

      window.location.href = '/lessons';
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Username'
        value={username}
        onChange={ (e) => setUsername(e.target.value) }
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
      />
      {error && <Error>{error}</Error>}
      <Button type='submit'>Sign In</Button>
    </Form>
  )
}