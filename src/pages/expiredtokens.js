import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
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
} from '../styles/viewlesson';

const ExpiredToken = () => {
  const { id } = useParams();

  const handleDeleteClick = () => {
    window.location.href = `/deletelesson/${id}`;
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
