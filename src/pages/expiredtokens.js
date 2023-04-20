import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import authService from '../services/auth';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  Container,
  Content,
  Title,
  Warning,
  ButtonGroup,
  DeleteButton,
  CancelButton,
  Navigation,
  Success
} from '../styles/viewlesson';

const ExpiredToken = () => {
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const valid = async () => {
      const valid = await api.isTokenValid();

      if(!valid.status === 200) {
        window.location.href = '/';
        return false;
      }
    }
    
    valid();
  }, []);

  if( !authService.isAuthenticated() )
    return false;

  const handleDeleteClick = async () => {
    setSuccess('Expired tokens have been deleted successfully!');
    await api.expiredTokens();
  };

  return (
    <>
      <Header />
      <Navigation>
        <Link to="/lessons">
          <FiArrowLeft />
        </Link>
        <span>Lessons List</span>
      </Navigation>
      <Container>
        <Title>Expired Token</Title>
        <Content>
          <>
            <Warning>
              <div>Caution!</div>
              Do you really want to delete expired tokens from the system?
            </Warning>
            {success && <Success>{success}</Success>}
            <ButtonGroup>
              <DeleteButton onClick={handleDeleteClick}>Confirm delete</DeleteButton>
              <Link to="/lessons">
                <CancelButton>Cancel</CancelButton>
              </Link>
            </ButtonGroup>
          </>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default ExpiredToken;
