import React, { useState } from 'react';

import { Form, Input, Button, Error } from '../styles/loginform';

export default function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (!username || !password) {
      setError('You need to provide the username and password.');
    } else {
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